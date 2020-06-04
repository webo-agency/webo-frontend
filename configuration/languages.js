let selectedLanguages = [
    {
      "code": "en",
      "iso": "en-GB",
      "name": "English"
    },
    {
      "code": "pl",
      "iso": "pl-PL",
      "name": "Polski"
    }
]

export const availableLanguage = selectedLanguages;

export const defaultLanguage = selectedLanguages[0]

export default {
    availableLanguage: selectedLanguages, 
    defaultLanguage: selectedLanguages[0]
}