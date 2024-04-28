export function getSystemPrefersDark() {
  return matchMedia("(prefers-color-scheme: dark)").matches
}
export function getLocalTheme() {
  return localStorage.getItem("theme") as "dark" | "light" | null
}

/**
 * Set the theme to light, dark, or system in local storage and on the html element class list
 * @param choice light, dark, or null (which will use system)
 */
export function setTheme(choice: "dark" | "light" | null) {
  if (!choice && getSystemPrefersDark()) choice = "dark"

  const htmlClassList = document.documentElement.classList

  htmlClassList.toggle("dark", choice === "dark")

  if (choice) return localStorage.setItem("theme", choice)
  localStorage.removeItem("theme")
}

export function initializeTheme() {
  setTheme(getLocalTheme())
}
