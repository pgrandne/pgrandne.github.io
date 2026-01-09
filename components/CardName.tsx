import { LucideArrowDown } from 'lucide-react'
import { Progress } from './Progress'
import { useTranslations } from 'next-intl'

export const CardName = () => {
  const t = useTranslations()

  return (
    <div className="flex-1 relative p-1 text-left md:text-left w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark">
      <div className="space-y-2 md:space-y-8 lg:space-y-10 h-full mx-auto md:mx-0 w-full shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-4 py-12 md:px-8 p-1.5 bg-card/50">
        <div className="absolute bottom-0 right-12 hidden md:block">
          {/* <p
            className="relative inline-block perspective-normal [--base-color:#a1a1aa] [--base-gradient-color:#000] dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]"
            style={{ color: 'var(--base-color)' }}
          >
            En construction
          </p> */}
          <Progress textProgress={t('in_progress')} />
        </div>
        <div className="md:px-2 pt-2 lg:pt-18">
          <div className="hidden xl:block xl:space-y-8 w-full">
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
        <div className="flex flex-col justify-start gap-5 px-2 sm:flex-row sm:gap-4 md:gap-8" style={{ opacity: '1', transform: 'none' }}>
          <div className="relative">
            <div
              className="pointer-events-none h-full w-full scale-(--scale) transform-gpu blur-xl absolute inset-0 px-6 md:px-12"
              style={{
                // '--scale': '0.8',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                background:
                  'conic-gradient(from 346.68deg, rgb(227, 54, 128), rgb(58, 199, 242), rgb(74, 222, 128), rgb(249, 238, 128), rgb(236, 72, 153), rgb(244, 151, 207), rgb(68, 230, 245), rgb(227, 54, 128), rgb(68, 232, 246), rgb(88, 76, 218))',
              }}
            ></div>
            <div>
              <button
                type="button"
                className="w-50 relative z-10 sm:w-auto inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/80 group dark:hover:bg-background/60"
              >
                <span className="flex items-center gap-2 font-alpha-lyrae cursor-not-allowed">
                  {t('button_projects')}
                  <LucideArrowDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
