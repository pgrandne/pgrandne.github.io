import { NavbarToggle } from './NavbarToggle'

export const Navbar = () => {
  const navItems = [
    {
      name: 'Vision',
      link: '#vision',
    },
    {
      name: 'Compétences',
      link: '#skills',
    },
    {
      name: 'Projets',
      link: '#projects',
    },
    {
      name: 'CV',
      link: '#resume',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ]

  return (
    <div className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three mb-3">
      <div className="p-5 h-14 flex justify-between items-center shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        <div className="flex gap-5 text-sm">
          {navItems.map((navItem, index) => (
            <a key={index} href={navItem.link} className="text-muted-foreground hover:text-foreground cursor-not-allowed">
              {navItem.name}
            </a>
          ))}
        </div>

        <NavbarToggle />
      </div>
    </div>
  )
}
