// pages/projects/animations/pervaya.tsx
import React, { useState, useEffect } from 'react';
import HeadUp from '../../../components/HeadUp';
import Loader from '../../../components/Loader';
import Windows from '../../../components/Window';

import styles from '../../../styles/projects/nolavdj.module.css';

const tools = [
  { src: '/mainpage/ui/blender.png', alt: 'Blender' },
  { src: '/mainpage/ui/zbrush.png', alt: 'ZBrush' },
  { src: '/mainpage/ui/maxon.png', alt: 'Maxon' },
  { src: '/mainpage/ui/ae.png', alt: 'After Effects' },
  { src: '/mainpage/ui/substance.png', alt: 'Substance Painter' },
  { src: '/mainpage/ui/ue.png', alt: 'Unreal Engine' },
];

export default function PerkayaStage() {
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
        <Windows title="NOLA {VDJ}" icons={tools}>
          {/*  Текстовая секция  */}

          <div className={`${styles.textSection} ${styles.sectionContent}`}>
            <div className={styles.sectionTitle}>
              <img
                src="/mainpage/ui/folder.png"
                alt="folder"
                className={styles.folderIcon}
              />NOLA <span className={styles.labelAccent}>{'{VDJ}'}</span>
            </div>
            {/* Spotify */}
            <div className={`${styles.spotifySection} ${styles.sectionContent}`}>
              <iframe
                style={{ borderRadius: "16px", width: "100%", maxWidth: "420px", margin: "0 auto", display: "block" }}
                src="https://open.spotify.com/embed/track/3zPQlNaIUpUBUC8HsLtZKM?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>


          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>
              3D Stage Design for “Pervaya Vstrechnaya” (Live on ЖАРА LIVE)
            </h3>
            <p>
              A custom VJing animation designed and rendered for NOLA’s live performance
              of “Pervaya Vstrechnaya” on ЖАРА LIVE.
            </p>
            <p>
              All visuals were created in Blender and rendered as an ultra-wide canvas
              specifically tailored for LED stage setups.
            </p>
          </div>

          <div className={styles.imageSection}>
            <img
              src="/mainpage/projects/stagenight.jpg"
              alt="Nighttime city VJ setup"
              className={styles.image}
            />
          </div>

          <div className={styles.videoSection}>
            <h4 className={styles.videoTitle}>watch the Back Process:</h4>
            <div className={styles.youtubeEmbed}>
              <iframe
                src="https://www.youtube.com/embed/ObMdvqlIOeQ?si=YyxVXWVwQnMAtu0K"
                title="Pervaya Vstrechnaya Live"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Windows>
      </div>
    </main>
  );
}