<script setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

// Form Data
const eggName = ref('')
const eggUrl = ref('')
const eggDescription = ref('')

// Steam
const isSteamGame = ref(false)
const steamStoreUrl = ref('')
const steamDbUrl = ref('')

const portsDescription = ref('')
const portWarning = ref('')
const minRam = ref('')
const recommendedSettings = ref('')

// Ports
const ports = ref([
  { id: 1, name: 'Game', value: '25565' },
  { id: 2, name: 'Query', value: '27015' }
])

// Links
const links = ref([
  { id: 1, text: '', url: '' }
])

// Custom Sections
const customSections = ref([])

// Notes
const enabledNotes = ref({
  important: false,
  note: false,
  tip: false,
  warning: false
})

const noteTexts = ref({
  important: '',
  note: '',
  tip: '',
  warning: ''
})

// Preview
const isMarkdownView = ref(true)
const toasts = ref([])

// Counter für IDs
let portIdCounter = 3
let linkIdCounter = 2
let sectionIdCounter = 1

// Port Functions
function addPort() {
  ports.value.push({ id: portIdCounter++, name: '', value: '' })
}

function removePort(id) {
  if (ports.value.length > 1) {
    ports.value = ports.value.filter(p => p.id !== id)
  } else {
    showToast('Mindestens ein Port ist erforderlich', 'error')
  }
}

// Link Functions
function addLink() {
  links.value.push({ id: linkIdCounter++, text: '', url: '' })
}

function removeLink(id) {
  if (links.value.length > 1) {
    links.value = links.value.filter(l => l.id !== id)
  } else {
    links.value[0] = { id: links.value[0].id, text: '', url: '' }
  }
}

// Custom Section Functions
function addSection() {
  customSections.value.push({ id: sectionIdCounter++, title: '', content: '' })
}

function removeSection(id) {
  customSections.value = customSections.value.filter(s => s.id !== id)
}

// Generate Markdown
const generatedMarkdown = computed(() => {
  let md = ''

  // Title
  if (eggUrl.value) {
    md += `# [${eggName.value || 'Egg Name'}](${eggUrl.value})\n\n`
  } else {
    md += `# ${eggName.value || 'Egg Name'}\n\n`
  }

  // Description
  md += `${eggDescription.value || 'Beschreibung des Eggs...'}\n\n`
  // Steam Links
  if (isSteamGame.value && (steamStoreUrl.value || steamDbUrl.value)) {
    md += `\n\n`
    if (steamStoreUrl.value) {
      md += `[![Steam](https://img.shields.io/badge/Steam-Store-blue?logo=steam)](${steamStoreUrl.value}) `
    }
    if (steamDbUrl.value) {
      md += `[![SteamDB](https://img.shields.io/badge/SteamDB-Info-black?logo=steam)](${steamDbUrl.value})`
    }
  }
  // Recommended Settings
  if (minRam.value || recommendedSettings.value) {
    md += `## Recommended server settings\n\n`
    
    if (minRam.value) {
      md += `### Minimum RAM\n\n`
      md += `This server requires about ${minRam.value} to run.\n\n`
    }
    
    if (recommendedSettings.value) {
      md += `${recommendedSettings.value}\n\n`
    }
  }

  // Custom Sections
  customSections.value.forEach(section => {
    if (section.title && section.content) {
      md += `## ${section.title}\n\n`
      md += `${section.content}\n\n`
    }
  })

  // Server Ports
  const validPorts = ports.value.filter(p => p.name && p.value)
  if (validPorts.length > 0) {
    md += `## Server Ports\n\n`
    
    if (portsDescription.value) {
      md += `${portsDescription.value}\n\n`
    }

    if (portWarning.value) {
      md += `> [!IMPORTANT]\n`
      md += `> ${portWarning.value}\n\n`
    }

    md += `| Port    | Default |\n`
    md += `|---------|---------|\n`
    validPorts.forEach(port => {
      md += `| ${port.name.padEnd(7)} | ${port.value.padEnd(7)} |\n`
    })
    md += `\n`
  }

  // Notes
  const noteTypes = ['important', 'note', 'tip', 'warning']
  noteTypes.forEach(type => {
    if (enabledNotes.value[type] && noteTexts.value[type]) {
      md += `> [!${type.toUpperCase()}]\n`
      md += `> ${noteTexts.value[type]}\n\n`
    }
  })

  // Links
  const validLinks = links.value.filter(l => l.text && l.url)
  if (validLinks.length > 0) {
    md += `## Additional Links\n\n`
    validLinks.forEach(link => {
      md += `- [${link.text}](${link.url})\n`
    })
  }

  return md
})

// Rendered HTML
const renderedHtml = computed(() => {
  let html = marked(generatedMarkdown.value)
  
  // Style GitHub alerts
  html = html.replace(/<blockquote>\s*<p>\[!IMPORTANT\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="important"><p><strong>⚠️ Important</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!NOTE\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="note"><p><strong>📝 Note</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!TIP\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="tip"><p><strong>💡 Tip</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!WARNING\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="warning"><p><strong>🚨 Warning</strong><br>$1</p></blockquote>')
  
  return html
})

// Toggle Preview
function togglePreview() {
  isMarkdownView.value = !isMarkdownView.value
}

// Copy to Clipboard
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedMarkdown.value)
    showToast('README in die Zwischenablage kopiert!', 'success')
  } catch (err) {
    const textarea = document.createElement('textarea')
    textarea.value = generatedMarkdown.value
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    showToast('README in die Zwischenablage kopiert!', 'success')
  }
}

// Download
function downloadReadme() {
  const blob = new Blob([generatedMarkdown.value], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'README.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  showToast('README.md wurde heruntergeladen!', 'success')
}

// Reset Form
function resetForm() {
  eggName.value = ''
  eggUrl.value = ''
  eggDescription.value = ''
  isSteamGame.value = false
  steamStoreUrl.value = ''
  steamDbUrl.value = ''
  portsDescription.value = ''
  portWarning.value = ''
  minRam.value = ''
  recommendedSettings.value = ''
  ports.value = [
    { id: 1, name: 'Game', value: '25565' },
    { id: 2, name: 'Query', value: '27015' }
  ]
  links.value = [{ id: 1, text: '', url: '' }]
  customSections.value = []
  enabledNotes.value = { important: false, note: false, tip: false, warning: false }
  noteTexts.value = { important: '', note: '', tip: '', warning: '' }
  showToast('Formular zurückgesetzt', 'success')
}

// Toast
function showToast(message, type = 'success') {
  const id = Date.now()
  toasts.value.push({ id, message, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 3000)
}
</script>

<template>
  <div class="container">
    <header>
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
        </svg>
        <h1>Pelican Eggs README Generator</h1>
      </div>
      <p class="subtitle">Generiere professionelle README-Dateien für deine Pelican Eggs</p>
    </header>

    <main>
      <!-- Form -->
      <div class="form-container">
        <!-- Basic Info -->
        <section class="form-section">
          <h2>📋 Basis-Informationen</h2>
          <div class="form-group">
            <label>Egg Name *</label>
            <input type="text" v-model="eggName" placeholder="z.B. Minecraft">
          </div>
          
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="isSteamGame">
              <span class="checkmark"></span>
              🎮 Steam Hosted Game
            </label>
          </div>
          
          <div v-if="isSteamGame" class="steam-fields">
            <div class="form-group">
              <label>Steam Store URL</label>
              <input type="url" v-model="steamStoreUrl" placeholder="https://store.steampowered.com/app/...">
            </div>
            <div class="form-group">
              <label>SteamDB URL</label>
              <input type="url" v-model="steamDbUrl" placeholder="https://steamdb.info/app/...">
            </div>
          </div>
          
          <div class="form-group">
            <label>Offizielle Website URL (optional)</label>
            <input type="url" v-model="eggUrl" placeholder="https://minecraft.net">
          </div>
          <div class="form-group">
            <label>Beschreibung *</label>
            <textarea v-model="eggDescription" rows="4" placeholder="Eine kurze Beschreibung des Spiels oder der Anwendung..."></textarea>
          </div>
        </section>

        <!-- Server Ports -->
        <section class="form-section">
          <h2>🔌 Server Ports</h2>
          <div class="form-group">
            <label>Port-Beschreibung (optional)</label>
            <input type="text" v-model="portsDescription" placeholder="z.B. Server benötigt bis zu 4 Ports">
          </div>
          
          <div class="dynamic-row" v-for="port in ports" :key="port.id">
            <input type="text" v-model="port.name" placeholder="Port Name (z.B. Game)">
            <input type="text" v-model="port.value" placeholder="Port (z.B. 25565)">
            <button class="btn-remove" @click="removePort(port.id)">✕</button>
          </div>
          <button class="btn-add" @click="addPort">+ Port hinzufügen</button>
          
          <div class="form-group" style="margin-top: 1rem;">
            <label>Port-Warnung (optional)</label>
            <textarea v-model="portWarning" rows="2" placeholder="z.B. Das Ändern des Game-Ports von 7777 führt dazu, dass der Server nicht erreichbar ist!"></textarea>
          </div>
        </section>

        <!-- Recommended Settings -->
        <section class="form-section">
          <h2>⚙️ Empfohlene Server-Einstellungen</h2>
          <div class="form-group">
            <label>Minimum RAM (optional)</label>
            <input type="text" v-model="minRam" placeholder="z.B. 4096M">
          </div>
          <div class="form-group">
            <label>Weitere Empfehlungen (optional)</label>
            <textarea v-model="recommendedSettings" rows="4" placeholder="Weitere empfohlene Einstellungen..."></textarea>
          </div>
        </section>

        <!-- Custom Sections -->
        <section class="form-section">
          <h2>📝 Zusätzliche Abschnitte</h2>
          <div v-for="section in customSections" :key="section.id" class="custom-section-item">
            <div class="custom-section-header">
              <input type="text" v-model="section.title" placeholder="Abschnittstitel">
              <button class="btn-remove" @click="removeSection(section.id)">✕</button>
            </div>
            <textarea v-model="section.content" rows="3" placeholder="Inhalt des Abschnitts..."></textarea>
          </div>
          <button class="btn-add" @click="addSection">+ Abschnitt hinzufügen</button>
        </section>

        <!-- Notes -->
        <section class="form-section">
          <h2>📌 Hinweise</h2>
          <div class="note-types">
            <label class="note-type">
              <input type="checkbox" v-model="enabledNotes.important">
              <span class="note-badge important">⚠️ Important</span>
            </label>
            <label class="note-type">
              <input type="checkbox" v-model="enabledNotes.note">
              <span class="note-badge note">📝 Note</span>
            </label>
            <label class="note-type">
              <input type="checkbox" v-model="enabledNotes.tip">
              <span class="note-badge tip">💡 Tip</span>
            </label>
            <label class="note-type">
              <input type="checkbox" v-model="enabledNotes.warning">
              <span class="note-badge warning">🚨 Warning</span>
            </label>
          </div>
          
          <div v-if="enabledNotes.important" class="note-input">
            <label>⚠️ Important Hinweis</label>
            <textarea v-model="noteTexts.important" rows="2" placeholder="Important Hinweistext..."></textarea>
          </div>
          <div v-if="enabledNotes.note" class="note-input">
            <label>📝 Note Hinweis</label>
            <textarea v-model="noteTexts.note" rows="2" placeholder="Note Hinweistext..."></textarea>
          </div>
          <div v-if="enabledNotes.tip" class="note-input">
            <label>💡 Tip Hinweis</label>
            <textarea v-model="noteTexts.tip" rows="2" placeholder="Tip Hinweistext..."></textarea>
          </div>
          <div v-if="enabledNotes.warning" class="note-input">
            <label>🚨 Warning Hinweis</label>
            <textarea v-model="noteTexts.warning" rows="2" placeholder="Warning Hinweistext..."></textarea>
          </div>
        </section>

        <!-- Links -->
        <section class="form-section">
          <h2>🔗 Zusätzliche Links</h2>
          <div class="dynamic-row" v-for="link in links" :key="link.id">
            <input type="text" v-model="link.text" placeholder="Link-Text (z.B. Wiki)">
            <input type="url" v-model="link.url" placeholder="URL">
            <button class="btn-remove" @click="removeLink(link.id)">✕</button>
          </div>
          <button class="btn-add" @click="addLink">+ Link hinzufügen</button>
        </section>

        <!-- Actions -->
        <div class="form-actions">
          <button class="btn-secondary" @click="resetForm">Zurücksetzen</button>
          <button class="btn-primary" @click="copyToClipboard">📋 Kopieren</button>
          <button class="btn-primary" @click="downloadReadme">💾 Download</button>
        </div>
      </div>

      <!-- Preview -->
      <section class="preview-section">
        <div class="preview-header">
          <h2>📄 Vorschau</h2>
          <div class="preview-actions">
            <button class="btn-icon" @click="togglePreview" :title="isMarkdownView ? 'Gerendert anzeigen' : 'Markdown anzeigen'">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button class="btn-icon" @click="copyToClipboard" title="Kopieren">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="14" height="14" x="8" y="8" rx="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
            </button>
            <button class="btn-icon" @click="downloadReadme" title="Download">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="preview-container">
          <div v-if="isMarkdownView" class="markdown-preview">
            <pre><code>{{ generatedMarkdown }}</code></pre>
          </div>
          <div v-else class="rendered-preview" v-html="renderedHtml"></div>
        </div>
      </section>
    </main>

    <footer>
      <p>Erstellt für die <a href="https://github.com/pelican-eggs" target="_blank">Pelican Eggs</a> Community</p>
      <p class="version">Version 2.0.0 • Vue 3 + Vite</p>
    </footer>

    <!-- Toast Container -->
    <div class="toast-container">
      <div v-for="toast in toasts" :key="toast.id" :class="['toast', toast.type]">
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>
