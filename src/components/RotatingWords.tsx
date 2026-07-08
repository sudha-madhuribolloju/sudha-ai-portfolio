import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type RotatingWordsProps = {
  words: string[]
  interval?: number
}

export function RotatingWords({ words, interval = 2200 }: RotatingWordsProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="relative inline-flex h-[1.4em] min-w-[13ch] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center font-mono text-azure-500 dark:text-sky-400"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
