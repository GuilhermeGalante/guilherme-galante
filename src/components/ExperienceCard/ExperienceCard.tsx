import styles from './ExperienceCard.module.css';

export interface ExperienceCardProps {
  company: string;
  period: string;
  role: string;
  bullets: string[];
}

export function ExperienceCard({
  company,
  period,
  role,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.company}>{company}</h3>
        <span className={styles.period}>{period}</span>
      </header>

      <p className={styles.role}>{role}</p>

      <ul className={styles.bulletList}>
        {bullets.map((bullet, index) => (
          <li key={index} className={styles.bulletItem}>
            <span className={styles.bulletDot}></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
