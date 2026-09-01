"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

const STORAGE_KEY = 'nika-portfolio-lang';

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru' || stored === 'ka' || stored === 'en') return stored;
  return 'en';
}

interface LanguageContextType {
  lang: Language;
  t: Translations[Language];
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = readStoredLanguage();
    setLangState(stored);
    document.documentElement.lang = stored;
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    window.localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
