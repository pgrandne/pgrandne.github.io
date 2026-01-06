import { EncryptedText } from './ui/encrypted-text'

export const Progress = () => (
  <p className="mx-auto max-w-lg py-10 text-left">
    <EncryptedText
      text="En cours de construction"
      encryptedClassName="text-neutral-500"
      revealedClassName="dark:text-white text-black"
      revealDelayMs={100}
    />
  </p>
)
