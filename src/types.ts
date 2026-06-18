import { SUPPORTED_LANGUAGES } from './constants.js';

export interface BaseTimezone {
  id: string;
  offset: number;
  rawOffset: number;
  abbr: string;
  iana: string;
  isoCode: string;
  hasDst: boolean;
  gmt: string;
  region: string;
}

export interface LocalizedFields {
  city: string;
  country: string;
}

export interface FinalTimezone extends BaseTimezone, LocalizedFields {
  label: string;
}

export type TranslationDictionary = Record<string, LocalizedFields>;

export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];