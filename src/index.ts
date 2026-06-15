import { baseTimezones } from './baseData.js';
import { tr } from './locales/tr.js';
import { en } from './locales/en.js';
import { bg } from './locales/bg.js';
import { fr } from './locales/fr.js';
import { es } from './locales/es.js';
import { ro } from './locales/ro.js';
import { it } from './locales/it.js';
import { ru } from './locales/ru.js';
import { de } from './locales/de.js';
import { SupportedLanguages, FinalTimezone, TranslationDictionary } from './types.js';

const dictionaries: Record<SupportedLanguages, TranslationDictionary> = {
    tr, en, bg, fr, es, ro, it, ru, de
};
export function getTimezones(lang: SupportedLanguages = 'en'): FinalTimezone[] {
    const currentDict = dictionaries[lang] || dictionaries['en'];

    return baseTimezones.map((tz) => {
        const translation = currentDict[tz.id] || dictionaries['en'][tz.id];
        const city = translation?.city || '';
        const country = translation?.country || '';

        return {
            ...tz,
            city,
            country,
            label: city && country ? `${city}, ${country}` : tz.id
        };
    });
}

export * from './types.js';