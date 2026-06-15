export interface BaseTimezone {
  id: string;
  offset: number;
  gmt: string;
  region: string;
}

export interface LocalizedFields {
  city: string;
  country: string;
}

export type TranslationDictionary = Record<string, LocalizedFields>;

export type SupportedLanguages = 'bg'| 'de'| 'en'|'es'|'fr'|'it'|'ro'|'ru'|'tr';
export interface FinalTimezone extends BaseTimezone, LocalizedFields {}