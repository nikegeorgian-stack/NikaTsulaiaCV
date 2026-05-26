"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

interface LanguageContextType {
  lang: Language;
  t: Translations[Language];
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('ru');

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
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
