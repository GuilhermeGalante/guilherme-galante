import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/foto_apresentacao.jpg" 
        alt={alt} 
        className={styles.image} 
      />
    </div>
  );
}
