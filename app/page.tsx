'use client'

import { CardPicture } from '@/components/CardPicture'
import { CardName } from '@/components/CardName'
import { Navbar } from '@/components/Navbar'
import { TimelineResume } from '@/components/TimelineResume'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { useLangStore } from '@/store/useLangStore'
import { NextIntlClientProvider } from 'next-intl'
import fr from '@/i18n/dictionaries/fr.json'
import en from '@/i18n/dictionaries/en.json'

const allMessages = { fr, en }

export default function Home() {
  const locale = useLangStore((state) => state.locale)

  return (
    <NextIntlClientProvider locale={locale} messages={allMessages[locale]}>
      <div className="min-h-screen py-10">
        <div className="mx-auto w-full max-w-7xl px-4">
          <Navbar />
          <main className="flex flex-col gap-8 items-center sm:items-start">
            <section className="flex gap-3 w-full">
              <CardName />
              <CardPicture />
            </section>
            <section className="flex gap-3 w-full">
              <TimelineResume />
            </section>
          </main>
          <footer className="absolute w-full max-w-7xl bottom-10 flex justify-center items-center gap-20 ">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/pgrandne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/grandne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              Linkedin
            </a>
          </footer>
        </div>
      </div>
    </NextIntlClientProvider>
  )
}
