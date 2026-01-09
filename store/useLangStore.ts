import { create } from 'zustand'

interface LangState {
  locale: 'fr' | 'en'
  toggleLocale: () => void
}

export const useLangStore = create<LangState>((set) => ({
  locale: 'fr',
  toggleLocale: () =>
    set((state) => ({
      locale: state.locale === 'fr' ? 'en' : 'fr',
    })),
}))
