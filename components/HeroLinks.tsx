import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { LinkPreview } from './ui/link-preview'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type HeroLinksVariant = 'top' | 'bottom'

interface HeroLinksProps {
  variant?: HeroLinksVariant
}

export const HeroLinks = ({ variant = 'top' }: HeroLinksProps) => {
  const [isVisible, setIsVisible] = useState(variant === 'top')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (variant === 'top') {
        setIsVisible(scrollPosition <= 50)
      } else {
        const isAtBottom = scrollPosition + windowHeight >= documentHeight - 100
        setIsVisible(isAtBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  return (
    <div
      className={cn(
        'flex justify-center gap-20 transition-opacity duration-500',
        variant === 'top' ? 'absolute bottom-10 md:bottom-5' : 'mt-10',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <LinkPreview url="https://github.com/pgrandne/" className="flex items-center gap-2">
        <GithubIcon />
        Github
      </LinkPreview>
      <LinkPreview url="https://www.linkedin.com/in/grandne/" className="flex items-center gap-2">
        <LinkedinIcon />
        Linkedin
      </LinkPreview>
    </div>
  )
}
