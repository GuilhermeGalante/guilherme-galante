"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  const { t } = useLanguage();

  const skills = [
    "Python", "TypeScript", "Next.js", "React", "Java", "SQL", 
    "Robot Framework", "Tailwind CSS", t('skills.title').includes('HABILIDADES') ? "Cibersegurança" : "Cybersecurity", "Pentest / QA Security", "Git/GitHub", "Burp Suite","OWASP", "Postman", "Swagger"
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{t('skills.title')}</h3>
        <div className={styles.divider}></div>
      </header>

      <div className={styles.chipsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.chip}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
