import { LucideArrowDown } from 'lucide-react'
import { Progress } from './Progress'
import { useTranslations } from 'next-intl'

export const CardName = () => {
  const t = useTranslations()

  return (
    <div className="flex-1 relative p-1 text-left md:text-left w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark">
      <div className="flex flex-col justify-around h-full mx-auto md:mx-0 w-full shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-4 py-12 md:px-8 p-1.5 bg-card/50">
        <div className="md:px-2 pt-2 lg:pt-18">
          <div className="xl:space-y-8 w-full">
            <div className="relative block md:py-4 rounded-lg md:leading-26 text-[4rem] xl:leading-10 sm:text-6xl lg:text-[8rem] font-black tracking-tight">
              <div className="flex flex-wrap justify-start whitespace-nowrap">
                {'Perrin'.split('').map((letter, i) => (
                  <span key={i} className="font-alpha-lyrae hover-font-ss01 pixel-hover-transition cursor-pointer inline-block">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative block md:py-4 rounded-lg md:leading-26 text-[4rem] xl:leading-10 sm:text-6xl lg:text-[7rem] tracking-tighter font-black">
              <div className="flex flex-wrap justify-start whitespace-nowrap">
                {'Grandne'.split('').map((letter, i) => (
                  <span key={i} className="font-alpha-lyrae hover-font-ss01 pixel-hover-transition cursor-pointer inline-block">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p
          className="max-w-xl text-2xl md:text-3xl leading-snug tracking-tight text-foreground pb-12 md:pb-4 font-alpha-lyrae"
          style={{ opacity: '1' }}
        >
          {t('hero_subtitle')}
        </p>
        <div className="flex justify-end gap-8 px-2">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 blur-xl opacity-70 animate-gradient-rotate"
              style={{
                background: 'conic-gradient(from var(--angle), #e33680, #3ac7f2, #4ade80, #f9ee80, #ec4899, #e33680)',
                transform: 'scale(0.9)',
              }}
            ></div>
            <div>
              <button
                type="button"
                className="w-68 relative z-10 inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/80 group dark:hover:bg-background/60 cursor-not-allowed"
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
