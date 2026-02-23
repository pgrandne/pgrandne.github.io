'use client'

import { useEffect, useMemo, useState } from 'react'
import { Progress } from './Progress'
import { useTranslations } from 'next-intl'

const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const AnimatedWord = ({ word, wrapperClassName }: { word: string; wrapperClassName: string }) => {
  const letters = useMemo(() => word.split(''), [word])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(() => new Set())

  useEffect(() => {
    let stopped = false
    let cycleTimer: ReturnType<typeof setTimeout> | undefined
    const clearTimers = new Set<ReturnType<typeof setTimeout>>()

    const triggerRandomLetters = () => {
      setActiveIndices(() => {
        const next = new Set<number>()
        const selectedIndex = randomBetween(0, letters.length - 1)
        next.add(selectedIndex)

        const clearTimer = setTimeout(
          () => {
            setActiveIndices((current) => {
              const cleared = new Set(current)
              cleared.delete(selectedIndex)
              return cleared
            })
            clearTimers.delete(clearTimer)
          },
          randomBetween(250, 500),
        )

        clearTimers.add(clearTimer)
        return next
      })
    }

    const runCycle = () => {
      if (stopped) return
      cycleTimer = setTimeout(
        () => {
          triggerRandomLetters()
          runCycle()
        },
        randomBetween(1000, 2000),
      )
    }

    runCycle()

    return () => {
      stopped = true
      if (cycleTimer) clearTimeout(cycleTimer)
      clearTimers.forEach((timer) => clearTimeout(timer))
    }
  }, [letters.length])

  return (
    <div className={wrapperClassName}>
      <div className="flex flex-wrap justify-start whitespace-nowrap">
        {letters.map((letter, index) => (
          <span
            key={`${word}-${index}`}
            className={`font-alpha-lyrae hover-font-ss01 pixel-hover-transition inline-block cursor-pointer ${
              activeIndices.has(index) ? 'font-ss01' : ''
            }`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export const CardName = () => {
  const t = useTranslations()

  return (
    <div className="bg-background shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark relative w-full flex-1 p-1 text-left md:text-left">
      <div className="shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark bg-card/50 mx-auto flex h-full w-full flex-col justify-around p-1.5 px-4 py-12 md:mx-0 md:px-8">
        <div className="pt-2 md:px-2 lg:pt-18">
          <div className="w-full xl:space-y-8">
            <AnimatedWord
              word="Perrin"
              wrapperClassName="relative block md:py-4 rounded-lg md:leading-26 text-[4rem] xl:leading-10 sm:text-6xl lg:text-[8rem] font-black tracking-tight"
            />
            <AnimatedWord
              word="Grandne"
              wrapperClassName="relative block md:py-4 rounded-lg md:leading-26 text-[4rem] xl:leading-10 sm:text-6xl lg:text-[7rem] tracking-tighter font-black"
            />
          </div>
        </div>
        <p
          className="text-foreground font-alpha-lyrae max-w-xl pb-12 text-2xl leading-snug tracking-tight md:pb-4 md:text-3xl"
          style={{ opacity: '1' }}
        >
          {t('hero_subtitle')}
        </p>
        <div className="flex justify-end gap-8 px-2">
          <div className="relative">
            <div
              className="animate-gradient-rotate pointer-events-none absolute inset-0 opacity-70 blur-xl"
              style={{
                background: 'conic-gradient(from var(--angle), #e33680, #3ac7f2, #4ade80, #f9ee80, #ec4899, #e33680)',
                transform: 'scale(0.9)',
              }}
            ></div>
            <div>
              <button
                type="button"
                className="text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 hover:bg-secondary/80 group dark:hover:bg-background/60 relative z-10 inline-flex w-68 cursor-not-allowed items-center justify-center px-6 py-3.5 text-xl tracking-tight transition-all duration-300 md:px-9 md:py-4.5 md:text-2xl"
              >
                {/* <span className="flex items-center gap-2 font-alpha-lyrae">
                  {t('button_projects')}
                  <LucideArrowDown />
                </span> */}
                <Progress textProgress={t('in_progress')} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
