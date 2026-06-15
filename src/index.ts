import { baseTimezones } from './baseData.js';
import { ar } from './locales/ar.js';
import { bg } from './locales/bg.js';
import { bn } from './locales/bn.js';
import { de } from './locales/de.js';
import { en } from './locales/en.js';
import { es } from './locales/es.js';
import { fr } from './locales/fr.js';
import { hi } from './locales/hi.js';
import { id } from './locales/id.js';
import { it } from './locales/it.js';
import { ja } from './locales/ja.js';
import { nl } from './locales/nl.js';
import { pl } from './locales/pl.js';
import { pt } from './locales/pt.js';
import { ro } from './locales/ro.js';
import { ru } from './locales/ru.js';
import { tr } from './locales/tr.js';
import { uk } from './locales/uk.js';
import { ur } from './locales/ur.js';
import { zh } from './locales/zh.js';
import { SupportedLanguages, FinalTimezone, TranslationDictionary } from './types.js';

const dictionaries: Record<SupportedLanguages, TranslationDictionary> = {
    ar,
    bg,
    bn,
    de,
    en,
    es,
    fr,
    hi,
    id,
    it,
    ja,
    nl,
    pl,
    pt,
    ro,
    ru,
    tr,
    uk,
    ur,
    zh
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