import { useTranslations } from 'next-intl'
import { NavbarToggle } from './NavbarToggle'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations()
  const navItems = [
    {
      name: 'Vision',
      link: '#vision',
    },
    {
      name: t('skills'),
      link: '#skills',
    },
    {
      name: t('projects'),
      link: '#projects',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ]

  return (
    <nav className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three mb-10 md:mb-3">
      <div className="p-5 h-14 flex justify-between items-center shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-5 text-sm">
          {navItems.map((navItem, index) => (
            <a
              key={index}
              href={navItem.link}
              className={cn(
                'text-muted-foreground hover:text-foreground',
                ['#skills', '#resume'].includes(navItem.link) ? 'opacity-50 pointer-events-none' : '',
              )}
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <div className="flex flex-col gap-4 m-8">
                {navItems.map((navItem, index) => (
                  <a
                    key={index}
                    href={navItem.link}
                    className={cn(
                      'text-lg font-medium text-muted-foreground hover:text-foreground border-b pb-2 transition-all',
                      ['#skills'].includes(navItem.link) ? 'opacity-50 pointer-events-none' : '',
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navItem.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* TOGGLE */}
        <NavbarToggle />
      </div>
    </nav>
  )
}
