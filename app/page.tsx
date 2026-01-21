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

const allMessages = { fr, en }

export default function Home() {
  const locale = useLangStore((state) => state.locale)

  return (
    <NextIntlClientProvider locale={locale} messages={allMessages[locale]}>
      <div className="min-h-screen py-10">
        <div className="mx-auto w-full max-w-7xl px-4">
          <Navbar />
          <main className="flex flex-col gap-8 items-center md:items-start">
            <section className="relative flex flex-col items-center gap-3 w-full h-[calc(100dvh-140px)]">
              <div className="flex gap-3 w-full mt-20 md:mt-0">
                <CardName />
                <CardPicture />
              </div>
              <HeroLinks />
            </section>
            <section id="vision">
              <Vision />
            </section>
            <section id="projects" className="flex gap-3 w-full">
              <TimelineResume />
            </section>
            <section id="contact" className="flex gap-3 w-full">
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
