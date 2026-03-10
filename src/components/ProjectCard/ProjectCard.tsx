import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  title: string;
  linkHost: string;
  linkUrl: string;
  summary: string;
  description: string;
  bullets: string[];
}

export function ProjectCard({
  title,
  linkHost,
  linkUrl,
  summary,
  description,
  bullets,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          {linkHost}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className={styles.icon}
          >
            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
          </svg>
        </a>
      </header>

      <div className={styles.summaryContainer}>
        <div className={styles.summaryBar}></div>
        <p className={styles.summaryText}>{summary}</p>
      </div>

      <p className={styles.description}>{description}</p>

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
