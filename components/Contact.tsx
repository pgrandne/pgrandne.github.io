import { useTranslations } from 'next-intl'
import { PointerHighlight } from './ui/pointer-highlight'
import { useState } from 'react'
import { Progress } from './Progress'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card'
import { Expandable } from './Expandable'

export const Contact = () => {
  const t = useTranslations('info')

  const info = [
    {
      title: t('email'),
      content: t('liame'),
    },
    {
      title: t('phone'),
      content: t('enohp'),
    },
  ]

  return (
    <div id="contact" className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="p-5 flex flex-col items-start shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        <div className="py-20 text-2xl font-bold tracking-tight md:text-4xl">
          <PointerHighlight>
            <span>Contact</span>
          </PointerHighlight>
        </div>
        {/* <p className="text-xl md:text-2xl">
          {t('in_progress')}
          <br />
          <br />
        </p> */}

        <Expandable info={info} />
      </div>
    </div>
  )
}
