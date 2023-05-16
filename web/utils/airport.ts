import { createLSFactory } from '@airport/react'
export enum Language {
  ko = 'ko',
  en = 'en',
  ja = 'ja',
}

export const supportedLocales = [Language.ko, Language.en, Language.ja] as const
export type LocaleType = typeof supportedLocales
export const createLS = createLSFactory<LocaleType>()
