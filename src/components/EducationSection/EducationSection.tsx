"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './EducationSection.module.css';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <div className={styles.gridContainer}>
      {/* Left Column: Education & Certifications */}
      <section className={styles.column}>
        <header className={styles.header}>
          <h3 className={styles.heading}>{t('education.title')}</h3>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.contentBlock}>
          <h4 className={styles.title}>
            {t('education.infnet.company')}
          </h4>
          <p className={styles.subtitle}>{t('education.infnet.role')}</p>
          <span className={styles.period}>01/2025 - 12/2028</span>
        </div>

        <div className={styles.contentBlock}>
          <h4 className={styles.title}>
            {t('education.senai.company')} <span className={styles.separator}>|</span> {t('education.senai.location')}
          </h4>
          <p className={styles.subtitle}>{t('education.senai.role')}</p>
          <span className={styles.period}>10/2021 - 04/2023</span>
        </div>

        {/* Dynamic Certifications section requested by the user */}
        <header className={`${styles.header} ${styles.marginTop}`}>
          <h3 className={styles.heading}>{t('certifications.title')}</h3>
          <div className={styles.divider}></div>
        </header>

        <ul className={styles.certList}>
          <li className={styles.certItem}>
            <span className={styles.certDot}></span>
            <div>
              <p className={styles.certTitle}>{t('certifications.c1')}</p>
            </div>
          </li>
          <li className={styles.certItem}>
            <span className={styles.certDot}></span>
            <div>
              <p className={styles.certTitle}>{t('certifications.c2')}</p>
            </div>
          </li>
          <li className={styles.certItem}>
            <span className={styles.certDot}></span>
            <div>
              <p className={styles.certTitle}>{t('certifications.c3')}</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Right Column: Languages */}
      <section className={styles.column}>
        <header className={styles.header}>
          <h3 className={styles.heading}>{t('languages.title')}</h3>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.languagesList}>
          <p className={styles.langItem}>
            <strong>{t('languages.pt')}:</strong> {t('languages.pt.level')}
          </p>
          <p className={styles.langItem}>
            <strong>{t('languages.en')}:</strong> {t('languages.en.level')}
          </p>
        </div>
      </section>
    </div>
  );
}
