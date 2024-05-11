import { createFileRoute } from '@tanstack/react-router'
import { setTheme } from '../utils/darkMode'
import { motion } from 'framer-motion'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <motion.div className='flex flex-col gap-4'>
      <h1 className='text-6xl'>Home</h1>
      <button className='dark:translate-x-0 translate-x-4 transition-transform' onClick={() => setTheme('light')}>
        Light
      </button>
      <button className='dark:translate-x-4 transition-transform' onClick={() => setTheme('dark')}>
        Dark
      </button>
      <button className='' onClick={() => setTheme(null)}>
        System
      </button>
    </motion.div>
  )
}
