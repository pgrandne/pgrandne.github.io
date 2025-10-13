'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Toggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'

export function ToggleOutline() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    const newTheme = theme !== 'dark' ? 'dark' : 'light'
    console.log(newTheme)
    setTheme(newTheme)
  }

  return (
    <div className="flex justify-end">
      <Toggle variant="outline" className="cursor-pointer mt-5 mr-5" onClick={changeTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Toggle>
    </div>
  )
}
