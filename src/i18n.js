// Import all locale files
import en from './locales/en.js'
import de from './locales/de.js'
import fr from './locales/fr.js'
import es from './locales/es.js'
import nl from './locales/nl.js'
import pl from './locales/pl.js'
import be from './locales/be.js'

// Export translations object
// To add a new language:
// 1. Create a new file in src/locales/ (e.g., it.js)
// 2. Copy the structure from en.js and translate all strings
// 3. Import it above and add it to the translations object below
export const translations = {
  en,
  de,
  fr,
  es,
  nl,
  pl,
  be
}

// List of available languages for UI
export const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'be', name: 'Belgisch' }
]
