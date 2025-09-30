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
        <Windows title="3D Animations" icons={tools}>
          {/* NOLA VDJ */}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/nolavdj" passHref className={styles.sectionTitle}>
              <img
                src="/mainpage/ui/folder.png"
                alt="folder"
                className={styles.folderIcon}
              />
              NOLA VDJ <span className={styles.labelAccent}>{'{ЖАРА LIVE}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/smAZ3eW95w8?si=cqFxgexYniepwRod"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* ZAPERWAVE */}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/zaperwave" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              ZAPERWAVE
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/BqmP1Y7nlms?si=fdYk55YR0f43opQM"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* BMTH DARKSIDE */}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/darkside" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              BRING ME THE HORIZON<span className={styles.labelAccent}>{'{DArkSide}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/YYFgyfwZeb4?si=S0W2vPv24XcQPpzx"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* crashface */}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/crashface" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              CRASHFACE<span className={styles.labelAccent}>{'{City View Hotel}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/JGjjuEdULv4?si=OE9vXuk6Q5qWpOBz"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* WAV*/}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/wav" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              Toast<span className={styles.labelAccent}>{'{WAV}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/ukRl1vou7o0?si=PrpJE3yzB4EJEkg_"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* WAV*/}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/wav" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              Toast<span className={styles.labelAccent}>{'{WAV anniversary}'}</span>
            </Link>

            <div className={styles.imageContainer}>
              <img
                src="/mainpage/projects/wavall.png"
                alt="Preview"
              />
            </div>
          </div>

          {/* BMTH DIE4U */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              BRING ME THE HORIZON<span className={styles.labelAccent}>{'{DiE4u. 0uT n0w 🩸}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/9cuwkGw3Ao4?si=W8niaddhczwjF_9_"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* BMTH fallout */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              BRING ME THE HORIZON<span className={styles.labelAccent}>{'{fallout ☢️}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/28y0BSmRf30?si=EAa_RUZDMx5b_t6t"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* KASST */}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/kasst" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              KAS:ST<span className={styles.labelAccent}>{'{on ALPALOOZAFESTIVAL}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/Y2zq9ntZebg?si=-tacyB6X4kIsDTTd"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* HogwartsRave*/}
          <div className={styles.videoSection}>
            <Link href="/projects/animation/hogwarts" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              Toast<span className={styles.labelAccent}>{'{HogwartsRave}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/vnGhyjEUF_E?si=SDgO2-7TsaBX6761"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* NOLA Vritme */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              NOLA<span className={styles.labelAccent}>{'{В ритме дождя}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/bc2e-Uzoca0?si=hxi3yDNCmogmipzV"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* NOLA 2400 */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              NOLA<span className={styles.labelAccent}>{'{24:00}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/wSVbyAhAE9Y?si=DeTNaqwOXL8JpzGe"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* NOLA Sakura */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              NOLA<span className={styles.labelAccent}>{'{Сакура}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/7IUGreJMhGk?si=lqRnDhDq7VR4KUHE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* NOLA Планета */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              NOLA<span className={styles.labelAccent}>{'{Другая планета}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/YFqdoG488Q0?si=yZduG44Ogif8DZiK"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* OpenVFX */}
          <div className={styles.videoSection}>
            <Link href="" passHref className={styles.sectionTitle}>
              <img src="/mainpage/ui/folder.png" alt="folder" className={styles.folderIcon} />
              OpenSummer<span className={styles.labelAccent}>{'{VFX}'}</span>
            </Link>

            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/kPeK5ddjrYo?si=kjPQEgQJB_78AkfQ"
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