import { useTranslations } from 'next-intl'
import { PointerHighlight } from './ui/pointer-highlight'
import { motion } from 'motion/react'
import { LayoutTextFlip } from './ui/layout-text-flip'

export const Vision = () => {
  const t = useTranslations('vision')

  return (
    <div className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="p-5 flex flex-col items-start shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        <div className="py-20 text-2xl font-bold tracking-tight md:text-4xl">
          <PointerHighlight>
            <span>Vision</span>
          </PointerHighlight>
        </div>
        <div></div>
        <motion.div className="mb-10 md:mb-16">
          <LayoutTextFlip text={t('intro')} words={t.raw('split')} />
        </motion.div>
        <p className="text-xl/10 md:text-2xl/12 mb-6 md:mb-8">{t('background')}</p>
        <ul className="text-xl/10 md:text-2xl/12">
          <li className="mb-6 md:mb-8">{t('objectives.0')}</li>
          <li className="mb-20">{t('objectives.1')}</li>
        </ul>

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
