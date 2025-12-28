export const translations = {
  en: {
    // Header
    title: 'Pelican Eggs README Generator',
    subtitle: 'Generate professional README files for your Pelican Eggs',
    
    // Wizard Steps
    step: 'Step',
    of: 'of',
    next: 'Next',
    back: 'Back',
    finish: 'Finish & Download',
    startOver: 'Start Over',
    
    // Step 1: Game Type
    selectGameType: '🎮 Select Game Type',
    selectGameTypeDesc: 'Choose the type of game server to generate the appropriate README structure.',
    
    gameTypes: {
      steam: {
        name: 'Steam Game Server',
        desc: 'Games hosted via Steam (SteamCMD)',
        icon: '🎮'
      },
      standalone: {
        name: 'Standalone Server',
        desc: 'Independent game servers without Steam',
        icon: '🖥️'
      },
      minecraft: {
        name: 'Minecraft-based',
        desc: 'Minecraft, Forge, Fabric, Paper, etc.',
        icon: '⛏️'
      },
      sourceEngine: {
        name: 'Source Engine',
        desc: 'CS:GO, TF2, Garry\'s Mod, etc.',
        icon: '🔫'
      },
      other: {
        name: 'Other / Custom',
        desc: 'Other applications or custom servers',
        icon: '📦'
      }
    },
    
    // Step 2: Basic Info
    basicInfo: '📋 Basic Information',
    eggName: 'Egg Name *',
    eggNamePlaceholder: 'e.g. Minecraft',
    websiteUrl: 'Official Website URL (optional)',
    websiteUrlPlaceholder: 'https://minecraft.net',
    description: 'Description *',
    descriptionPlaceholder: 'A short description of the game or application...',
    
    // Steam specific
    steamInfo: '🎮 Steam Information',
    steamAppId: 'Steam App ID *',
    steamAppIdPlaceholder: 'e.g. 730',
    steamStoreUrl: 'Steam Store URL',
    steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
    steamDbUrl: 'SteamDB URL',
    steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
    anonymousLogin: 'Anonymous Steam Login possible',
    steamLoginRequired: 'Steam Account required for download',
    
    // Minecraft specific
    minecraftInfo: '⛏️ Minecraft Information',
    minecraftType: 'Server Type',
    minecraftTypes: {
      vanilla: 'Vanilla',
      paper: 'Paper',
      spigot: 'Spigot',
      forge: 'Forge',
      fabric: 'Fabric',
      bungeecord: 'BungeeCord',
      velocity: 'Velocity',
      other: 'Other'
    },
    javaVersion: 'Java Version',
    javaVersionPlaceholder: 'e.g. Java 17',
    minecraftVersion: 'Supported Minecraft Versions',
    minecraftVersionPlaceholder: 'e.g. 1.20.x, 1.19.x',
    
    // Source Engine specific
    sourceInfo: '🔫 Source Engine Information',
    sourceGame: 'Game',
    sourceGames: {
      csgo: 'Counter-Strike 2 / CS:GO',
      css: 'Counter-Strike: Source',
      tf2: 'Team Fortress 2',
      gmod: 'Garry\'s Mod',
      l4d2: 'Left 4 Dead 2',
      other: 'Other Source Game'
    },
    tickrate: 'Tickrate',
    tickratePlaceholder: 'e.g. 64 or 128',
    
    // Step 3: Server Configuration
    serverConfig: '⚙️ Server Configuration',
    
    // Server Ports
    serverPorts: '🔌 Server Ports',
    portDescription: 'Port Description (optional)',
    portDescriptionPlaceholder: 'e.g. Server requires up to 4 ports',
    portNamePlaceholder: 'Port Name (e.g. Game)',
    portValuePlaceholder: 'Port (e.g. 25565)',
    addPort: '+ Add Port',
    portWarning: 'Port Warning (optional)',
    portWarningPlaceholder: 'e.g. Changing the game port from 7777 will result in the server being unreachable!',
    
    // Recommended Settings
    recommendedSettings: '💻 Recommended Settings',
    minRam: 'Minimum RAM',
    minRamPlaceholder: 'e.g. 4096M',
    minCpu: 'Minimum CPU',
    minCpuPlaceholder: 'e.g. 2 Cores',
    minDisk: 'Minimum Disk Space',
    minDiskPlaceholder: 'e.g. 10GB',
    additionalRecommendations: 'Additional Recommendations (optional)',
    additionalRecommendationsPlaceholder: 'Additional recommended settings...',
    
    // Step 4: Additional Info
    additionalInfo: '📝 Additional Information',
    
    // Custom Sections
    customSections: '📝 Custom Sections',
    sectionTitlePlaceholder: 'Section Title',
    sectionContentPlaceholder: 'Section content...',
    addSection: '+ Add Section',
    
    // Notes
    notes: '📌 Notes',
    importantNote: '⚠️ Important Note',
    noteNote: '📝 Note',
    tipNote: '💡 Tip Note',
    warningNote: '🚨 Warning Note',
    notePlaceholder: 'Enter note text...',
    
    // Links
    additionalLinks: '🔗 Additional Links',
    linkTextPlaceholder: 'Link Text (e.g. Wiki)',
    linkUrlPlaceholder: 'URL',
    addLink: '+ Add Link',
    
    // Step 5: Preview & Download
    previewDownload: '📄 Preview & Download',
    preview: 'Preview',
    showRendered: 'Show rendered',
    showMarkdown: 'Show markdown',
    
    // Actions
    reset: 'Reset',
    copy: '📋 Copy',
    downloadMd: '💾 Download .md',
    downloadTxt: '📄 Download .txt',
    downloadBoth: '📥 Download Both',
    
    // Toasts
    copiedToClipboard: 'README copied to clipboard!',
    downloadMdComplete: 'README.md downloaded!',
    downloadTxtComplete: 'README.txt downloaded!',
    downloadBothComplete: 'Both files downloaded!',
    formReset: 'Form reset',
    minOnePort: 'At least one port is required',
    pleaseSelectType: 'Please select a game type',
    pleaseEnterName: 'Please enter an egg name',
    pleaseEnterDescription: 'Please enter a description',
    
    // Footer
    createdFor: 'Created for the',
    community: 'Community',
    
    // Markdown defaults
    defaultDescription: 'Description of the egg...'
  },
  de: {
    // Header
    title: 'Pelican Eggs README Generator',
    subtitle: 'Generiere professionelle README-Dateien für deine Pelican Eggs',
    
    // Wizard Steps
    step: 'Schritt',
    of: 'von',
    next: 'Weiter',
    back: 'Zurück',
    finish: 'Fertig & Download',
    startOver: 'Neu starten',
    
    // Step 1: Game Type
    selectGameType: '🎮 Spieltyp auswählen',
    selectGameTypeDesc: 'Wähle den Typ des Gameservers, um die passende README-Struktur zu generieren.',
    
    gameTypes: {
      steam: {
        name: 'Steam Game Server',
        desc: 'Spiele, die über Steam gehostet werden (SteamCMD)',
        icon: '🎮'
      },
      standalone: {
        name: 'Standalone Server',
        desc: 'Unabhängige Gameserver ohne Steam',
        icon: '🖥️'
      },
      minecraft: {
        name: 'Minecraft-basiert',
        desc: 'Minecraft, Forge, Fabric, Paper, etc.',
        icon: '⛏️'
      },
      sourceEngine: {
        name: 'Source Engine',
        desc: 'CS:GO, TF2, Garry\'s Mod, etc.',
        icon: '🔫'
      },
      other: {
        name: 'Andere / Custom',
        desc: 'Andere Anwendungen oder benutzerdefinierte Server',
        icon: '📦'
      }
    },
    
    // Step 2: Basic Info
    basicInfo: '📋 Basis-Informationen',
    eggName: 'Egg Name *',
    eggNamePlaceholder: 'z.B. Minecraft',
    websiteUrl: 'Offizielle Website URL (optional)',
    websiteUrlPlaceholder: 'https://minecraft.net',
    description: 'Beschreibung *',
    descriptionPlaceholder: 'Eine kurze Beschreibung des Spiels oder der Anwendung...',
    
    // Steam specific
    steamInfo: '🎮 Steam Informationen',
    steamAppId: 'Steam App ID *',
    steamAppIdPlaceholder: 'z.B. 730',
    steamStoreUrl: 'Steam Store URL',
    steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
    steamDbUrl: 'SteamDB URL',
    steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
    anonymousLogin: 'Anonymer Steam-Login möglich',
    steamLoginRequired: 'Steam-Account für Download erforderlich',
    
    // Minecraft specific
    minecraftInfo: '⛏️ Minecraft Informationen',
    minecraftType: 'Server-Typ',
    minecraftTypes: {
      vanilla: 'Vanilla',
      paper: 'Paper',
      spigot: 'Spigot',
      forge: 'Forge',
      fabric: 'Fabric',
      bungeecord: 'BungeeCord',
      velocity: 'Velocity',
      other: 'Andere'
    },
    javaVersion: 'Java Version',
    javaVersionPlaceholder: 'z.B. Java 17',
    minecraftVersion: 'Unterstützte Minecraft-Versionen',
    minecraftVersionPlaceholder: 'z.B. 1.20.x, 1.19.x',
    
    // Source Engine specific
    sourceInfo: '🔫 Source Engine Informationen',
    sourceGame: 'Spiel',
    sourceGames: {
      csgo: 'Counter-Strike 2 / CS:GO',
      css: 'Counter-Strike: Source',
      tf2: 'Team Fortress 2',
      gmod: 'Garry\'s Mod',
      l4d2: 'Left 4 Dead 2',
      other: 'Anderes Source-Spiel'
    },
    tickrate: 'Tickrate',
    tickratePlaceholder: 'z.B. 64 oder 128',
    
    // Step 3: Server Configuration
    serverConfig: '⚙️ Server-Konfiguration',
    
    // Server Ports
    serverPorts: '🔌 Server Ports',
    portDescription: 'Port-Beschreibung (optional)',
    portDescriptionPlaceholder: 'z.B. Server benötigt bis zu 4 Ports',
    portNamePlaceholder: 'Port Name (z.B. Game)',
    portValuePlaceholder: 'Port (z.B. 25565)',
    addPort: '+ Port hinzufügen',
    portWarning: 'Port-Warnung (optional)',
    portWarningPlaceholder: 'z.B. Das Ändern des Game-Ports von 7777 führt dazu, dass der Server nicht erreichbar ist!',
    
    // Recommended Settings
    recommendedSettings: '💻 Empfohlene Einstellungen',
    minRam: 'Minimum RAM',
    minRamPlaceholder: 'z.B. 4096M',
    minCpu: 'Minimum CPU',
    minCpuPlaceholder: 'z.B. 2 Kerne',
    minDisk: 'Minimum Speicherplatz',
    minDiskPlaceholder: 'z.B. 10GB',
    additionalRecommendations: 'Weitere Empfehlungen (optional)',
    additionalRecommendationsPlaceholder: 'Weitere empfohlene Einstellungen...',
    
    // Step 4: Additional Info
    additionalInfo: '📝 Zusätzliche Informationen',
    
    // Custom Sections
    customSections: '📝 Zusätzliche Abschnitte',
    sectionTitlePlaceholder: 'Abschnittstitel',
    sectionContentPlaceholder: 'Inhalt des Abschnitts...',
    addSection: '+ Abschnitt hinzufügen',
    
    // Notes
    notes: '📌 Hinweise',
    importantNote: '⚠️ Important Hinweis',
    noteNote: '📝 Note Hinweis',
    tipNote: '💡 Tip Hinweis',
    warningNote: '🚨 Warning Hinweis',
    notePlaceholder: 'Hinweistext eingeben...',
    
    // Links
    additionalLinks: '🔗 Zusätzliche Links',
    linkTextPlaceholder: 'Link-Text (z.B. Wiki)',
    linkUrlPlaceholder: 'URL',
    addLink: '+ Link hinzufügen',
    
    // Step 5: Preview & Download
    previewDownload: '📄 Vorschau & Download',
    preview: 'Vorschau',
    showRendered: 'Gerendert anzeigen',
    showMarkdown: 'Markdown anzeigen',
    
    // Actions
    reset: 'Zurücksetzen',
    copy: '📋 Kopieren',
    downloadMd: '💾 Download .md',
    downloadTxt: '📄 Download .txt',
    downloadBoth: '📥 Beide herunterladen',
    
    // Toasts
    copiedToClipboard: 'README in die Zwischenablage kopiert!',
    downloadMdComplete: 'README.md heruntergeladen!',
    downloadTxtComplete: 'README.txt heruntergeladen!',
    downloadBothComplete: 'Beide Dateien heruntergeladen!',
    formReset: 'Formular zurückgesetzt',
    minOnePort: 'Mindestens ein Port ist erforderlich',
    pleaseSelectType: 'Bitte wähle einen Spieltyp',
    pleaseEnterName: 'Bitte gib einen Egg-Namen ein',
    pleaseEnterDescription: 'Bitte gib eine Beschreibung ein',
    
    // Footer
    createdFor: 'Erstellt für die',
    community: 'Community',
    
    // Markdown defaults
    defaultDescription: 'Beschreibung des Eggs...'
  }
}
