'use client'

import { CardPicture } from '@/components/CardPicture'
import { CardName } from '@/components/CardName'
import { Navbar } from '@/components/Navbar'
import { TimelineResume } from '@/components/TimelineResume'
import { useLangStore } from '@/store/useLangStore'
import { NextIntlClientProvider } from 'next-intl'
import fr from '@/i18n/dictionaries/fr.json'
import en from '@/i18n/dictionaries/en.json'
import { Vision } from '@/components/Vision'
import { HeroLinks } from '@/components/HeroLinks'
import { Contact } from '@/components/Contact'
import { Skills } from '@/components/Skills'

const allMessages = { fr, en }

export default function Home() {
  const locale = useLangStore((state) => state.locale)

  return (
    <NextIntlClientProvider locale={locale} messages={allMessages[locale]} timeZone="Europe/Paris">
      <div className="min-h-screen py-10">
        <div className="mx-auto w-full max-w-7xl px-4">
          <Navbar />
          <main className="flex flex-col items-center gap-8 md:items-start">
            <section className="relative flex h-[calc(100dvh-140px)] w-full flex-col items-center gap-3">
              <div className="mt-20 flex w-full gap-3 md:mt-0">
                <CardName />
                <CardPicture />
              </div>
              <HeroLinks />
            </section>
            <section id="vision" className="flex w-full gap-3">
              <Vision />
            </section>
            <section id="skills" className="flex w-full gap-3">
              <Skills />
            </section>
            <section id="projects" className="flex w-full gap-3">
              <TimelineResume />
            </section>
            <section id="contact" className="flex w-full gap-3">
              <Contact />
            </section>
          </main>
          <footer>
            <HeroLinks variant="bottom" />
          </footer>
        </div>
      </div>
    </NextIntlClientProvider>
  )
}
