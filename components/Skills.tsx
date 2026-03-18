import { useMessages, useTranslations } from 'next-intl'
import { PointerHighlight } from './ui/pointer-highlight'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { DEV_LIST, INFRA_LIST, TOOLS_LIST } from '@/lib/content'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { motion } from 'motion/react'
import { GlareCard } from './ui/glare-card'

export const Skills = () => {
  const t = useTranslations('skills')
  const messages = useMessages()

  const generalSkills = messages.skills.generalSkills

  const shapeWords = (words: string[]) => {
    const shapedWords = words.map((word) => ({
      text: word,
      className: 'text-lg md:text-2xl/12',
    }))
    return shapedWords
  }

  return (
    <div className="bg-background shadow-elevation-light dark:shadow-elevation-dark-three w-full p-1 dark:text-neutral-300">
      <motion.div className="shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50 flex flex-col items-start p-5">
        <div className="py-20 text-2xl font-bold tracking-tight md:text-4xl">
          <PointerHighlight>
            <span>{t('title')}</span>
          </PointerHighlight>
        </div>
        <p className="mb-2 text-xl/10 md:text-2xl/12">{t('description')}</p>
        <div className="mt-4 flex w-full flex-col items-center justify-around gap-10 md:flex-row">
          {generalSkills.map((skill: { id: string; title: string; subSkills: { id: number; label: string }[] }) => (
            <GlareCard key={skill.id} className="flex flex-col items-start justify-start px-6 py-8">
              <p className="text-lg font-bold dark:text-white">{skill.title}</p>
              {skill.subSkills.map((sub) => (
                <p key={sub.id} className="mt-4 text-base font-normal dark:text-neutral-200">
                  - {sub.label}
                </p>
              ))}
            </GlareCard>
          ))}
        </div>
        <p className="mt-16 mb-6 text-xl/10 md:mb-8 md:text-2xl/12">{t('intro')}</p>

        {/* DEVELOPMENT */}
        <div className="w-full space-y-8">
          <TypewriterEffectSmooth words={shapeWords(t.raw('development'))} cursorClassName="h-5 md:h-6 xl:h-8" className="items-center" />
          <motion.div
            className="mb-10 flex w-full flex-row items-center justify-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: 3,
            }}
            viewport={{ once: true }}
          >
            <AnimatedTooltip items={DEV_LIST} />
          </motion.div>
        </div>
        {/* INFRA */}
        <div className="w-full space-y-8">
          <TypewriterEffectSmooth words={shapeWords(t.raw('infra'))} cursorClassName="h-5 md:h-6 xl:h-8" className="items-center" delay={4} />
          <motion.div
            className="mb-10 flex w-full flex-row items-center justify-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: 6,
            }}
            viewport={{ once: true }}
          >
            <AnimatedTooltip items={INFRA_LIST} />
          </motion.div>
        </div>
        {/* TOOLS */}
        <div className="w-full space-y-8">
          <TypewriterEffectSmooth
            words={shapeWords(t.raw('tools'))}
            cursorClassName="h-5 md:h-6 xl:h-8"
            className="items-center"
            delay={7}
            keepCursorAfterAnimation
          />

          <motion.div
            className="mb-10 flex w-full flex-row items-center justify-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: 9,
            }}
            viewport={{ once: true }}
          >
            <AnimatedTooltip items={TOOLS_LIST} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
