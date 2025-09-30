import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Link from 'next/link';

import Loader from '../components/Loader';
import HeadUp from '../components/HeadUp';

import styles from '../styles/Projects.module.css';

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowLoader(false), 700);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(true);
    }
  }, [isLoading]);

  return (
    <main className={styles.main}>
      <HeadUp />

      <div className={styles.sceneWrapper}>
        <Spline scene="/scene/scene.splinecode" />

        <div className={styles.linkPanel}>
          <Link href="/projects/animations">
            <img src="/mainpage/folders/3d.png" alt="3D Animations" className={styles.navIcon} />
          </Link>
          <Link href="/projects/film">
            <img src="/mainpage/folders/film.png" alt="Film & Editing" className={styles.navIcon} />
          </Link>
          <Link href="/projects/web">
            <img src="/mainpage/folders/web.png" alt="web3" className={styles.navIcon} />
          </Link>
          <Link href="/projects/cloth">
            <img src="/mainpage/folders/cloth.png" alt="Cloth" className={styles.navIcon} />
          </Link>
        </div>

        {showLoader && (
          <div className={`${styles.loaderOverlay} ${!isLoading ? styles.fadeOut : ''}`}>
            <Loader visible={true} />
          </div>
        )}
      </div>
    </main>
  );
}