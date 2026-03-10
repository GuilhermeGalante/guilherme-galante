"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './AboutMe.module.css';

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{t('about.title')}</h3>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>
    </div>
  );
}
