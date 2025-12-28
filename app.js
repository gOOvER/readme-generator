// Pelican Eggs README Generator - Main JavaScript

let isMarkdownView = true;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeNoteCheckboxes();
    generateReadme(); // Generate initial preview
});

// Port Management
function addPort() {
    const container = document.getElementById('ports-container');
    const row = document.createElement('div');
    row.className = 'port-row';
    row.innerHTML = `
        <input type="text" class="port-name" placeholder="Port Name">
        <input type="text" class="port-value" placeholder="Port">
        <button type="button" class="btn-remove" onclick="removePort(this)">✕</button>
    `;
    container.appendChild(row);
}

function removePort(button) {
    const container = document.getElementById('ports-container');
    if (container.children.length > 1) {
        button.parentElement.remove();
    } else {
        showToast('Mindestens ein Port ist erforderlich', 'error');
    }
}

// Link Management
function addLink() {
    const container = document.getElementById('links-container');
    const row = document.createElement('div');
    row.className = 'link-row';
    row.innerHTML = `
        <input type="text" class="link-text" placeholder="Link-Text">
        <input type="url" class="link-url" placeholder="URL">
        <button type="button" class="btn-remove" onclick="removeLink(this)">✕</button>
    `;
    container.appendChild(row);
}

function removeLink(button) {
    const container = document.getElementById('links-container');
    if (container.children.length > 1) {
        button.parentElement.remove();
    } else {
        // Clear the values instead of removing
        const row = button.parentElement;
        row.querySelector('.link-text').value = '';
        row.querySelector('.link-url').value = '';
    }
}

// Custom Section Management
function addCustomSection() {
    const container = document.getElementById('custom-sections-container');
    const sectionId = Date.now();
    const section = document.createElement('div');
    section.className = 'custom-section';
    section.id = `section-${sectionId}`;
    section.innerHTML = `
        <div class="custom-section-header">
            <input type="text" class="section-title" placeholder="Abschnittstitel (z.B. Installation)">
            <button type="button" class="btn-remove" onclick="removeCustomSection('section-${sectionId}')">✕</button>
        </div>
        <textarea class="section-content" rows="4" placeholder="Inhalt des Abschnitts..."></textarea>
    `;
    container.appendChild(section);
}

function removeCustomSection(sectionId) {
    document.getElementById(sectionId).remove();
}

// Note Checkbox Handling
function initializeNoteCheckboxes() {
    const checkboxes = document.querySelectorAll('.note-type input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateNotesContainer();
        });
    });
}

function updateNotesContainer() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    
    const noteTypes = ['important', 'note', 'tip', 'warning'];
    const noteLabels = {
        important: 'Important Hinweis',
        note: 'Note Hinweis',
        tip: 'Tip Hinweis',
        warning: 'Warning Hinweis'
    };
    
    noteTypes.forEach(type => {
        const checkbox = document.getElementById(`note-${type}`);
        if (checkbox && checkbox.checked) {
            const noteDiv = document.createElement('div');
            noteDiv.className = `note-input ${type}`;
            noteDiv.innerHTML = `
                <label>${noteLabels[type]}</label>
                <textarea id="note-${type}-text" rows="2" placeholder="Hinweistext eingeben..."></textarea>
            `;
            container.appendChild(noteDiv);
        }
    });
}

// Generate README
function generateReadme() {
    const eggName = document.getElementById('egg-name').value || 'Egg Name';
    const eggUrl = document.getElementById('egg-url').value;
    const eggDescription = document.getElementById('egg-description').value || 'Beschreibung des Eggs';
    const portsDescription = document.getElementById('ports-description').value;
    const portWarning = document.getElementById('port-warning').value;
    const minRam = document.getElementById('min-ram').value;
    const recommendedSettings = document.getElementById('recommended-settings').value;

    let markdown = '';

    // Title with optional link
    if (eggUrl) {
        markdown += `# [${eggName}](${eggUrl})\n\n`;
    } else {
        markdown += `# ${eggName}\n\n`;
    }

    // Description
    markdown += `${eggDescription}\n\n`;

    // Recommended Server Settings
    if (minRam || recommendedSettings) {
        markdown += `## Recommended server settings\n\n`;
        
        if (minRam) {
            markdown += `### Minimum RAM\n\n`;
            markdown += `This server requires about ${minRam} to run.\n\n`;
        }
        
        if (recommendedSettings) {
            markdown += `${recommendedSettings}\n\n`;
        }
    }

    // Custom Sections
    const customSections = document.querySelectorAll('.custom-section');
    customSections.forEach(section => {
        const title = section.querySelector('.section-title').value;
        const content = section.querySelector('.section-content').value;
        if (title && content) {
            markdown += `## ${title}\n\n`;
            markdown += `${content}\n\n`;
        }
    });

    // Server Ports
    const portRows = document.querySelectorAll('.port-row');
    const ports = [];
    portRows.forEach(row => {
        const name = row.querySelector('.port-name').value;
        const value = row.querySelector('.port-value').value;
        if (name && value) {
            ports.push({ name, value });
        }
    });

    if (ports.length > 0) {
        markdown += `## Server Ports\n\n`;
        
        if (portsDescription) {
            markdown += `${portsDescription}\n\n`;
        }

        // Port Warning
        if (portWarning) {
            markdown += `> [!IMPORTANT]\n`;
            markdown += `> ${portWarning}\n\n`;
        }

        // Port Table
        markdown += `| Port    | Default |\n`;
        markdown += `|---------|--------|\n`;
        ports.forEach(port => {
            markdown += `| ${port.name.padEnd(7)} | ${port.value.padEnd(6)} |\n`;
        });
        markdown += `\n`;
    }

    // Notes
    const noteTypes = ['important', 'note', 'tip', 'warning'];
    noteTypes.forEach(type => {
        const textArea = document.getElementById(`note-${type}-text`);
        if (textArea && textArea.value) {
            markdown += `> [!${type.toUpperCase()}]\n`;
            markdown += `> ${textArea.value}\n\n`;
        }
    });

    // Additional Links
    const linkRows = document.querySelectorAll('.link-row');
    const links = [];
    linkRows.forEach(row => {
        const text = row.querySelector('.link-text').value;
        const url = row.querySelector('.link-url').value;
        if (text && url) {
            links.push({ text, url });
        }
    });

    if (links.length > 0) {
        markdown += `## Additional Links\n\n`;
        links.forEach(link => {
            markdown += `- [${link.text}](${link.url})\n`;
        });
    }

    // Update preview
    document.getElementById('markdown-output').textContent = markdown;
    
    // Update rendered preview using marked
    if (typeof marked !== 'undefined') {
        let rendered = marked.parse(markdown);
        
        // Add styling for GitHub-style alerts
        rendered = rendered.replace(/<blockquote>\s*<p>\[!IMPORTANT\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
            '<blockquote class="important"><p><strong>⚠️ Important</strong><br>$1</p></blockquote>');
        rendered = rendered.replace(/<blockquote>\s*<p>\[!NOTE\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
            '<blockquote class="note"><p><strong>📝 Note</strong><br>$1</p></blockquote>');
        rendered = rendered.replace(/<blockquote>\s*<p>\[!TIP\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
            '<blockquote class="tip"><p><strong>💡 Tip</strong><br>$1</p></blockquote>');
        rendered = rendered.replace(/<blockquote>\s*<p>\[!WARNING\]<br>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, 
            '<blockquote class="warning"><p><strong>🚨 Warning</strong><br>$1</p></blockquote>');
        
        document.getElementById('rendered-output').innerHTML = rendered;
    }

    return markdown;
}

// Toggle Preview Mode
function togglePreviewMode() {
    isMarkdownView = !isMarkdownView;
    
    const markdownPreview = document.getElementById('markdown-preview');
    const renderedPreview = document.getElementById('rendered-preview');
    
    if (isMarkdownView) {
        markdownPreview.classList.add('active');
        renderedPreview.classList.remove('active');
    } else {
        markdownPreview.classList.remove('active');
        renderedPreview.classList.add('active');
    }
}

// Copy to Clipboard
async function copyToClipboard() {
    const markdown = generateReadme();
    
    try {
        await navigator.clipboard.writeText(markdown);
        showToast('README in die Zwischenablage kopiert!', 'success');
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = markdown;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('README in die Zwischenablage kopiert!', 'success');
    }
}

// Download README
function downloadReadme() {
    const markdown = generateReadme();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('README.md wurde heruntergeladen!', 'success');
}

// Reset Form
function resetForm() {
    document.getElementById('readme-form').reset();
    
    // Reset ports to default
    const portsContainer = document.getElementById('ports-container');
    portsContainer.innerHTML = `
        <div class="port-row">
            <input type="text" class="port-name" placeholder="Port Name (z.B. Game)" value="Game">
            <input type="text" class="port-value" placeholder="Port (z.B. 25565)" value="25565">
            <button type="button" class="btn-remove" onclick="removePort(this)">✕</button>
        </div>
        <div class="port-row">
            <input type="text" class="port-name" placeholder="Port Name (z.B. Query)" value="Query">
            <input type="text" class="port-value" placeholder="Port (z.B. 27015)" value="27015">
            <button type="button" class="btn-remove" onclick="removePort(this)">✕</button>
        </div>
    `;
    
    // Reset links
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = `
        <div class="link-row">
            <input type="text" class="link-text" placeholder="Link-Text (z.B. Wiki)">
            <input type="url" class="link-url" placeholder="URL">
            <button type="button" class="btn-remove" onclick="removeLink(this)">✕</button>
        </div>
    `;
    
    // Clear custom sections
    document.getElementById('custom-sections-container').innerHTML = '';
    
    // Clear notes
    document.getElementById('notes-container').innerHTML = '';
    document.querySelectorAll('.note-type input').forEach(cb => cb.checked = false);
    
    generateReadme();
    showToast('Formular zurückgesetzt', 'success');
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Auto-update preview on input
document.addEventListener('input', (e) => {
    if (e.target.closest('#readme-form')) {
        generateReadme();
    }
});
