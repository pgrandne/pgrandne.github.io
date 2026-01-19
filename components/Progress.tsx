import { cn } from '@/lib/utils'
import { EncryptedText } from './ui/encrypted-text'

export const Progress = ({ textProgress, footer = false }: { textProgress: string; footer?: boolean }) => (
  <p className="text-base text-center">
    <EncryptedText
      text={textProgress}
      encryptedClassName={cn('text-neutral-500', footer && 'text-sm')}
      revealedClassName={cn('dark:text-white text-black', footer ? 'text-sm' : 'font-alpha-lyrae')}
      revealDelayMs={100}
    />
  </p>
)
