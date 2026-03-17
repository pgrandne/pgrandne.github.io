import { GlareCard } from './ui/glare-card'

export function GlareCards() {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-around gap-10 md:flex-row">
      <GlareCard className="flex flex-col items-start justify-start px-6 py-8">
        <p className="text-lg font-bold dark:text-white">Gestion de projet</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Pilotage de projets : gestion des délais, des coûts et de la qualité</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Définition et suivi d’indicateurs clés de performance (KPI)</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">
          - Organisation et animation de cycles Agile / Scrum (sprints courts, priorisation)
        </p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Coordination des équipes techniques et des parties prenantes</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-start px-6 py-8">
        <p className="text-lg font-bold dark:text-white">Fonctionnel/Métier</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Analyse des besoins et formalisation des exigences fonctionnelles</p>

        <p className="mt-4 text-base font-normal dark:text-neutral-200">
          - Conception de solutions intuitives et utiles, centrées sur les utilisateurs et les équipes métiers
        </p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Traduction des enjeux métier en solutions techniques concrètes</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">
          - Collaboration étroite avec les parties prenantes pour aligner produit, usage et objectifs métier
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-start px-6 py-8">
        <p className="text-lg font-bold dark:text-white">Technique</p>
        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Architecture logicielle et architecture de données</p>

        <p className="mt-4 text-base font-normal dark:text-neutral-200">
          - Analyse, modélisation, extraction, mise en forme et visualisation de données – data scienc
        </p>

        <p className="mt-4 text-base font-normal dark:text-neutral-200">- Développement Front-end/Back-end</p>

        <p className="mt-4 text-base font-normal dark:text-neutral-200">
          - Conteneurisation, gestion d’infrastructure et automatisation des déploiements (DevOps)
        </p>
      </GlareCard>
    </div>
  )
}
