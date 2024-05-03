export default class DarkMode {
  constructor() {
    this.initializeTheme()
  }

  /**
   * Initialize the theme from local storage (which falls back to system preference)
   */
  initializeTheme() {
    this.setTheme(this.getLocalTheme())
  }

  /**
   * Get the user's system preference for dark mode
   * @returns true if the user prefers dark mode
   */
  getSystemPrefersDark() {
    return matchMedia('(prefers-color-scheme: dark)').matches
  }

  /**
   * Get the user's preference for dark mode from local storage
   * @returns 'dark', 'light', or null
   */
  getLocalTheme() {
    return localStorage.getItem('theme') as 'dark' | 'light' | null
  }

  /**
   * Set the theme to light, dark, or system in local storage and on the html element class list
   * @param choice light, dark, or null (which will use system)
   */
  setTheme(choice: 'dark' | 'light' | null) {
    // Set Local Storage
    if (!choice) localStorage.removeItem('theme')
    else localStorage.setItem('theme', choice)
    // Check if the user has a preference for dark mode (if not set)
    if (!choice && this.getSystemPrefersDark()) choice = 'dark'

    const htmlClassList = document.documentElement.classList

    htmlClassList.toggle('dark', choice === 'dark')
  }

  /**
   * Runs InitializeTheme with the local storage changes
   * @returns a cleanup function to remove the event listener
   */
  storageThemeEventListener() {
    window.addEventListener('storage', this.initializeTheme)
    return () => window.removeEventListener('storage', this.initializeTheme)
  }

  /**
   * Runs InitializeTheme with the media query changes [ matching: (prefers-color-scheme: dark) ]
   * @returns a cleanup function to remove the event listener
   */
  mediaThemeEventListener() {
    const media = matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', this.initializeTheme)
    return () => media.removeEventListener('change', this.initializeTheme)
  }
}
