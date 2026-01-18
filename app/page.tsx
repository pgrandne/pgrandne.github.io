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
import { LinkPreview } from '@/components/ui/link-preview'

const allMessages = { fr, en }

export default function Home() {
  const locale = useLangStore((state) => state.locale)

  return (
    <NextIntlClientProvider locale={locale} messages={allMessages[locale]}>
      <div className="min-h-screen py-10">
        <div className="mx-auto w-full max-w-7xl px-4">
          <Navbar />
          <main className="flex flex-col gap-8 items-center md:items-start">
            <section className="relative flex flex-col items-center gap-3 w-full h-[calc(100vh-140px)]">
              <div className="flex gap-3 w-full mt-20 md:mt-0">
                <CardName />
                <CardPicture />
              </div>
              <div className="absolute bottom-10 md:bottom-5 flex justify-center gap-20">
                <LinkPreview url="https://tailwindcss.com" className="flex items-center gap-2">
                  <GithubIcon />
                  Github
                </LinkPreview>
                <LinkPreview url="https://tailwindcss.com" className="flex items-center gap-2">
                  <LinkedinIcon />
                  Linkedin
                </LinkPreview>
              </div>
            </section>

            <section className="flex gap-3 w-full">
              <TimelineResume />
            </section>
          </main>
          <footer className="hidden md:flex absolute w-full max-w-7xl bottom-10 justify-center items-center gap-20 ">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/pgrandne/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/grandne/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </footer>
        </div>
      </div>
    </NextIntlClientProvider>
  )
}
