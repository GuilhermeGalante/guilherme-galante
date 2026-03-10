"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <span className={styles.text}>© {year} GUILHERME GALANTE</span>
        <span className={styles.text}>{t('footer.role')}</span>
      </div>
    </footer>
  );
}
