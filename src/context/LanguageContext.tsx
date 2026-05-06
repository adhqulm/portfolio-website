"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { ru } from '../translations/ru';

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "en" || saved === "ru") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next = language === "en" ? "ru" : "en";
    setLanguage(next);
    localStorage.setItem("language", next);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
  const { language } = useLanguage();
  return language === "ru" ? ru : en;
};
