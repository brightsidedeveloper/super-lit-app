/**
 * Get the user's system preference for dark mode
 * @returns true if the user prefers dark mode
 */
export function getSystemPrefersDark() {
  return matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Get the user's preference for dark mode from local storage
 * @returns 'dark', 'light', or null
 */
export function getLocalTheme() {
  return localStorage.getItem('theme') as 'dark' | 'light' | null
}

/**
 * Set the theme to light, dark, or system in local storage and on the html element class list
 * @param choice light, dark, or null (which will use system)
 */
export function setTheme(choice: 'dark' | 'light' | null) {
  // Set Local Storage
  if (!choice) localStorage.removeItem('theme')
  else localStorage.setItem('theme', choice)
  // Check if the user has a preference for dark mode (if not set)
  if (!choice && getSystemPrefersDark()) choice = 'dark'

  const htmlClassList = document.documentElement.classList

  htmlClassList.toggle('dark', choice === 'dark')
}

/**
 * Initialize the theme from local storage (which falls back to system preference)
 */
export function initializeTheme() {
  setTheme(getLocalTheme())
}

/**
 * Runs InitializeTheme with local storage changes
 * @returns a cleanup function to remove the event listener
 */
export function storageThemeEventListener() {
  window.addEventListener('storage', initializeTheme)
  return () => window.removeEventListener('storage', initializeTheme)
}

/**
 * Runs InitializeTheme with media query changes [ matching: (prefers-color-scheme: dark) ]
 * @returns a cleanup function to remove the event listener
 */
export function mediaThemeEventListener() {
  const media = matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', initializeTheme)
  return () => media.removeEventListener('change', initializeTheme)
}
