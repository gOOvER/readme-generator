<script setup>
import { ref, computed, watch } from 'vue'
import { marked } from 'marked'
import { translations } from './i18n.js'

// Language - detect browser language, fallback to English
function getBrowserLanguage() {
  const browserLang = navigator.language?.split('-')[0] || 'en'
  return translations[browserLang] ? browserLang : 'en'
}

const currentLang = ref(getBrowserLanguage())
const t = computed(() => translations[currentLang.value])

function toggleLanguage() {
  currentLang.value = currentLang.value === 'en' ? 'de' : 'en'
}

// Wizard State
const currentStep = ref(1)
const totalSteps = 6

// Step 1: Game Type
const gameType = ref('')
const gameTypes = ['steam', 'standalone', 'minecraft', 'other']

// Step 2: Basic Info
const eggName = ref('')
const eggUrl = ref('')
const eggDescription = ref('')

// Steam specific
const steamAppId = ref('')
const steamStoreUrl = ref('')
const steamDbUrl = ref('')
const anonymousLogin = ref(true)
const steamLoading = ref(false)
const steamError = ref('')

// Steam API Auto-Fetch
async function fetchSteamData(appId) {
  if (!appId || appId.length < 1) return
  
  steamLoading.value = true
  steamError.value = ''
  
  try {
    const response = await fetch(`/api/steam?appid=${appId}`)
    const data = await response.json()
    
    if (data.error) {
      steamError.value = data.error
      return
    }
    
    // Auto-fill fields
    if (data.name && !eggName.value) {
      eggName.value = data.name
    }
    if (data.description && !eggDescription.value) {
      eggDescription.value = data.description
    }
    if (data.storeUrl) {
      steamStoreUrl.value = data.storeUrl
    }
    if (data.steamDbUrl) {
      steamDbUrl.value = data.steamDbUrl
    }
    if (data.website && !eggUrl.value) {
      eggUrl.value = data.website
    }
    
    showToast(t.value.steamDataLoaded || 'Steam data loaded!', 'success')
    
  } catch (err) {
    steamError.value = 'Failed to fetch Steam data'
  } finally {
    steamLoading.value = false
  }
}

// Watch Steam App ID for auto-fetch (debounced)
let steamDebounceTimer = null
watch(steamAppId, (newVal) => {
  if (steamDebounceTimer) clearTimeout(steamDebounceTimer)
  
  // Immediately generate URLs when valid App ID is entered
  if (newVal && /^\d+$/.test(newVal)) {
    steamStoreUrl.value = `https://store.steampowered.com/app/${newVal}`
    steamDbUrl.value = `https://steamdb.info/app/${newVal}`
  } else {
    steamStoreUrl.value = ''
    steamDbUrl.value = ''
  }
  
  // Debounced API fetch for name and description
  if (newVal && newVal.length >= 2) {
    steamDebounceTimer = setTimeout(() => {
      fetchSteamData(newVal)
    }, 800) // 800ms debounce
  }
})

// Minecraft specific
const minecraftType = ref('paper')
const javaVersion = ref('')
const minecraftVersion = ref('')

// Step 3: Server Configuration
const portsDescription = ref('')
const portWarning = ref('')
const ports = ref([
  { id: 1, name: 'Game', value: '27015' }
])

// Recommended Settings
const minRam = ref('')
const minCpu = ref('')
const minDisk = ref('')
const recommendedSettings = ref('')

// Step 4: Additional Info
const customSections = ref([])
const links = ref([{ id: 1, text: '', url: '' }])
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

// Step 5: Author Info
const authorName = ref('')
const authorGithub = ref('')
const donationUrl = ref('')
const license = ref('MIT')
const licenses = [
  { value: 'MIT', name: 'MIT License' },
  { value: 'GPL-3.0', name: 'GNU GPL v3' },
  { value: 'Apache-2.0', name: 'Apache License 2.0' },
  { value: 'BSD-3-Clause', name: 'BSD 3-Clause' },
  { value: 'BSD-2-Clause', name: 'BSD 2-Clause' },
  { value: 'LGPL-3.0', name: 'GNU LGPL v3' },
  { value: 'MPL-2.0', name: 'Mozilla Public License 2.0' },
  { value: 'ISC', name: 'ISC License' },
  { value: 'Unlicense', name: 'The Unlicense' },
  { value: 'CC0-1.0', name: 'CC0 1.0 Universal' },
  { value: 'custom', name: 'Custom / Other' }
]
const customLicense = ref('')

// Step 6: Preview
const isMarkdownView = ref(true)
const toasts = ref([])

// Counters
let portIdCounter = 2
let linkIdCounter = 2
let sectionIdCounter = 1

// Navigation
function nextStep() {
  if (currentStep.value === 1 && !gameType.value) {
    showToast(t.value.pleaseSelectType, 'error')
    return
  }
  if (currentStep.value === 2) {
    if (!eggName.value) {
      showToast(t.value.pleaseEnterName, 'error')
      return
    }
    if (!eggDescription.value) {
      showToast(t.value.pleaseEnterDescription, 'error')
      return
    }
  }
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

function goToStep(step) {
  if (step <= currentStep.value || (step === currentStep.value + 1 && canProceed())) {
    currentStep.value = step
  }
}

function canProceed() {
  if (currentStep.value === 1 && !gameType.value) return false
  if (currentStep.value === 2 && (!eggName.value || !eggDescription.value)) return false
  return true
}

// Set default ports based on game type
function selectGameType(type) {
  gameType.value = type
  
  // Set default ports based on type
  switch (type) {
    case 'minecraft':
      ports.value = [
        { id: 1, name: 'Game', value: '25565' },
        { id: 2, name: 'Query', value: '25565' }
      ]
      portIdCounter = 3
      break
    case 'steam':
      ports.value = [
        { id: 1, name: 'Game', value: '27015' },
        { id: 2, name: 'Query', value: '27015' },
        { id: 3, name: 'RCON', value: '27015' }
      ]
      portIdCounter = 4
      break
    default:
      ports.value = [{ id: 1, name: 'Game', value: '27015' }]
      portIdCounter = 2
  }
}

// Port Functions
function addPort() {
  ports.value.push({ id: portIdCounter++, name: '', value: '' })
}

function removePort(id) {
  if (ports.value.length > 1) {
    ports.value = ports.value.filter(p => p.id !== id)
  } else {
    showToast(t.value.minOnePort, 'error')
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
  md += `${eggDescription.value || 'Description of the egg...'}\n\n`

  // Steam Badges
  if (gameType.value === 'steam') {
    if (steamStoreUrl.value || steamDbUrl.value || steamAppId.value) {
      if (steamStoreUrl.value) {
        md += `[![Steam](https://img.shields.io/badge/Steam-Store-blue?logo=steam)](${steamStoreUrl.value}) `
      } else if (steamAppId.value) {
        md += `[![Steam](https://img.shields.io/badge/Steam-Store-blue?logo=steam)](https://store.steampowered.com/app/${steamAppId.value}) `
      }
      if (steamDbUrl.value) {
        md += `[![SteamDB](https://img.shields.io/badge/SteamDB-Info-black?logo=steam)](${steamDbUrl.value})`
      } else if (steamAppId.value) {
        md += `[![SteamDB](https://img.shields.io/badge/SteamDB-Info-black?logo=steam)](https://steamdb.info/app/${steamAppId.value})`
      }
      md += `\n\n`
    }

    // Steam Login Info
    if (steamAppId.value) {
      md += `## Steam\n\n`
      md += `- **App ID:** ${steamAppId.value}\n`
      md += `- **Anonymous Login:** ${anonymousLogin.value ? '✅ Yes' : '❌ No'}\n\n`
    }
  }

  // Minecraft specific info
  if (gameType.value === 'minecraft') {
    md += `## Server Information\n\n`
    if (minecraftType.value) {
      md += `- **Server Type:** ${minecraftType.value.charAt(0).toUpperCase() + minecraftType.value.slice(1)}\n`
    }
    if (javaVersion.value) {
      md += `- **Java Version:** ${javaVersion.value}\n`
    }
    if (minecraftVersion.value) {
      md += `- **Supported Versions:** ${minecraftVersion.value}\n`
    }
    md += `\n`
  }

  // Recommended Settings
  if (minRam.value || minCpu.value || minDisk.value || recommendedSettings.value) {
    md += `## Recommended Server Settings\n\n`
    
    if (minRam.value || minCpu.value || minDisk.value) {
      md += `### Minimum Requirements\n\n`
      if (minRam.value) md += `- **RAM:** ${minRam.value}\n`
      if (minCpu.value) md += `- **CPU:** ${minCpu.value}\n`
      if (minDisk.value) md += `- **Disk:** ${minDisk.value}\n`
      md += `\n`
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
    md += `\n`
  }

  // Author Section
  if (authorName.value || authorGithub.value || donationUrl.value || license.value) {
    md += `## Author\n\n`
    if (authorName.value) {
      if (authorGithub.value) {
        md += `**Author:** [${authorName.value}](${authorGithub.value})\n\n`
      } else {
        md += `**Author:** ${authorName.value}\n\n`
      }
    }
    if (donationUrl.value) {
      md += `[![Donate](https://img.shields.io/badge/Donate-Support-green)](${donationUrl.value})\n\n`
    }
  }

  // License
  const licenseValue = license.value === 'custom' ? customLicense.value : license.value
  if (licenseValue) {
    md += `## License\n\n`
    md += `This project is licensed under the **${licenseValue}** license.\n`
  }

  return md
})

// Generate plain text version
const generatedText = computed(() => {
  let txt = ''

  // Title
  txt += `${eggName.value || 'Egg Name'}\n`
  txt += `${'='.repeat((eggName.value || 'Egg Name').length)}\n\n`

  // Description
  txt += `${eggDescription.value || 'Description of the egg...'}\n\n`

  // Steam info
  if (gameType.value === 'steam' && steamAppId.value) {
    txt += `Steam\n-----\n`
    txt += `App ID: ${steamAppId.value}\n`
    txt += `Anonymous Login: ${anonymousLogin.value ? 'Yes' : 'No'}\n`
    if (steamStoreUrl.value) txt += `Store: ${steamStoreUrl.value}\n`
    if (steamDbUrl.value) txt += `SteamDB: ${steamDbUrl.value}\n`
    txt += `\n`
  }

  // Minecraft info
  if (gameType.value === 'minecraft') {
    txt += `Server Information\n------------------\n`
    if (minecraftType.value) txt += `Server Type: ${minecraftType.value}\n`
    if (javaVersion.value) txt += `Java Version: ${javaVersion.value}\n`
    if (minecraftVersion.value) txt += `Supported Versions: ${minecraftVersion.value}\n`
    txt += `\n`
  }

  // Requirements
  if (minRam.value || minCpu.value || minDisk.value) {
    txt += `Minimum Requirements\n--------------------\n`
    if (minRam.value) txt += `RAM: ${minRam.value}\n`
    if (minCpu.value) txt += `CPU: ${minCpu.value}\n`
    if (minDisk.value) txt += `Disk: ${minDisk.value}\n`
    txt += `\n`
  }

  if (recommendedSettings.value) {
    txt += `${recommendedSettings.value}\n\n`
  }

  // Custom sections
  customSections.value.forEach(section => {
    if (section.title && section.content) {
      txt += `${section.title}\n`
      txt += `${'-'.repeat(section.title.length)}\n`
      txt += `${section.content}\n\n`
    }
  })

  // Ports
  const validPorts = ports.value.filter(p => p.name && p.value)
  if (validPorts.length > 0) {
    txt += `Server Ports\n------------\n`
    if (portsDescription.value) txt += `${portsDescription.value}\n\n`
    if (portWarning.value) txt += `[!] ${portWarning.value}\n\n`
    validPorts.forEach(port => {
      txt += `${port.name}: ${port.value}\n`
    })
    txt += `\n`
  }

  // Notes
  if (enabledNotes.value.important && noteTexts.value.important) {
    txt += `[IMPORTANT] ${noteTexts.value.important}\n\n`
  }
  if (enabledNotes.value.note && noteTexts.value.note) {
    txt += `[NOTE] ${noteTexts.value.note}\n\n`
  }
  if (enabledNotes.value.tip && noteTexts.value.tip) {
    txt += `[TIP] ${noteTexts.value.tip}\n\n`
  }
  if (enabledNotes.value.warning && noteTexts.value.warning) {
    txt += `[WARNING] ${noteTexts.value.warning}\n\n`
  }

  // Links
  const validLinks = links.value.filter(l => l.text && l.url)
  if (validLinks.length > 0) {
    txt += `Additional Links\n----------------\n`
    validLinks.forEach(link => {
      txt += `${link.text}: ${link.url}\n`
    })
    txt += `\n`
  }

  // Author Section
  if (authorName.value || authorGithub.value || donationUrl.value) {
    txt += `Author\n------\n`
    if (authorName.value) txt += `Author: ${authorName.value}\n`
    if (authorGithub.value) txt += `GitHub: ${authorGithub.value}\n`
    if (donationUrl.value) txt += `Donate: ${donationUrl.value}\n`
    txt += `\n`
  }

  // License
  const licenseValue = license.value === 'custom' ? customLicense.value : license.value
  if (licenseValue) {
    txt += `License\n-------\n`
    txt += `This project is licensed under the ${licenseValue} license.\n`
  }

  return txt
})

// Rendered HTML
const renderedHtml = computed(() => {
  let html = marked(generatedMarkdown.value)
  
  // GitHub-style alerts - handle different marked output formats
  html = html.replace(/<blockquote>\s*<p>\[!IMPORTANT\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="important"><p><strong>⚠️ Important</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!NOTE\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="note"><p><strong>📝 Note</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!TIP\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="tip"><p><strong>💡 Tip</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!WARNING\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="warning"><p><strong>🚨 Warning</strong><br>$1</p></blockquote>')
  
  // Also handle when marked renders with newlines instead of <br>
  html = html.replace(/<blockquote>\s*<p>\[!IMPORTANT\]\n([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="important"><p><strong>⚠️ Important</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!NOTE\]\n([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="note"><p><strong>📝 Note</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!TIP\]\n([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="tip"><p><strong>💡 Tip</strong><br>$1</p></blockquote>')
  html = html.replace(/<blockquote>\s*<p>\[!WARNING\]\n([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
    '<blockquote class="warning"><p><strong>🚨 Warning</strong><br>$1</p></blockquote>')
  
  return html
})

function togglePreview() {
  isMarkdownView.value = !isMarkdownView.value
}

// Copy to Clipboard
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedMarkdown.value)
    showToast(t.value.copiedToClipboard, 'success')
  } catch (err) {
    const textarea = document.createElement('textarea')
    textarea.value = generatedMarkdown.value
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    showToast(t.value.copiedToClipboard, 'success')
  }
}

// Download MD
function downloadMd() {
  const blob = new Blob([generatedMarkdown.value], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'README.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  showToast(t.value.downloadMdComplete, 'success')
}

// Download TXT
function downloadTxt() {
  const blob = new Blob([generatedText.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'README.txt'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  showToast(t.value.downloadTxtComplete, 'success')
}

// Download Both
function downloadBoth() {
  downloadMd()
  setTimeout(() => {
    downloadTxt()
    showToast(t.value.downloadBothComplete, 'success')
  }, 500)
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
      <div class="header-top">
        <button class="btn-lang" @click="toggleLanguage" :title="currentLang === 'en' ? 'Switch to German' : 'Zu Englisch wechseln'">
          <!-- Aktuelle Sprache -->
          <span class="current-lang">
            <svg v-if="currentLang === 'en'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="flag-icon">
              <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
              <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
              </g>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" class="flag-icon">
              <rect width="5" height="3" fill="#FFCE00"/>
              <rect width="5" height="2" fill="#D00"/>
              <rect width="5" height="1" fill="#000"/>
            </svg>
            <span class="lang-code">{{ currentLang.toUpperCase() }}</span>
          </span>
          <!-- Pfeil -->
          <svg class="lang-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
        </svg>
        <h1>{{ t.title }}</h1>
      </div>
      <p class="subtitle">{{ t.subtitle }}</p>
    </header>

    <!-- Progress Bar -->
    <div class="wizard-progress">
      <div 
        v-for="step in totalSteps" 
        :key="step"
        :class="['progress-step', { active: step === currentStep, completed: step < currentStep }]"
        @click="goToStep(step)"
      >
        <div class="step-number">{{ step }}</div>
        <div class="step-line" v-if="step < totalSteps"></div>
      </div>
    </div>
    <div class="step-indicator">
      {{ t.step }} {{ currentStep }} {{ t.of }} {{ totalSteps }}
    </div>

    <main class="wizard-main">
      <!-- Step 1: Game Type Selection -->
      <section v-if="currentStep === 1" class="wizard-step">
        <h2>{{ t.selectGameType }}</h2>
        <p class="step-description">{{ t.selectGameTypeDesc }}</p>
        
        <div class="game-type-grid">
          <div 
            v-for="type in gameTypes" 
            :key="type"
            :class="['game-type-card', { selected: gameType === type }]"
            @click="selectGameType(type)"
          >
            <span class="game-type-icon">{{ t.gameTypes[type].icon }}</span>
            <h3>{{ t.gameTypes[type].name }}</h3>
            <p>{{ t.gameTypes[type].desc }}</p>
          </div>
        </div>
      </section>

      <!-- Step 2: Basic Info -->
      <section v-if="currentStep === 2" class="wizard-step">
        <h2>{{ t.basicInfo }}</h2>
        
        <!-- Steam App ID first for auto-fetch -->
        <div v-if="gameType === 'steam'" class="form-section steam-id-section">
          <h3>{{ t.steamInfo }}</h3>
          
          <div class="form-group">
            <label>{{ t.steamAppId }}</label>
            <div class="input-with-status">
              <input type="text" v-model="steamAppId" :placeholder="t.steamAppIdPlaceholder" :class="{ loading: steamLoading }">
              <span v-if="steamLoading" class="input-status loading">⏳</span>
              <span v-else-if="steamError" class="input-status error" :title="steamError">❌</span>
              <span v-else-if="steamStoreUrl && steamAppId" class="input-status success">✅</span>
            </div>
            <small v-if="steamLoading" class="status-text">{{ t.steamLoading }}</small>
            <small v-else-if="steamError" class="status-text error">{{ steamError }}</small>
          </div>
        </div>
        
        <div class="form-section">
          <div class="form-group">
            <label>{{ t.eggName }}</label>
            <input type="text" v-model="eggName" :placeholder="t.eggNamePlaceholder">
          </div>
          
          <div class="form-group">
            <label>{{ t.websiteUrl }}</label>
            <input type="url" v-model="eggUrl" :placeholder="t.websiteUrlPlaceholder">
          </div>
          
          <div class="form-group">
            <label>{{ t.description }}</label>
            <textarea v-model="eggDescription" rows="4" :placeholder="t.descriptionPlaceholder"></textarea>
          </div>
        </div>

        <!-- Steam additional fields -->
        <div v-if="gameType === 'steam'" class="form-section">
          <h3>🔗 Steam URLs</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label>{{ t.steamStoreUrl }}</label>
              <input type="url" v-model="steamStoreUrl" :placeholder="t.steamStoreUrlPlaceholder">
            </div>
            <div class="form-group">
              <label>{{ t.steamDbUrl }}</label>
              <input type="url" v-model="steamDbUrl" :placeholder="t.steamDbUrlPlaceholder">
            </div>
          </div>
          
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="anonymousLogin">
              <span class="checkmark"></span>
              {{ t.anonymousLogin }}
            </label>
          </div>
        </div>

        <!-- Minecraft specific fields -->
        <div v-if="gameType === 'minecraft'" class="form-section">
          <h3>{{ t.minecraftInfo }}</h3>
          
          <div class="form-group">
            <label>{{ t.minecraftType }}</label>
            <select v-model="minecraftType">
              <option v-for="(label, key) in t.minecraftTypes" :key="key" :value="key">
                {{ label }}
              </option>
            </select>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>{{ t.javaVersion }}</label>
              <input type="text" v-model="javaVersion" :placeholder="t.javaVersionPlaceholder">
            </div>
            <div class="form-group">
              <label>{{ t.minecraftVersion }}</label>
              <input type="text" v-model="minecraftVersion" :placeholder="t.minecraftVersionPlaceholder">
            </div>
          </div>
        </div>
      </section>

      <!-- Step 3: Server Configuration -->
      <section v-if="currentStep === 3" class="wizard-step">
        <h2>{{ t.serverConfig }}</h2>
        
        <!-- Ports -->
        <div class="form-section">
          <h3>{{ t.serverPorts }}</h3>
          
          <div class="form-group">
            <label>{{ t.portDescription }}</label>
            <input type="text" v-model="portsDescription" :placeholder="t.portDescriptionPlaceholder">
          </div>
          
          <div class="dynamic-row" v-for="port in ports" :key="port.id">
            <input type="text" v-model="port.name" :placeholder="t.portNamePlaceholder">
            <input type="text" v-model="port.value" :placeholder="t.portValuePlaceholder">
            <button class="btn-remove" @click="removePort(port.id)">✕</button>
          </div>
          <button class="btn-add" @click="addPort">{{ t.addPort }}</button>
          
          <div class="form-group" style="margin-top: 1rem;">
            <label>{{ t.portWarning }}</label>
            <textarea v-model="portWarning" rows="2" :placeholder="t.portWarningPlaceholder"></textarea>
          </div>
        </div>

        <!-- Requirements -->
        <div class="form-section">
          <h3>{{ t.recommendedSettings }}</h3>
          
          <div class="form-group">
            <label>{{ t.minRam }}</label>
            <input type="text" v-model="minRam" :placeholder="t.minRamPlaceholder">
          </div>
          <div class="form-group">
            <label>{{ t.minCpu }}</label>
            <input type="text" v-model="minCpu" :placeholder="t.minCpuPlaceholder">
          </div>
          <div class="form-group">
            <label>{{ t.minDisk }}</label>
            <input type="text" v-model="minDisk" :placeholder="t.minDiskPlaceholder">
          </div>
          
          <div class="form-group">
            <label>{{ t.additionalRecommendations }}</label>
            <textarea v-model="recommendedSettings" rows="3" :placeholder="t.additionalRecommendationsPlaceholder"></textarea>
          </div>
        </div>
      </section>

      <!-- Step 4: Additional Info -->
      <section v-if="currentStep === 4" class="wizard-step">
        <h2>{{ t.additionalInfo }}</h2>
        
        <!-- Custom Sections -->
        <div class="form-section">
          <h3>{{ t.customSections }}</h3>
          <div v-for="section in customSections" :key="section.id" class="custom-section-item">
            <div class="custom-section-header">
              <input type="text" v-model="section.title" :placeholder="t.sectionTitlePlaceholder">
              <button class="btn-remove" @click="removeSection(section.id)">✕</button>
            </div>
            <textarea v-model="section.content" rows="3" :placeholder="t.sectionContentPlaceholder"></textarea>
          </div>
          <button class="btn-add" @click="addSection">{{ t.addSection }}</button>
        </div>

        <!-- Notes -->
        <div class="form-section">
          <h3>{{ t.notes }}</h3>
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
            <label>{{ t.importantNote }}</label>
            <textarea v-model="noteTexts.important" rows="2" :placeholder="t.notePlaceholder"></textarea>
          </div>
          <div v-if="enabledNotes.note" class="note-input">
            <label>{{ t.noteNote }}</label>
            <textarea v-model="noteTexts.note" rows="2" :placeholder="t.notePlaceholder"></textarea>
          </div>
          <div v-if="enabledNotes.tip" class="note-input">
            <label>{{ t.tipNote }}</label>
            <textarea v-model="noteTexts.tip" rows="2" :placeholder="t.notePlaceholder"></textarea>
          </div>
          <div v-if="enabledNotes.warning" class="note-input">
            <label>{{ t.warningNote }}</label>
            <textarea v-model="noteTexts.warning" rows="2" :placeholder="t.notePlaceholder"></textarea>
          </div>
        </div>

        <!-- Links -->
        <div class="form-section">
          <h3>{{ t.additionalLinks }}</h3>
          <div class="dynamic-row" v-for="link in links" :key="link.id">
            <input type="text" v-model="link.text" :placeholder="t.linkTextPlaceholder">
            <input type="url" v-model="link.url" :placeholder="t.linkUrlPlaceholder">
            <button class="btn-remove" @click="removeLink(link.id)">✕</button>
          </div>
          <button class="btn-add" @click="addLink">{{ t.addLink }}</button>
        </div>
      </section>

      <!-- Step 5: Author Info -->
      <section v-if="currentStep === 5" class="wizard-step">
        <h2>{{ t.authorInfo }}</h2>
        
        <div class="form-section">
          <h3>{{ t.authorDetails }}</h3>
          
          <div class="form-group">
            <label>{{ t.authorName }}</label>
            <input type="text" v-model="authorName" :placeholder="t.authorNamePlaceholder">
          </div>
          
          <div class="form-group">
            <label>{{ t.authorGithub }}</label>
            <input type="url" v-model="authorGithub" :placeholder="t.authorGithubPlaceholder">
          </div>
          
          <div class="form-group">
            <label>{{ t.donationUrl }}</label>
            <input type="url" v-model="donationUrl" :placeholder="t.donationUrlPlaceholder">
          </div>
        </div>
        
        <div class="form-section">
          <h3>{{ t.licenseInfo }}</h3>
          
          <div class="form-group">
            <label>{{ t.license }}</label>
            <select v-model="license">
              <option v-for="lic in licenses" :key="lic.value" :value="lic.value">
                {{ lic.name }}
              </option>
            </select>
          </div>
          
          <div v-if="license === 'custom'" class="form-group">
            <label>{{ t.customLicense }}</label>
            <input type="text" v-model="customLicense" :placeholder="t.customLicensePlaceholder">
          </div>
        </div>
      </section>

      <!-- Step 6: Preview & Download -->
      <section v-if="currentStep === 6" class="wizard-step preview-step">
        <h2>{{ t.previewDownload }}</h2>
        
        <div class="preview-section">
          <div class="preview-header">
            <h3>{{ t.preview }}</h3>
            <div class="preview-actions">
              <button class="btn-icon" @click="togglePreview" :title="isMarkdownView ? t.showRendered : t.showMarkdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button class="btn-icon" @click="copyToClipboard" :title="t.copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="14" height="14" x="8" y="8" rx="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
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
        </div>

        <div class="download-buttons">
          <button class="btn-download md" @click="downloadMd">{{ t.downloadMd }}</button>
          <button class="btn-download txt" @click="downloadTxt">{{ t.downloadTxt }}</button>
          <button class="btn-download both" @click="downloadBoth">{{ t.downloadBoth }}</button>
        </div>
      </section>

      <!-- Navigation Buttons -->
      <div class="wizard-nav">
        <button v-if="currentStep > 1" class="btn-secondary" @click="prevStep">
          ← {{ t.back }}
        </button>
        <div class="nav-spacer"></div>
        <button v-if="currentStep < totalSteps" class="btn-primary" @click="nextStep">
          {{ t.next }} →
        </button>
        <button v-if="currentStep === totalSteps" class="btn-primary finish" @click="downloadBoth">
          {{ t.finish }}
        </button>
      </div>
    </main>

    <footer>
      <p>{{ t.createdFor }} <a href="https://github.com/pelican-eggs" target="_blank">Pelican Eggs</a> {{ t.community }}</p>
      <p class="version">Version 3.0.0 • Wizard Mode</p>
    </footer>

    <!-- Toast Container -->
    <div class="toast-container">
      <div v-for="toast in toasts" :key="toast.id" :class="['toast', toast.type]">
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>
