# timezone-i18n

[![npm version](https://shields.io)](https://npmjs.com)
[![npm downloads](https://shields.io)](https://npmjs.com)
[![License: MIT](https://shields.io)](https://opensource.org)

A comprehensive, enterprise-grade, and lightweight multilingual (i18n) world time zone dataset. Fully optimized and synchronized according to the latest global geopolitical modifications, including permanent time zone shifts such as Turkey (2016), Mexico (2022), Iran (2022), Jordan & Syria (2022), and Kazakhstan (2024).

---

## 🚀 Key Features

- **Single Source of Truth (SSOT):** Technical metadata (`offsets`, `GMT`, `regions`) is isolated from localization dictionaries to minimize bundle size and avoid memory bloating.
- **Dynamic Localization Processing:** Automatically structures dynamic option labels based on chosen dictionary mappings directly at runtime.
- **Broad Language Coverage (20 Languages):** Native localized terminology spanning major international software markets.
- **Native TypeScript Support:** Built with strict schema definitions ensuring 100% type safety.
- **Dual-Package Delivery:** Fully pre-compiled to seamlessly ship via modern ES Modules (`import`) and legacy CommonJS (`require`).

---

## 📦 Installation

```bash
npm install timezone-i18n
# or
yarn add timezone-i18n
# or
pnpm add timezone-i18n
```

---

## 💻 Usage & Architecture

Import the library and query time zones dynamically by providing any supported ISO language code:

```typescript
import { getTimezones } from 'timezone-i18n';

// Fetch full dataset mapped to Turkish localized values
const trTimezones = getTimezones('tr');
console.log(trTimezones[0]);

/*
Expected Output Object Struct:
{
  id: 'UTC+3-istanbul',
  offset: 3,
  gmt: 'UTC+3',
  region: 'Europe/Asia',
  city: 'İstanbul',
  country: 'Türkiye',
  label: 'İstanbul, Türkiye'
}
*/

// Fetch dataset using the default fallback (English)
const enTimezones = getTimezones('en'); 
// Dynamically constructs values formatted as: "Istanbul, Turkey"
```

---

## 🛠️ Supported Languages (20 Localizations)

The library maps time zones to city and country translations dynamically across **20 languages**. Pass any of the following parameters into `getTimezones()`:

| Code | Language | Native Name | Code | Language | Native Name |
| :---: | :--- | :--- | :---: | :--- | :--- |
| `en` | **English** *(Default)* | English | `ja` | **Japanese** | 日本語 |
| `tr` | **Turkish** | Türkçe | `nl` | **Dutch** | Nederlands |
| `ar` | **Arabic** | العربية | `pl` | **Polish** | Polski |
| `bg` | **Bulgarian** | Български | `pt` | **Portuguese** | Português |
| `bn` | **Bengali** | বাংলা | `ro` | **Romanian** | Română |
| `de` | **German** | Deutsch | `ru` | **Russian** | Русский |
| `es` | **Spanish** | Español | `uk` | **Ukrainian** | Українська |
| `fr` | **French** | Français | `ur` | **Urdu** | اردو |
| `hi` | **Hindi** | हिन्दी | `zh` | **Chinese (Mandarin)** | 中文 (简体) |
| `id` | **Indonesian** | Bahasa Indonesia | | | |

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.