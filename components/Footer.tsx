'use client'

import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex w-full mt-16 justify-center items-center gap-20"
    >
      <div className="flex items-center gap-2">
        <GithubIcon /> Github
      </div>
      <div className="flex items-center gap-2">
        <LinkedinIcon /> Linkedin
      </div>
    </motion.div>
  )
}
