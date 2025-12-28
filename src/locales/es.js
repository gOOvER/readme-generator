export default {
  // Header
  title: 'Pelican Eggs README Generator',
  subtitle: 'Genera archivos README profesionales para tus Pelican Eggs',
  
  // Wizard Steps
  step: 'Paso',
  of: 'de',
  next: 'Siguiente',
  back: 'Atrás',
  finish: 'Finalizar y Descargar',
  
  // Step 1: Game Type
  selectGameType: '🎮 Seleccionar tipo de juego',
  selectGameTypeDesc: 'Elige el tipo de servidor de juego para generar la estructura README apropiada.',
  
  gameTypes: {
    steam: {
      name: 'Servidor de juego Steam',
      desc: 'Juegos alojados a través de Steam (SteamCMD)',
      icon: '🎮'
    },
    standalone: {
      name: 'Servidor independiente',
      desc: 'Servidores de juego independientes sin Steam',
      icon: '🖥️'
    },
    minecraft: {
      name: 'Basado en Minecraft',
      desc: 'Minecraft, Forge, Fabric, Paper, etc.',
      icon: '⛏️'
    },
    other: {
      name: 'Otro / Personalizado',
      desc: 'Otras aplicaciones o servidores personalizados',
      icon: '📦'
    }
  },
  
  // Step 2: Basic Info
  basicInfo: '📋 Información básica',
  eggName: 'Nombre del Egg *',
  eggNamePlaceholder: 'ej. Minecraft',
  websiteUrl: 'URL del sitio web oficial (opcional)',
  websiteUrlPlaceholder: 'https://minecraft.net',
  description: 'Descripción *',
  descriptionPlaceholder: 'Una breve descripción del juego o aplicación...',
  
  // Steam specific
  steamInfo: '🎮 Información de Steam',
  steamAppId: 'ID de aplicación Steam',
  steamAppIdPlaceholder: 'ej. 730 (obtiene datos automáticamente)',
  steamStoreUrl: 'URL de Steam Store',
  steamStoreUrlPlaceholder: 'https://store.steampowered.com/app/...',
  steamDbUrl: 'URL de SteamDB',
  steamDbUrlPlaceholder: 'https://steamdb.info/app/...',
  anonymousLogin: 'Inicio de sesión anónimo de Steam posible',
  steamLoginRequired: 'Cuenta Steam requerida para descargar',
  steamDataLoaded: '¡Datos de Steam cargados automáticamente!',
  steamLoading: 'Cargando datos de Steam...',
  steamFetchButton: '🔄 Obtener',
  
  // Minecraft specific
  minecraftInfo: '⛏️ Información de Minecraft',
  minecraftType: 'Tipo de servidor',
  minecraftTypes: {
    vanilla: 'Vanilla',
    paper: 'Paper',
    spigot: 'Spigot',
    forge: 'Forge',
    fabric: 'Fabric',
    bungeecord: 'BungeeCord',
    velocity: 'Velocity',
    other: 'Otro'
  },
  javaVersion: 'Versión de Java',
  javaVersionPlaceholder: 'ej. Java 17',
  minecraftVersion: 'Versiones de Minecraft soportadas',
  minecraftVersionPlaceholder: 'ej. 1.20.x, 1.19.x',
  
  // Step 3: Server Configuration
  serverConfig: '⚙️ Configuración del servidor',
  
  // Server Ports
  serverPorts: '🔌 Puertos del servidor',
  portDescription: 'Descripción del puerto (opcional)',
  portDescriptionPlaceholder: 'ej. El servidor requiere hasta 4 puertos',
  portNamePlaceholder: 'Nombre del puerto (ej. Game)',
  portValuePlaceholder: 'Puerto (ej. 25565)',
  addPort: '+ Añadir puerto',
  portWarning: 'Advertencia de puerto (opcional)',
  portWarningPlaceholder: 'ej. ¡Cambiar el puerto del juego de 7777 hará que el servidor sea inaccesible!',
  
  // Recommended Settings
  recommendedSettings: '💻 Configuración recomendada',
  minRam: 'RAM mínima',
  minRamPlaceholder: 'ej. 4096M',
  minCpu: 'CPU mínimo',
  minCpuPlaceholder: 'ej. 2 núcleos',
  minDisk: 'Espacio en disco mínimo',
  minDiskPlaceholder: 'ej. 10GB',
  additionalRecommendations: 'Recomendaciones adicionales (opcional)',
  additionalRecommendationsPlaceholder: 'Configuraciones adicionales recomendadas...',
  
  // Step 4: Additional Info
  additionalInfo: '📝 Información adicional',
  
  // Custom Sections
  customSections: '📝 Secciones personalizadas',
  sectionTitlePlaceholder: 'Título de la sección',
  sectionContentPlaceholder: 'Contenido de la sección...',
  addSection: '+ Añadir sección',
  
  // Notes
  notes: '📌 Notas',
  importantNote: '⚠️ Nota importante',
  noteNote: '📝 Nota',
  tipNote: '💡 Consejo',
  warningNote: '🚨 Advertencia',
  notePlaceholder: 'Ingresa el texto de la nota...',
  
  // Links
  additionalLinks: '🔗 Enlaces adicionales',
  linkTextPlaceholder: 'Texto del enlace (ej. Wiki)',
  linkUrlPlaceholder: 'URL',
  addLink: '+ Añadir enlace',
  
  // Step 5: Author Info
  authorInfo: '👤 Información del autor',
  authorDetails: '👤 Detalles del autor',
  authorName: 'Nombre del autor',
  authorNamePlaceholder: 'ej. Juan García',
  authorGithub: 'URL del perfil de GitHub',
  authorGithubPlaceholder: 'https://github.com/username',
  donationUrl: 'URL de donación (opcional)',
  donationUrlPlaceholder: 'https://ko-fi.com/username',
  licenseInfo: '📜 Licencia',
  license: 'Licencia',
  customLicense: 'Nombre de licencia personalizada',
  customLicensePlaceholder: 'ej. Licencia propietaria',
  coAuthorsSection: '👥 Coautores',
  coAuthorsHint: 'Añade colaboradores que hayan mejorado este egg. Se listarán por separado del autor original.',
  coAuthors: 'Coautores (opcional)',
  coAuthorsPlaceholder: '- [Nombre del colaborador](https://github.com/username)\n- [Otro colaborador](https://github.com/username2)',
  
  // Step 6: Preview & Download
  previewDownload: '📄 Vista previa y Descarga',
  preview: 'Vista previa',
  livePreview: '📄 Vista previa en vivo',
  showRendered: 'Mostrar renderizado',
  showMarkdown: 'Mostrar markdown',
  
  // Actions
  reset: 'Reiniciar',
  copy: '📋 Copiar',
  downloadMd: '💾 Descargar .md',
  downloadTxt: '📄 Descargar .txt',
  downloadBoth: '📥 Descargar ambos',
  
  // Toasts
  copiedToClipboard: '¡README copiado al portapapeles!',
  downloadMdComplete: '¡README.md descargado!',
  downloadTxtComplete: '¡README.txt descargado!',
  downloadBothComplete: '¡Ambos archivos descargados!',
  minOnePort: 'Se requiere al menos un puerto',
  pleaseSelectType: 'Por favor selecciona un tipo de juego',
  pleaseEnterName: 'Por favor ingresa un nombre de egg',
  pleaseEnterDescription: 'Por favor ingresa una descripción',
  
  // Footer
  createdFor: 'Creado para la',
  community: 'Comunidad',
  
  // Markdown defaults
  defaultDescription: 'Descripción del egg...'
}
