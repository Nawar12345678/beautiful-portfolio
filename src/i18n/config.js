import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    dir: "ltr",
    flag: "EN",
  },
  {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    dir: "rtl",
    flag: "AR",
  },
];

export const DEFAULT_LANGUAGE = "en";
export const STORAGE_KEY = "app-language";

export const getLanguageMeta = (code) =>
  SUPPORTED_LANGUAGES.find((lang) => lang.code === code) ||
  SUPPORTED_LANGUAGES[0];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
    },
    returnObjects: true,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
