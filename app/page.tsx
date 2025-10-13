'use client'

import { ToggleOutline } from '@/components/toogle'
import { LucideArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen">
      <ToggleOutline />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 ">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="relative w-full flex gap-1 md:gap-0 flex-col md:flex-row">
            <div
              className="relative p-1 text-left md:text-left w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark"
              style={{ opacity: '1', transform: 'none' }}
            >
              <div
                className="space-y-2 md:space-y-8 lg:space-y-10 h-full mx-auto md:mx-0 w-full shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-4 py-12 md:px-8 p-1.5 bg-card/50"
                style={{ opacity: 1 }}
              >
                <div className="absolute bottom-0 right-12 hidden md:block">
                  <p
                    className="relative inline-block [perspective:500px] [--base-color:#a1a1aa] [--base-gradient-color:#000] dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]"
                    style={{ color: 'var(--base-color)' }}
                  >
                    Welcome
                  </p>
                </div>
                <div className="md:px-2 pt-2 lg:pt-18" style={{ opacity: '1', transform: 'none' }}>
                  <div className="hidden xl:block xl:space-y-8 w-150">
                    <div className="relative block md:py-4 rounded-lg md:leading-[6.5rem] text-[4rem] xl:leading-10 sm:text-6xl lg:text-[8rem] font-black tracking-tight">
                      <div className="flex flex-wrap justify-start whitespace-nowrap">
                        {'Perrin'.split('').map((letter, i) => (
                          <span key={i} className="font-alpha-lyrae hover-font-ss01 pixel-hover-transition cursor-pointer inline-block">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative block md:py-4 rounded-lg md:leading-[6.5rem] text-[4rem] xl:leading-10 sm:text-6xl lg:text-[7rem] tracking-tighter font-black">
                      <div className="flex flex-wrap justify-start whitespace-nowrap">
                        {'Grandne'.split('').map((letter, i) => (
                          <span key={i} className="font-alpha-lyrae hover-font-ss01 pixel-hover-transition cursor-pointer inline-block">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="max-w-xl text-2xl md:text-3xl leading-snug tracking-tight text-foreground pb-12 md:pb-4" style={{ opacity: '1' }}>
                  En construction
                </p>
                <div className="flex flex-col justify-start gap-5 px-2 sm:flex-row sm:gap-4 md:gap-8" style={{ opacity: '1', transform: 'none' }}>
                  <div className="relative">
                    <div
                      className="pointer-events-none h-full w-full scale-[var(--scale)] transform-gpu blur-xl absolute inset-0 px-6 md:px-12"
                      style={{
                        // '--scale': '0.8',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        background:
                          'conic-gradient(from 346.68deg, rgb(227, 54, 128), rgb(58, 199, 242), rgb(74, 222, 128), rgb(249, 238, 128), rgb(236, 72, 153), rgb(244, 151, 207), rgb(68, 230, 245), rgb(227, 54, 128), rgb(68, 232, 246), rgb(88, 76, 218))',
                      }}
                    ></div>
                    <div style={{ transform: 'none' }}>
                      <button
                        type="button"
                        className="w-50 relative z-10 sm:w-auto inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/80 group dark:hover:bg-background/60"
                      >
                        <span className="flex items-center gap-2 font-alpha-lyrae">
                          View my <span className="font-ss03">projects</span>
                          <LucideArrowDown />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <section className="w-full">
            <div className="w-full md:pl-4" style={{ opacity: '1', transform: 'none' }}>
              <div style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }}>
                <div className="relative w-full max-w-[1800px] mx-auto overflow-hidden bg-gradient-to-br from-card via-card/95 to-muted/90 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark p-1 transition-all duration-300">
                  <div className="relative w-full overflow-hidden bg-card/20 p-1.5 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark">
                    <div className="group w-full">
                      <img
                        alt="Product dashboard interface"
                        width="1800"
                        height="1080"
                        className="w-full h-auto shadow-elevation-light dark:shadow-elevation-dark"
                        style={{ transform: 'none' }}
                        src="/perrin.jpeg"
                      />
                      <div className="pointer-events-none absolute bottom-[2px] left-[4px] h-[55%] w-[98.7%] mx-auto">
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          //         style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 0%,
                          //     rgb(255, 255, 255) 11.1111%,
                          //     rgb(255, 255, 255) 22.2222%,
                          //     rgba(255, 255, 255, 0) 33.3333%
                          //   );
                          //   backdrop-filter: blur(0px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 11.1111%,
                          //     rgb(255, 255, 255) 22.2222%,
                          //     rgb(255, 255, 255) 33.3333%,
                          //     rgba(255, 255, 255, 0) 44.4444%
                          //   );
                          //   backdrop-filter: blur(0.2px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 22.2222%,
                          //     rgb(255, 255, 255) 33.3333%,
                          //     rgb(255, 255, 255) 44.4444%,
                          //     rgba(255, 255, 255, 0) 55.5556%
                          //   );
                          //   backdrop-filter: blur(0.4px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 33.3333%,
                          //     rgb(255, 255, 255) 44.4444%,
                          //     rgb(255, 255, 255) 55.5556%,
                          //     rgba(255, 255, 255, 0) 66.6667%
                          //   );
                          //   backdrop-filter: blur(0.6px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 44.4444%,
                          //     rgb(255, 255, 255) 55.5556%,
                          //     rgb(255, 255, 255) 66.6667%,
                          //     rgba(255, 255, 255, 0) 77.7778%
                          //   );
                          //   backdrop-filter: blur(0.8px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 55.5556%,
                          //     rgb(255, 255, 255) 66.6667%,
                          //     rgb(255, 255, 255) 77.7778%,
                          //     rgba(255, 255, 255, 0) 88.8889%
                          //   );
                          //   backdrop-filter: blur(1px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 66.6667%,
                          //     rgb(255, 255, 255) 77.7778%,
                          //     rgb(255, 255, 255) 88.8889%,
                          //     rgba(255, 255, 255, 0) 100%
                          //   );
                          //   backdrop-filter: blur(1.2px);
                          //   opacity: 0;
                          // "
                        ></div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          // style="
                          //   mask-image: linear-gradient(
                          //     rgba(255, 255, 255, 0) 77.7778%,
                          //     rgb(255, 255, 255) 88.8889%,
                          //     rgb(255, 255, 255) 100%,
                          //     rgba(255, 255, 255, 0) 111.111%
                          //   );
                          //   backdrop-filter: blur(1.4px);
                          //   opacity: 0;
                          // "
                        ></div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0"
                        // style="opacity: 0"
                      >
                        <div className="flex flex-col items-start gap-0 px-5 py-4">
                          <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">Become the Vibe</p>
                          <span className="text-lg lg:text-xl font-medium text-white/90 tracking-tight">Shift your brand to the next level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
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
