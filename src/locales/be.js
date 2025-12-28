export default {
  // Header
  title: 'Pelican Eggs README Generator',
  subtitle: 'Genereer professionele README-bestanden voor uw Pelican Eggs',
  
  // Wizard Steps
  step: 'Stap',
  of: 'van',
  next: 'Volgende',
  back: 'Terug',
  finish: 'Voltooien & Downloaden',
  
  // Step 1: Game Type
  selectGameType: '🎮 Selecteer speltype',
  selectGameTypeDesc: 'Kies het type gameserver om de juiste README-structuur te genereren.',
  
  gameTypes: {
    steam: {
      name: 'Steam Game Server',
      desc: 'Games gehost via Steam (SteamCMD)',
      icon: '🎮'
    },
    standalone: {
      name: 'Standalone Server',
      desc: 'Onafhankelijke gameservers zonder Steam',
      icon: '🖥️'
    },
    minecraft: {
      name: 'Minecraft-gebaseerd',
      desc: 'Minecraft, Forge, Fabric, Paper, enz.',
      icon: '⛏️'
    },
    other: {
      name: 'Andere / Aangepast',
      desc: 'Andere applicaties of aangepaste servers',
      icon: '📦'
    }
  },
  
  // Step 2: Basic Info
  basicInfo: '📋 Basisinformatie',
  eggName: 'Egg Naam *',
  eggNamePlaceholder: 'bv. Minecraft',
  websiteUrl: 'Officiële website URL (optioneel)',
  websiteUrlPlaceholder: 'https://minecraft.net',
  description: 'Beschrijving *',
  descriptionPlaceholder: 'Een korte beschrijving van het spel of de applicatie...',
  
  // Steam specific
  steamInfo: '🎮 Steam Informatie',
  steamAppId: 'Steam App ID',
  steamAppIdPlaceholder: 'bv. 730 (haalt data automatisch op)',
  steamStoreUrl: 'Steam Store URL',
  steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
  steamDbUrl: 'SteamDB URL',
  steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
  anonymousLogin: 'Anonieme Steam-login mogelijk',
  steamLoginRequired: 'Steam-account vereist voor download',
  steamDataLoaded: 'Steam-gegevens automatisch geladen!',
  steamLoading: 'Steam-gegevens laden...',
  steamFetchButton: '🔄 Ophalen',
  
  // Minecraft specific
  minecraftInfo: '⛏️ Minecraft Informatie',
  minecraftType: 'Server Type',
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
  javaVersion: 'Java Versie',
  javaVersionPlaceholder: 'bv. Java 17',
  minecraftVersion: 'Ondersteunde Minecraft Versies',
  minecraftVersionPlaceholder: 'bv. 1.20.x, 1.19.x',
  
  // Step 3: Server Configuration
  serverConfig: '⚙️ Server Configuratie',
  
  // Server Ports
  serverPorts: '🔌 Server Poorten',
  portDescription: 'Poort Beschrijving (optioneel)',
  portDescriptionPlaceholder: 'bv. Server vereist tot 4 poorten',
  portNamePlaceholder: 'Poortnaam (bv. Game)',
  portValuePlaceholder: 'Poort (bv. 25565)',
  addPort: '+ Poort toevoegen',
  portWarning: 'Poortwaarschuwing (optioneel)',
  portWarningPlaceholder: 'bv. Het wijzigen van de gamepoort van 7777 maakt de server onbereikbaar!',
  
  // Recommended Settings
  recommendedSettings: '💻 Aanbevolen Instellingen',
  minRam: 'Minimum RAM',
  minRamPlaceholder: 'bv. 4096M',
  minCpu: 'Minimum CPU',
  minCpuPlaceholder: 'bv. 2 Cores',
  minDisk: 'Minimum Schijfruimte',
  minDiskPlaceholder: 'bv. 10GB',
  additionalRecommendations: 'Extra Aanbevelingen (optioneel)',
  additionalRecommendationsPlaceholder: 'Extra aanbevolen instellingen...',
  
  // Step 4: Additional Info
  additionalInfo: '📝 Extra Informatie',
  
  // Custom Sections
  customSections: '📝 Aangepaste Secties',
  sectionTitlePlaceholder: 'Sectietitel',
  sectionContentPlaceholder: 'Sectie-inhoud...',
  addSection: '+ Sectie toevoegen',
  
  // Notes
  notes: '📌 Notities',
  importantNote: '⚠️ Belangrijke Notitie',
  noteNote: '📝 Notitie',
  tipNote: '💡 Tip',
  warningNote: '🚨 Waarschuwing',
  notePlaceholder: 'Voer notitietekst in...',
  
  // Links
  additionalLinks: '🔗 Extra Links',
  linkTextPlaceholder: 'Linktekst (bv. Wiki)',
  linkUrlPlaceholder: 'URL',
  addLink: '+ Link toevoegen',
  
  // Step 5: Author Info
  authorInfo: '👤 Auteur Informatie',
  authorDetails: '👤 Auteur Details',
  authorName: 'Auteur Naam',
  authorNamePlaceholder: 'bv. Jan Peeters',
  authorGithub: 'GitHub Profiel URL',
  authorGithubPlaceholder: 'https://github.com/username',
  donationUrl: 'Donatie URL (optioneel)',
  donationUrlPlaceholder: 'https://ko-fi.com/username',
  licenseInfo: '📜 Licentie',
  license: 'Licentie',
  customLicense: 'Aangepaste Licentienaam',
  customLicensePlaceholder: 'bv. Propriëtaire Licentie',
  coAuthorsSection: '👥 Co-auteurs',
  coAuthorsHint: 'Voeg bijdragers toe die deze egg hebben verbeterd. Ze worden apart van de originele auteur vermeld.',
  coAuthors: 'Co-auteurs (optioneel)',
  coAuthorsPlaceholder: '- [Bijdrager Naam](https://github.com/username)\n- [Andere Bijdrager](https://github.com/username2)',
  
  // Step 6: Preview & Download
  previewDownload: '📄 Voorbeeld & Download',
  preview: 'Voorbeeld',
  livePreview: '📄 Live Voorbeeld',
  showRendered: 'Gerenderd tonen',
  showMarkdown: 'Markdown tonen',
  
  // Actions
  reset: 'Resetten',
  copy: '📋 Kopiëren',
  downloadMd: '💾 Download .md',
  downloadTxt: '📄 Download .txt',
  downloadBoth: '📥 Beide downloaden',
  
  // Toasts
  copiedToClipboard: 'README gekopieerd naar klembord!',
  downloadMdComplete: 'README.md gedownload!',
  downloadTxtComplete: 'README.txt gedownload!',
  downloadBothComplete: 'Beide bestanden gedownload!',
  minOnePort: 'Minimaal één poort is vereist',
  pleaseSelectType: 'Selecteer een speltype',
  pleaseEnterName: 'Voer een egg-naam in',
  pleaseEnterDescription: 'Voer een beschrijving in',
  
  // Footer
  createdFor: 'Gemaakt voor de',
  community: 'Community',
  
  // Markdown defaults
  defaultDescription: 'Beschrijving van de egg...'
}
