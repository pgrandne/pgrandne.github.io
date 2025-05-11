import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<BackgroundBeamsWithCollision>
					<h2 className='text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight'>
						Welcome on the Portfolio of{' '}
						<div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
							<div className='absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
								<span className=''>Perrin GRANDNE</span>
							</div>
							<div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4'>
								<span className=''>Perrin GRANDNE</span>
							</div>
						</div>
					</h2>
				</BackgroundBeamsWithCollision>
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://github.com/pgrandne'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github />
					Github
				</a>

				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://www.linkedin.com/in/grandne/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Linkedin />
					Linkedin
				</a>

				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://www.linkedin.com/in/grandne/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Mail />
					Contact
				</a>
			</footer>
		</div>
	)
}
