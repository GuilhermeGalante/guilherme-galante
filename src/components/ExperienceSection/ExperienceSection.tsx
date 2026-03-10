"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experienceData = [
    {
      company: t('experience.vidi.company'),
      period: t('experience.vidi.period'),
      role: t('experience.vidi.role'),
      bullets: [
        t('experience.vidi.b1'),
        t('experience.vidi.b2'),
        t('experience.vidi.b3'),
        t('experience.vidi.b4'),
        t('experience.vidi.b5'),
        t('experience.vidi.b6')
      ]
    },
    {
      company: t('experience.freela.company'),
      period: t('experience.freela.period'),
      role: t('experience.freela.role'),
      bullets: [
        t('experience.freela.b1'),
        t('experience.freela.b2'),
        t('experience.freela.b3')
      ]
    },
    {
      company: t('experience.supremo.company'),
      period: t('experience.supremo.period'),
      role: t('experience.supremo.role'),
      bullets: [
        t('experience.supremo.b1'),
        t('experience.supremo.b2'),
        t('experience.supremo.b3')
      ]
    }
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{t('experience.title')}</h3>
        <div className={styles.divider}></div>
      </header>

      <div className={styles.list}>
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
