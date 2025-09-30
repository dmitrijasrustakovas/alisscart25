import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/HeadUp.module.css';

const HeadUp = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navContainer}>
        <div className={styles.avatar}>
          <Link href="/">
            <Image src="/mainpage/avatar.png" alt="Avatar" width={48} height={48} />
          </Link>
        </div>
        <nav className={styles.navItems}>
          <Link href="/" className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
            Main
          </Link>
          <Link href="/projects" className={`${styles.navItem} ${isActive('/projects') ? styles.active : ''}`}>
            Projects
          </Link>
          <Link href="/shop" className={`${styles.navItem} ${isActive('/shop') ? styles.active : ''}`}>
            Shop
          </Link>
          <Link href="/about" className={`${styles.navItem} ${isActive('/about') ? styles.active : ''}`}>
            About
          </Link>
        </nav>
        <a
  href="mailto:julbanchick@outlook.com"
  className={styles.contactButton}
>
  Contact Me
</a>
      </div>
    </div>
  );
};

export default HeadUp;