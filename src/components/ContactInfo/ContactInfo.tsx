"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ContactInfo.module.css';

export function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.item}>
          <span className={styles.dot}></span>
          {t('contact.nationality')}
        </span>
        <span className={styles.separator}>/</span>
        <span className={styles.item}>
          <span className={styles.dot}></span>
          {t('contact.location')}
        </span>
        <span className={styles.separator}>/</span>
        <span className={styles.item}>(31) 97106-2598</span>
        <span className={styles.separator}>/</span>
      </div>
      <div className={styles.row}>
        <a href="mailto:guilherme.galante17112003@gmail.com" className={styles.link}>
          guilherme.galante17112003@gmail.com
        </a>
      </div>
    </div>
  );
}
