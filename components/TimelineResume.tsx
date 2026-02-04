import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { useTranslations } from 'next-intl'
import { PointerHighlight } from './ui/pointer-highlight'
import { Divide } from 'lucide-react'

export function TimelineResume() {
  const t = useTranslations('project')

  const data = [
    {
      title: '2025',
      content: (
        <div>
          <p className="mb-8 text-2xl font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t('2025')}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://beta.gouv.fr/startups/nomad.html" target="_blank" rel="noopener noreferrer" title="beta.gouv.fr">
              <img
                src="./projects/nomad_3.png"
                alt="nomad image 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://nomad.defense.gouv.fr/statistiques" target="_blank" rel="noopener noreferrer" title="statistiques de NOMAD">
              <img
                src="./projects/nomad_2.png"
                alt="nomad image 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t('2024')}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://nomad.defense.gouv.fr/connexion" target="_blank" rel="noopener noreferrer" title="NOMAD">
              <img
                src="./projects/nomad_1.png"
                alt="nomad image 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a
              href="https://www.defense.gouv.fr/commissariat/actualites/nomad-solution-co-working-du-ministere-armees-developpee-sca"
              target="_blank"
              rel="noopener noreferrer"
              title="Commissariat des Armées"
            >
              <img
                src="./projects/nomad_4.png"
                alt="nomad image 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t('2023')}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://irruptionlab-git-main-pgrandne.vercel.app/" target="_blank" rel="noopener noreferrer" title="Irruption Lab">
              <img
                src="./projects/irruptionlab.png"
                alt="irruption lab image "
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://haken.vercel.app/" target="_blank" rel="noopener noreferrer" title="Hakken">
              <img
                src="./projects/hakken.png"
                alt="hakken image"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t('2022')}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.eig.numerique.gouv.fr/defis/dases-1" target="_blank" rel="noopener noreferrer" title="DASES">
              <img
                src="./projects/dases.png"
                alt="dases image"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://prometheus-x.org/" target="_blank" rel="noopener noreferrer" title="Prometheus-X">
              <img
                src="./projects/prometheusx.png"
                alt=" prometheus-x image"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t('2021')}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://na.itron.com/en/problems-we-solve/water-conservation" target="_blank" rel="noopener noreferrer" title="Itrpn Water">
              <img
                src="./projects/itron1.png"
                alt="itron image"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a
              href="https://fr.itron.com/fr/what-we-offer/non-revenue-water"
              target="_blank"
              rel="noopener noreferrer"
              title="Itron Non-revenue-water"
            >
              <img
                src="./projects/itron2.png"
                alt="itron image"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
          <div className="mb-8">
            {/* <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ En cours</div> */}
          </div>
        </div>
      ),
    },
    {
      title: '2016',
      content: '',
    },
  ]
  return (
    <div className="p-1 w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="p-5 flex flex-col items-start shadow-elevation-light dark:shadow-elevation-dark-three bg-card/50">
        <div className="max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
          <PointerHighlight>
            <span>{t('title')}</span>
          </PointerHighlight>
        </div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
          <div className="mb-32"></div>
        </div>
      </div>
    </div>
  )
}
