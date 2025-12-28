export default {
  // Header
  title: 'Pelican Eggs README Generator',
  subtitle: 'Twórz profesjonalne pliki README dla swoich Pelican Eggs',
  
  // Wizard Steps
  step: 'Krok',
  of: 'z',
  next: 'Dalej',
  back: 'Wstecz',
  finish: 'Zakończ i Pobierz',
  
  // Step 1: Game Type
  selectGameType: '🎮 Wybierz typ gry',
  selectGameTypeDesc: 'Wybierz typ serwera gry, aby wygenerować odpowiednią strukturę README.',
  
  gameTypes: {
    steam: {
      name: 'Serwer gry Steam',
      desc: 'Gry hostowane przez Steam (SteamCMD)',
      icon: '🎮'
    },
    standalone: {
      name: 'Serwer samodzielny',
      desc: 'Niezależne serwery gier bez Steam',
      icon: '🖥️'
    },
    minecraft: {
      name: 'Oparty na Minecraft',
      desc: 'Minecraft, Forge, Fabric, Paper, itp.',
      icon: '⛏️'
    },
    other: {
      name: 'Inne / Niestandardowe',
      desc: 'Inne aplikacje lub niestandardowe serwery',
      icon: '📦'
    }
  },
  
  // Step 2: Basic Info
  basicInfo: '📋 Podstawowe informacje',
  eggName: 'Nazwa Egg *',
  eggNamePlaceholder: 'np. Minecraft',
  websiteUrl: 'Oficjalna strona URL (opcjonalnie)',
  websiteUrlPlaceholder: 'https://minecraft.net',
  description: 'Opis *',
  descriptionPlaceholder: 'Krótki opis gry lub aplikacji...',
  
  // Steam specific
  steamInfo: '🎮 Informacje Steam',
  steamAppId: 'Steam App ID',
  steamAppIdPlaceholder: 'np. 730 (automatycznie pobiera dane)',
  steamStoreUrl: 'URL Steam Store',
  steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
  steamDbUrl: 'URL SteamDB',
  steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
  anonymousLogin: 'Możliwe anonimowe logowanie Steam',
  steamLoginRequired: 'Konto Steam wymagane do pobrania',
  steamDataLoaded: 'Dane Steam załadowane automatycznie!',
  steamLoading: 'Ładowanie danych Steam...',
  steamFetchButton: '🔄 Pobierz',
  
  // Minecraft specific
  minecraftInfo: '⛏️ Informacje Minecraft',
  minecraftType: 'Typ serwera',
  minecraftTypes: {
    vanilla: 'Vanilla',
    paper: 'Paper',
    spigot: 'Spigot',
    forge: 'Forge',
    fabric: 'Fabric',
    bungeecord: 'BungeeCord',
    velocity: 'Velocity',
    other: 'Inne'
  },
  javaVersion: 'Wersja Java',
  javaVersionPlaceholder: 'np. Java 17',
  minecraftVersion: 'Obsługiwane wersje Minecraft',
  minecraftVersionPlaceholder: 'np. 1.20.x, 1.19.x',
  
  // Step 3: Server Configuration
  serverConfig: '⚙️ Konfiguracja serwera',
  
  // Server Ports
  serverPorts: '🔌 Porty serwera',
  portDescription: 'Opis portu (opcjonalnie)',
  portDescriptionPlaceholder: 'np. Serwer wymaga do 4 portów',
  portNamePlaceholder: 'Nazwa portu (np. Game)',
  portValuePlaceholder: 'Port (np. 25565)',
  addPort: '+ Dodaj port',
  portWarning: 'Ostrzeżenie o porcie (opcjonalnie)',
  portWarningPlaceholder: 'np. Zmiana portu gry z 7777 spowoduje, że serwer będzie nieosiągalny!',
  
  // Recommended Settings
  recommendedSettings: '💻 Zalecane ustawienia',
  minRam: 'Minimalna pamięć RAM',
  minRamPlaceholder: 'np. 4096M',
  minCpu: 'Minimalne CPU',
  minCpuPlaceholder: 'np. 2 rdzenie',
  minDisk: 'Minimalna przestrzeń dyskowa',
  minDiskPlaceholder: 'np. 10GB',
  additionalRecommendations: 'Dodatkowe zalecenia (opcjonalnie)',
  additionalRecommendationsPlaceholder: 'Dodatkowe zalecane ustawienia...',
  
  // Step 4: Additional Info
  additionalInfo: '📝 Dodatkowe informacje',
  
  // Custom Sections
  customSections: '📝 Niestandardowe sekcje',
  sectionTitlePlaceholder: 'Tytuł sekcji',
  sectionContentPlaceholder: 'Zawartość sekcji...',
  addSection: '+ Dodaj sekcję',
  
  // Notes
  notes: '📌 Notatki',
  importantNote: '⚠️ Ważna notatka',
  noteNote: '📝 Notatka',
  tipNote: '💡 Wskazówka',
  warningNote: '🚨 Ostrzeżenie',
  notePlaceholder: 'Wprowadź tekst notatki...',
  
  // Links
  additionalLinks: '🔗 Dodatkowe linki',
  linkTextPlaceholder: 'Tekst linku (np. Wiki)',
  linkUrlPlaceholder: 'URL',
  addLink: '+ Dodaj link',
  
  // Step 5: Author Info
  authorInfo: '👤 Informacje o autorze',
  authorDetails: '👤 Szczegóły autora',
  authorName: 'Nazwa autora',
  authorNamePlaceholder: 'np. Jan Kowalski',
  authorGithub: 'URL profilu GitHub',
  authorGithubPlaceholder: 'https://github.com/username',
  donationUrl: 'URL darowizny (opcjonalnie)',
  donationUrlPlaceholder: 'https://ko-fi.com/username',
  licenseInfo: '📜 Licencja',
  license: 'Licencja',
  customLicense: 'Niestandardowa nazwa licencji',
  customLicensePlaceholder: 'np. Licencja własnościowa',
  coAuthorsSection: '👥 Współautorzy',
  coAuthorsHint: 'Dodaj współtwórców, którzy ulepszyli to egg. Zostaną wymienieni oddzielnie od oryginalnego autora.',
  coAuthors: 'Współautorzy (opcjonalnie)',
  coAuthorsPlaceholder: '- [Nazwa współtwórcy](https://github.com/username)\n- [Inny współtwórca](https://github.com/username2)',
  
  // Step 6: Preview & Download
  previewDownload: '📄 Podgląd i Pobieranie',
  preview: 'Podgląd',
  livePreview: '📄 Podgląd na żywo',
  showRendered: 'Pokaż wyrenderowane',
  showMarkdown: 'Pokaż markdown',
  
  // Actions
  reset: 'Resetuj',
  copy: '📋 Kopiuj',
  downloadMd: '💾 Pobierz .md',
  downloadTxt: '📄 Pobierz .txt',
  downloadBoth: '📥 Pobierz oba',
  
  // Toasts
  copiedToClipboard: 'README skopiowane do schowka!',
  downloadMdComplete: 'README.md pobrane!',
  downloadTxtComplete: 'README.txt pobrane!',
  downloadBothComplete: 'Oba pliki pobrane!',
  minOnePort: 'Wymagany jest co najmniej jeden port',
  pleaseSelectType: 'Proszę wybrać typ gry',
  pleaseEnterName: 'Proszę wprowadzić nazwę egg',
  pleaseEnterDescription: 'Proszę wprowadzić opis',
  
  // Footer
  createdFor: 'Stworzone dla',
  community: 'Społeczności',
  
  // Markdown defaults
  defaultDescription: 'Opis egg...'
}
