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
        <Windows title="Hogwarts" icons={tools}>
          {/*  Текстовая секция */}

          <div className={`${styles.textSection} ${styles.sectionContent}`}>
            <div className={styles.sectionTitle}>
              <img
                src="/mainpage/ui/folder.png"
                alt="folder"
                className={styles.folderIcon}
              />Hogwarts <span className={styles.labelAccent}>{'{Animation}'}</span>
            </div>
            
          </div>


          <div className={styles.textSection}>
            <p className={styles.sectionDesc}>
  This project was pure nostalgia and 3D magic — I recreated the iconic Harry Potter intro entirely in <b>Blender</b> for a themed party, <b>TOAST HOGWARTS RAVE</b>. The event itself was fully inspired by the world of Hogwarts: banners, props, and even the vibe of the party all paid tribute to the books and movies.
  <br /><br />
  My task was to bring that atmosphere to life with a custom animated intro for the video report and as a teaser for the event itself. Every detail — from the stormy clouds to the classic “flying logo” and the golden snitch — was modeled, textured, and animated from scratch. I focused on matching the mood of the original Harry Potter openings, but with a unique twist for the party.
  <br /><br />
  Animating the snitch and making the title appear just like in the movies was both a technical and creative challenge, but seeing the final result play at the party (and in all the teasers) made it all worth it. For guests, it was a little bit of movie magic in real life, and for me — another chance to push Blender’s animation tools while having fun with a theme everyone knows and loves.
</p>
          </div>

          <div className={styles.imageSection}>
            <img
              src="/mainpage/projects/hogwarts/hogwarts1.png"
              alt="Nighttime city VJ setup"
              className={styles.image}
            />
          </div>

          <div className={styles.imageSection}>
            <img
              src="/mainpage/projects/hogwarts/hogwarts2.png"
              alt="Nighttime city VJ setup"
              className={styles.image}
            />
          </div>

          <div className={styles.videoSection}>
            <h4 className={styles.videoTitle}>watch the Back Process:</h4>
            <div className={styles.videoContainer}>
                <video
                    src="/mainpage/projects/hogwarts/lighttest0070-0120.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.projectVideo}
                />
            </div>

            <div className={styles.videoContainer}>
                <video
                    src="/mainpage/projects/hogwarts/Blender_D_Projects_Full_Toast_01_13_24_3D_mod_Harry_Potter_9_16.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.projectVideo}
                />
            </div>

            <div className={styles.videoContainer}>
                <video
                    src="/mainpage/projects/hogwarts/Blender_D_Projects_Full_Toast_01_13_24_3D_mod_Harry_Potter_9_16 (1).mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.projectVideo}
                />
            </div>

            <div className={styles.imageSection}>
            <img
              src="/mainpage/projects/hogwarts/photo_2025-06-16 4.50.53 PM.jpeg"
              alt="Nighttime city VJ setup"
              className={styles.image}
            />
          </div>

          <div className={styles.videoContainer}>
                <video
                    src="/mainpage/projects/hogwarts/2024-01-12 19-53-02.mp4"
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