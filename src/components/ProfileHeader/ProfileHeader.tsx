"use client";

import { Avatar } from "../Avatar/Avatar";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./ProfileHeader.module.css";

export function ProfileHeader() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <Avatar src="https://github.com/guigalante.png" alt="Guilherme Galante Avatar" />
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h1 className={styles.name}>Guilherme Galante</h1>
          <div className={styles.actions}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
        <h2 className={styles.jobTitle}>{t('header.jobTitle')}</h2>
      </div>
    </header>
  );
}
