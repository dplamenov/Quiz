export function currentLanguage() {
    return localStorage.getItem('lang') || 'en';
}
