import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { LinkPreview } from './ui/link-preview'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const HeroLinks = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn(
        'absolute bottom-10 md:bottom-5 flex justify-center gap-20 transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <LinkPreview url="https://tailwindcss.com" className="flex items-center gap-2">
        <GithubIcon />
        Github
      </LinkPreview>
      <LinkPreview url="https://tailwindcss.com" className="flex items-center gap-2">
        <LinkedinIcon />
        Linkedin
      </LinkPreview>
    </div>
  )
}
