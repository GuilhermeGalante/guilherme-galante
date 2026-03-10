"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: t('projects.autoescola.title'),
      linkHost: "autoescolaliderpn.com.br",
      linkUrl: "https://autoescolaliderpn.com.br/",
      summary: t('projects.autoescola.summary'),
      description: t('projects.autoescola.desc'),
      bullets: [
        t('projects.autoescola.b1'),
        t('projects.autoescola.b2')
      ]
    },
    {
      title: t('projects.rx.title'),
      linkHost: "rxproducoes.com.br",
      linkUrl: "https://rxproducoes.com.br/",
      summary: t('projects.rx.summary'),
      description: t('projects.rx.desc'),
      bullets: [
        t('projects.rx.b1'),
        t('projects.rx.b2')
      ]
    },
    {
      title: t('projects.tcp.title'),
      linkHost: "tcp-ip-simulator.vercel.app",
      linkUrl: "https://tcp-ip-simulator.vercel.app/",
      summary: t('projects.tcp.summary'),
      description: t('projects.tcp.desc'),
      bullets: [
        t('projects.tcp.b1'),
        t('projects.tcp.b2')
      ]
    },
    {
      title: t('projects.iris.title'),
      linkHost: "github.com",
      linkUrl: "https://github.com/GuilhermeGalante/dataset-iris",
      summary: t('projects.iris.summary'),
      description: t('projects.iris.desc'),
      bullets: [
        t('projects.iris.b1')
      ]
    }
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{t('projects.title')}</h3>
        <div className={styles.divider}></div>
      </header>

      <div className={styles.list}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
