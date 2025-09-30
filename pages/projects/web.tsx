import { useEffect, useState } from 'react';
import HeadUp from '../../components/HeadUp';
import Loader from '../../components/Loader';
import Windows from '../../components/Window';
import Link from 'next/link';

import styles from '../../styles/Animations.module.css';

const tools = [
  { src: '/mainpage/ui/visual.png', alt: 'Visual Studio' },
  { src: '/mainpage/ui/figma.png', alt: 'Figma' },
  { src: '/mainpage/ui/blender.png', alt: 'Blender' },

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
        <Windows title="web3" icons={tools}>

            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                RNAgent <span className={styles.labelAccent}>{'{AI Agent}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/rnagent.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>


            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                Labratory <span className={styles.labelAccent}>{'{waitlist}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/farenter.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>


            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                VOICE BATTLE <span className={styles.labelAccent}>{'{Antex}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/voicebattle.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>

            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                ANTEX MUSIC <span className={styles.labelAccent}>{'{inDevelop}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/antex.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>


            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                ETHEON <span className={styles.labelAccent}>{'{waitlist}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/etheon.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>

            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                NNN <span className={styles.labelAccent}>{'{AI Agent}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/nnn.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>

            <div className={styles.videoSection}>
              <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                $BOOBS <span className={styles.labelAccent}>{'{Crypto Meme Coin}'}</span>
              </Link>

              <div className={styles.videoContainer}>
                <video
                  src="/video/boobs.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.projectVideo}
                />
              </div>
            </div>


        </Windows>
      </div>
    </main>
  );
}