import { EncryptedText } from './ui/encrypted-text'

export const Progress = ({ textProgress }: { textProgress: string }) => (
  <p className="mx-auto max-w-lg py-10 text-left">
    <EncryptedText text={textProgress} encryptedClassName="text-neutral-500" revealedClassName="dark:text-white text-black" revealDelayMs={100} />
  </p>
)
