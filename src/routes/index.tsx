import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
export const Route = createFileRoute('/')({
  component: Home,
})

const wrapperVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const innerVariants = {
  initial: {
    x: -150,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const boxVariants = {
  animate: {
    scale: [1, 2, 2, 1, 0.5, 1],
    rotate: [0, 0, 270, 270, -270, 0],
    borderRadius: ['20%', '10%', '50%', '50%', '10%', '20%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const buttonVariants = {
  click: {
    scale: 0.7,
    color: 'red',
    backgroundColor: '#e2e8f0',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

function Home() {
  return (
    <section className='p-4 flex flex-col min-h-screen'>
      <motion.div variants={wrapperVariants} initial='initial' animate='animate' className='flex flex-col items-start gap-4'>
        <motion.h1 variants={innerVariants} className='text-6xl'>
          Home
        </motion.h1>
        <motion.div variants={innerVariants}>
          <motion.button variants={buttonVariants} whileTap={'click'} className='p-2 bg-red-500 rounded-lg whitespace-nowrap' onClick={() => {}}>
            Woah Button
          </motion.button>
        </motion.div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </motion.div>
      <div className='flex w-full h-full items-center justify-center'>
        <motion.div variants={boxVariants} animate='animate' className='w-32 h-32 bg-rose-500'></motion.div>
      </div>
    </section>
  )
}
