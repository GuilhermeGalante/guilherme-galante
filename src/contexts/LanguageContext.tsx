"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('PT');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client side
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio_lang') as Language;
    if (savedLang && (savedLang === 'PT' || savedLang === 'EN')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang === 'PT' ? 'pt-BR' : 'en';
  };

  const t = (key: TranslationKey): string => {
    // Before mounting (on server), we default to PT
    if (!mounted && language !== 'PT') {
       return translations['PT'][key] || key;
    }
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
