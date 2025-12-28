export default {
  // Header
  title: 'Pelican Eggs README Generator',
  subtitle: 'Generiere professionelle README-Dateien für deine Pelican Eggs',
  
  // Wizard Steps
  step: 'Schritt',
  of: 'von',
  next: 'Weiter',
  back: 'Zurück',
  finish: 'Fertig & Download',
  
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
  steamAppId: 'Steam App ID',
  steamAppIdPlaceholder: 'z.B. 730 (lädt Daten automatisch)',
  steamStoreUrl: 'Steam Store URL',
  steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
  steamDbUrl: 'SteamDB URL',
  steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
  anonymousLogin: 'Anonymer Steam-Login möglich',
  steamLoginRequired: 'Steam-Account für Download erforderlich',
  steamDataLoaded: 'Steam-Daten automatisch geladen!',
  steamLoading: 'Lade Steam-Daten...',
  steamFetchButton: '🔄 Laden',
  
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
  
  // Step 5: Author Info
  authorInfo: '👤 Autor-Informationen',
  authorDetails: '👤 Autor-Details',
  authorName: 'Autor Name',
  authorNamePlaceholder: 'z.B. Max Mustermann',
  authorGithub: 'GitHub Profil URL',
  authorGithubPlaceholder: 'https://github.com/username',
  donationUrl: 'Spenden URL (optional)',
  donationUrlPlaceholder: 'https://ko-fi.com/username',
  licenseInfo: '📜 Lizenz',
  license: 'Lizenz',
  customLicense: 'Eigener Lizenzname',
  customLicensePlaceholder: 'z.B. Proprietary License',
  coAuthorsSection: '👥 Co-Autoren',
  coAuthorsHint: 'Füge Mitwirkende hinzu, die dieses Egg verbessert haben. Sie werden separat vom ursprünglichen Autor aufgelistet.',
  coAuthors: 'Co-Autoren (optional)',
  coAuthorsPlaceholder: '- [Mitwirkender Name](https://github.com/username)\n- [Weiterer Mitwirkender](https://github.com/username2)',
  
  // Step 6: Preview & Download
  previewDownload: '📄 Vorschau & Download',
  preview: 'Vorschau',
  livePreview: '📄 Live-Vorschau',
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
