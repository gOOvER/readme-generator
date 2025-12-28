// Import all locale files
import en from './locales/en.js'
import de from './locales/de.js'

// Export translations object
// To add a new language:
// 1. Create a new file in src/locales/ (e.g., fr.js)
// 2. Copy the structure from en.js and translate all strings
// 3. Import it above and add it to the translations object below
export const translations = {
  en,
  de
}

// List of available languages for UI
export const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]
