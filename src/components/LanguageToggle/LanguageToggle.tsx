"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "PT" ? "EN" : "PT");
  };

  return (
    <button 
      className={styles.button} 
      onClick={toggleLanguage}
      aria-label="Toggle Language"
    >
      <span className={styles.dot}></span>
      <span className={styles.text}>{language}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        className={styles.chevron}
      >
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
