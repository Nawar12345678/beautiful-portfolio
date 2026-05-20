/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  getLanguageMeta,
} from "./config";
import { LanguageContext } from "./language-context";

const readStoredLanguage = () => {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.some((lang) => lang.code === stored)) {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return null;
};

const applyDocumentLanguage = (code) => {
  if (typeof document === "undefined") return;
  const meta = getLanguageMeta(code);
  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.dir;
  document.documentElement.dataset.lang = meta.code;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(() => {
    const stored = readStoredLanguage();
    const resolved = (i18n.language || DEFAULT_LANGUAGE).split("-")[0];
    return stored || (SUPPORTED_LANGUAGES.some((l) => l.code === resolved) ? resolved : DEFAULT_LANGUAGE);
  });

  useEffect(() => {
    const normalized = language.split("-")[0];
    if (i18n.language !== normalized) {
      i18n.changeLanguage(normalized);
    }
    applyDocumentLanguage(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, normalized);
    } catch {
      /* ignore */
    }
  }, [language, i18n]);

  useEffect(() => {
    const onLanguageChanged = (lng) => {
      const code = lng.split("-")[0];
      if (SUPPORTED_LANGUAGES.some((l) => l.code === code)) {
        setLanguageState(code);
        applyDocumentLanguage(code);
      }
    };
    i18n.on("languageChanged", onLanguageChanged);
    return () => i18n.off("languageChanged", onLanguageChanged);
  }, [i18n]);

  const setLanguage = useCallback((code) => {
    if (!SUPPORTED_LANGUAGES.some((lang) => lang.code === code)) return;
    setLanguageState(code);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "ar" : "en"));
  }, []);

  const value = useMemo(() => {
    const meta = getLanguageMeta(language);
    return {
      language,
      direction: meta.dir,
      isRTL: meta.dir === "rtl",
      meta,
      supportedLanguages: SUPPORTED_LANGUAGES,
      setLanguage,
      toggleLanguage,
    };
  }, [language, setLanguage, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
