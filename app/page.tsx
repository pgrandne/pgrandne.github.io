'use client'

import { CardPicture } from '@/components/CardPicture'
import { ToggleOutline } from '@/components/toogle'
import { CardName } from '@/components/ui/CardName'
import { LucideArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen">
      <ToggleOutline />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 ">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="relative w-full flex gap-1 md:gap-0 flex-col md:flex-row">
            <section className="flex gap-3">
              <CardName />
              <CardPicture />
            </section>
          </div>
        </main>
        {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer> */}
      </div>
    </div>
  )
}
