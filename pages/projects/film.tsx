import { useEffect, useState } from 'react';
import HeadUp from '../../components/HeadUp';
import Loader from '../../components/Loader';
import Windows from '../../components/Window';
import Link from 'next/link';

import styles from '../../styles/Animations.module.css';

const tools = [
  { src: '/mainpage/ui/blender.png', alt: 'Blender' },
  { src: '/mainpage/ui/resolve.png', alt: 'DavinciResolve' },
  { src: '/mainpage/ui/ae.png', alt: 'After Effects' },
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
        <Windows title="film&editing" icons={tools}>

          {/* OPEN SUMMER */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                OPEN SUMMER <span className={styles.labelAccent}>{'{0724}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/w4yy9ctkQf8?si=5vCizMz-3m8O1GlZ"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* OPEN SUMMER */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                OPEN SUMMER <span className={styles.labelAccent}>{'{0624}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/gdntHqHIO_Q?si=pmCzxLjFzikFOiv5"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* реп */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                РЕПЧИК <span className={styles.labelAccent}>{'{0424}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/KsehfpA7XoU?si=Wmw7xOM1PEBL0sdA"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                РЕПЧИК <span className={styles.labelAccent}>{'{0923}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/SjwhTTaIuEA?si=ARHJb0ieqPPjbQ4q"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>


          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                TOAST <span className={styles.labelAccent}>{'{Hogwarts Rave}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/vnGhyjEUF_E?si=v1Yo4RLsanzntlYW"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                TOAST <span className={styles.labelAccent}>{'{New Dream}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/lP2CmulV-R4?si=77NKHlZg0Sr3jOAF"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                YO PARTY <span className={styles.labelAccent}>{'{FE!N}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/g9ztHZQ_kLc?si=LAbP1RWlygA7WQtN"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                YO PARTYxOPEN SUMMER <span className={styles.labelAccent}>{'{teaser}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/TgumrFuFpyQ?si=YgC1NleqnNjmDlZU"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                OPEN SUMMER <span className={styles.labelAccent}>{'{0824}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/i2sbMptBqBI?si=8IdZmXvEyoeBWV95"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>



          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
                <img
                  src="/mainpage/ui/folder.png"
                  alt="folder"
                  className={styles.folderIcon}
                />
                YO PARTY <span className={styles.labelAccent}>{'{Goat}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/nwPjM40vt48?si=_pvmk0dUlncPJxeD"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Windows>
      </div>
    </main>
  );
}