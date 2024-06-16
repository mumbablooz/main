
export default function GetWindowLanguage() {




        // Führe nur den gesamten Code unten auf der Client-Seite aus
        if (typeof window !== 'undefined') {

  return window.navigator.language
}
}