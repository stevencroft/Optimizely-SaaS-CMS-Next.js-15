// lib/optimizely/utils/language.ts
import { Locales } from '../types/generated';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'pl', 'sv'];

export const getValidLocale = (locale: string): Locales => {
  const validLocale = getLocales().includes(locale) ? locale : DEFAULT_LOCALE;
  return validLocale as Locales;
};

export const getLocales = () => {
  return LOCALES;
};
