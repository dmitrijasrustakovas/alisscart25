import { useEffect, useState } from 'react';
import HeadUp from '../../components/HeadUp';
import Loader from '../../components/Loader';
import Windows from '../../components/Window';
import Link from 'next/link';

import styles from '../../styles/Animations.module.css';

const tools = [
  { src: '/mainpage/ui/blender.png', alt: 'Blender' },
  { src: '/mainpage/ui/zbrush.png', alt: 'ZBrush' },
  { src: '/mainpage/ui/maxon.png', alt: 'Maxon' },
  { src: '/mainpage/ui/ae.png', alt: 'After Effects' },
  { src: '/mainpage/ui/substance.png', alt: 'Substance Painter' },
  { src: '/mainpage/ui/ue.png', alt: 'Unreal Engine' },
];

export default function Animations() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader visible={true} />;

  return (
    <main className={styles.animationsMain}>
      <HeadUp />

      <div className={styles.windowContainer}>
        <Windows title="cloth" icons={tools}>
          

          {/* WAV*/}
          <div className={styles.videoSection}>
            <Link href="/projects/cloth/bmthsweater" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              BMTH<span className={styles.labelAccent}>{'{sweater}'}</span>
            </Link>

            <div className={styles.imageContainer}>
              <img
                src="/mainpage/projects/bmthsweater.png"
                alt="Preview"
              />
            </div>
          </div>


        </Windows>
      </div>
    </main>
  );
}