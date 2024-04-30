import { createFileRoute } from '@tanstack/react-router'
import { setTheme } from '../utils/darkMode'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const onClick = (theme: 'light' | 'dark' | null) => setTheme(theme)

  return (
    <div className='flex flex-col gap-4'>
      <h1>Home</h1>
      <button className='dark:translate-x-0 translate-x-4 transition-transform' onClick={() => onClick('light')}>
        Light
      </button>
      <button className='dark:translate-x-4 transition-transform' onClick={() => onClick('dark')}>
        Dark
      </button>
      <button className='' onClick={() => onClick(null)}>
        System
      </button>
    </div>
  )
}
