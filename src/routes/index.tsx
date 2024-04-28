import { createFileRoute } from "@tanstack/react-router"
import { useRef } from "react"
import useTheme from "../hooks/useTheme"
import { setTheme } from "../utils/darkMode"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const onClick = () =>
    setTheme(
      document.documentElement.classList.contains("dark") ? "light" : "dark"
    )

  return (
    <div>
      <h1>Home</h1>
      <button className="" onClick={onClick}>
        Change Theme
      </button>
    </div>
  )
}
