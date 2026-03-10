import { ProfileHeader } from "@/components/ProfileHeader/ProfileHeader";
import { ContactInfo } from "@/components/ContactInfo/ContactInfo";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection/SkillsSection";
import { EducationSection } from "@/components/EducationSection/EducationSection";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ProfileHeader />
        <ContactInfo />
        <AboutMe />
        <SocialLinks />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <Footer />
      </div>
    </main>
  );
}
