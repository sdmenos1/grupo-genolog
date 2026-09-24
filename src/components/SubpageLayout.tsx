import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './SubpageLayout.module.css';

interface SubpageLayoutProps {
  label: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imagePosition?: string;
  action: { label: string; href: string };
  children: ReactNode;
}

export default function SubpageLayout({
  label, eyebrow, title, accent, description, image,
  imagePosition = 'center', action, children,
}: SubpageLayoutProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="subpage-title">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.background}
          style={{ objectPosition: imagePosition }}
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.heroInner}>
          <nav aria-label="Ruta de navegación" className={styles.breadcrumb}>
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{label}</span>
          </nav>
          <p className={styles.eyebrow}><span aria-hidden="true" />{eyebrow}</p>
          <h1 id="subpage-title">{title}<br /><span>{accent}</span></h1>
          <p className={styles.description}>{description}</p>
          <a href={action.href} className={styles.heroButton}>
            {action.label}<span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.signature} aria-hidden="true">GRUPO GENOLG <span>/</span> MINERÍA &amp; CONSTRUCCIÓN</div>
      </section>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
