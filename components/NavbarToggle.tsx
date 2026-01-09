'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Toggle } from '@/components/ui/toggle'
import { FR, GB } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react'
import { useLangStore } from '@/store/useLangStore'

export const NavbarToggle = () => {
  const [mounted, setMounted] = useState(false)

  const { locale, toggleLocale } = useLangStore()

  const { resolvedTheme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="p-2 w-10 h-10" />

  return (
    <div className="flex justify-end gap-5">
      <Toggle variant="outline" className="cursor-pointer" onClick={changeTheme}>
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </Toggle>
      <Toggle variant="outline" className="cursor-pointer" onClick={toggleLocale}>
        {locale === 'en' ? <FR title="France" className="w-6 h-auto" /> : <GB title="English" className="w-6 h-auto" />}
      </Toggle>
    </div>
  )
}
