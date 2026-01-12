import { EncryptedText } from './ui/encrypted-text'

export const Progress = ({ textProgress }: { textProgress: string }) => (
  <p className="text-base text-center">
    <EncryptedText
      text={textProgress}
      encryptedClassName="text-neutral-500"
      revealedClassName="dark:text-white text-black font-alpha-lyrae"
      revealDelayMs={100}
    />
  </p>
)
