export default {
  // Header
  title: 'Pelican Eggs README Generator',
  subtitle: 'Générez des fichiers README professionnels pour vos Pelican Eggs',
  
  // Wizard Steps
  step: 'Étape',
  of: 'sur',
  next: 'Suivant',
  back: 'Retour',
  finish: 'Terminer & Télécharger',
  
  // Step 1: Game Type
  selectGameType: '🎮 Sélectionner le type de jeu',
  selectGameTypeDesc: 'Choisissez le type de serveur de jeu pour générer la structure README appropriée.',
  
  gameTypes: {
    steam: {
      name: 'Serveur de jeu Steam',
      desc: 'Jeux hébergés via Steam (SteamCMD)',
      icon: '🎮'
    },
    standalone: {
      name: 'Serveur autonome',
      desc: 'Serveurs de jeu indépendants sans Steam',
      icon: '🖥️'
    },
    minecraft: {
      name: 'Basé sur Minecraft',
      desc: 'Minecraft, Forge, Fabric, Paper, etc.',
      icon: '⛏️'
    },
    other: {
      name: 'Autre / Personnalisé',
      desc: 'Autres applications ou serveurs personnalisés',
      icon: '📦'
    }
  },
  
  // Step 2: Basic Info
  basicInfo: '📋 Informations de base',
  eggName: 'Nom de l\'Egg *',
  eggNamePlaceholder: 'ex. Minecraft',
  websiteUrl: 'URL du site officiel (optionnel)',
  websiteUrlPlaceholder: 'https://minecraft.net',
  description: 'Description *',
  descriptionPlaceholder: 'Une courte description du jeu ou de l\'application...',
  
  // Steam specific
  steamInfo: '🎮 Informations Steam',
  steamAppId: 'ID de l\'application Steam',
  steamAppIdPlaceholder: 'ex. 730 (récupère les données automatiquement)',
  steamStoreUrl: 'URL Steam Store',
  steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
  steamDbUrl: 'URL SteamDB',
  steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
  anonymousLogin: 'Connexion Steam anonyme possible',
  steamLoginRequired: 'Compte Steam requis pour le téléchargement',
  steamDataLoaded: 'Données Steam chargées automatiquement !',
  steamLoading: 'Chargement des données Steam...',
  steamFetchButton: '🔄 Récupérer',
  
  // Minecraft specific
  minecraftInfo: '⛏️ Informations Minecraft',
  minecraftType: 'Type de serveur',
  minecraftTypes: {
    vanilla: 'Vanilla',
    paper: 'Paper',
    spigot: 'Spigot',
    forge: 'Forge',
    fabric: 'Fabric',
    bungeecord: 'BungeeCord',
    velocity: 'Velocity',
    other: 'Autre'
  },
  javaVersion: 'Version Java',
  javaVersionPlaceholder: 'ex. Java 17',
  minecraftVersion: 'Versions Minecraft supportées',
  minecraftVersionPlaceholder: 'ex. 1.20.x, 1.19.x',
  
  // Step 3: Server Configuration
  serverConfig: '⚙️ Configuration du serveur',
  
  // Server Ports
  serverPorts: '🔌 Ports du serveur',
  portDescription: 'Description du port (optionnel)',
  portDescriptionPlaceholder: 'ex. Le serveur nécessite jusqu\'à 4 ports',
  portNamePlaceholder: 'Nom du port (ex. Game)',
  portValuePlaceholder: 'Port (ex. 25565)',
  addPort: '+ Ajouter un port',
  portWarning: 'Avertissement de port (optionnel)',
  portWarningPlaceholder: 'ex. Changer le port de jeu de 7777 rendra le serveur inaccessible !',
  
  // Recommended Settings
  recommendedSettings: '💻 Paramètres recommandés',
  minRam: 'RAM minimum',
  minRamPlaceholder: 'ex. 4096M',
  minCpu: 'CPU minimum',
  minCpuPlaceholder: 'ex. 2 cœurs',
  minDisk: 'Espace disque minimum',
  minDiskPlaceholder: 'ex. 10GB',
  additionalRecommendations: 'Recommandations supplémentaires (optionnel)',
  additionalRecommendationsPlaceholder: 'Paramètres recommandés supplémentaires...',
  
  // Step 4: Additional Info
  additionalInfo: '📝 Informations supplémentaires',
  
  // Custom Sections
  customSections: '📝 Sections personnalisées',
  sectionTitlePlaceholder: 'Titre de la section',
  sectionContentPlaceholder: 'Contenu de la section...',
  addSection: '+ Ajouter une section',
  
  // Notes
  notes: '📌 Notes',
  importantNote: '⚠️ Note importante',
  noteNote: '📝 Note',
  tipNote: '💡 Astuce',
  warningNote: '🚨 Avertissement',
  notePlaceholder: 'Entrez le texte de la note...',
  
  // Links
  additionalLinks: '🔗 Liens supplémentaires',
  linkTextPlaceholder: 'Texte du lien (ex. Wiki)',
  linkUrlPlaceholder: 'URL',
  addLink: '+ Ajouter un lien',
  
  // Step 5: Author Info
  authorInfo: '👤 Informations sur l\'auteur',
  authorDetails: '👤 Détails de l\'auteur',
  authorName: 'Nom de l\'auteur',
  authorNamePlaceholder: 'ex. Jean Dupont',
  authorGithub: 'URL du profil GitHub',
  authorGithubPlaceholder: 'https://github.com/username',
  donationUrl: 'URL de donation (optionnel)',
  donationUrlPlaceholder: 'https://ko-fi.com/username',
  licenseInfo: '📜 Licence',
  license: 'Licence',
  customLicense: 'Nom de licence personnalisée',
  customLicensePlaceholder: 'ex. Licence propriétaire',
  coAuthorsSection: '👥 Co-auteurs',
  coAuthorsHint: 'Ajoutez les contributeurs qui ont amélioré cet egg. Ils seront listés séparément de l\'auteur original.',
  coAuthors: 'Co-auteurs (optionnel)',
  coAuthorsPlaceholder: '- [Nom du contributeur](https://github.com/username)\n- [Autre contributeur](https://github.com/username2)',
  
  // Step 6: Preview & Download
  previewDownload: '📄 Aperçu & Téléchargement',
  preview: 'Aperçu',
  livePreview: '📄 Aperçu en direct',
  showRendered: 'Afficher rendu',
  showMarkdown: 'Afficher markdown',
  
  // Actions
  reset: 'Réinitialiser',
  copy: '📋 Copier',
  downloadMd: '💾 Télécharger .md',
  downloadTxt: '📄 Télécharger .txt',
  downloadBoth: '📥 Télécharger les deux',
  
  // Toasts
  copiedToClipboard: 'README copié dans le presse-papiers !',
  downloadMdComplete: 'README.md téléchargé !',
  downloadTxtComplete: 'README.txt téléchargé !',
  downloadBothComplete: 'Les deux fichiers téléchargés !',
  minOnePort: 'Au moins un port est requis',
  pleaseSelectType: 'Veuillez sélectionner un type de jeu',
  pleaseEnterName: 'Veuillez entrer un nom d\'egg',
  pleaseEnterDescription: 'Veuillez entrer une description',
  
  // Footer
  createdFor: 'Créé pour la',
  community: 'Communauté',
  
  // Markdown defaults
  defaultDescription: 'Description de l\'egg...'
}
