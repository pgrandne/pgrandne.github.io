import { useTranslations } from 'next-intl'
import { PointerHighlight } from './ui/pointer-highlight'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { SKILL_LIST } from '@/lib/content'

export const Skills = () => {
  const t = useTranslations('skills')

  const midIndex = Math.ceil(SKILL_LIST.length / 2)
  const firstHalf = SKILL_LIST.slice(0, midIndex)
  const secondHalf = SKILL_LIST.slice(midIndex)

  return (
    <div className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="p-5 flex flex-col items-start shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        <div className="py-20 text-2xl font-bold tracking-tight md:text-4xl">
          <PointerHighlight>
            <span>{t('title')}</span>
          </PointerHighlight>
        </div>
        <p className="text-xl/10 md:text-2xl/12 mb-6 md:mb-8">{t('description')}</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={firstHalf} />
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={secondHalf} />
        </div>

        {/* Mon expertise couvre notamment :
        <br />
        <br />
        - Technique : Architecture logicielle et de données, développement, analyse de données, data science, conteneurisation, gestion de
        l’infrastructure et automatisation des déploiements.
        <br />
        <br />
        - Gestion de projet : Pilotage des coûts, délais et qualité, avec mise en place d’indicateurs clés et utilisation de la méthode Agile Scrum
        (avec sprints courts)
        <br />
        <br />- Fonctionnel/Métier : Conception de solutions intuitives et utiles, centrées sur les besoins des utilisateurs et des équipes métiers */}
      </div>
    </div>
  )
}
