import React, { useState, useEffect, useRef } from 'react';
import HeadUp from '../../../components/HeadUp';
import Loader from '../../../components/Loader';
import styles from '../../../styles/Farfull.module.css';
import Link from 'next/link';

const sections = [
  { src: '/farfull/sec 1.png', alt: 'sec1' },
  { src: '/farfull/sec 2.png', alt: 'sec2' },
  { src: '/farfull/sec 3.png', alt: 'sec3' },
  { src: '/farfull/sec 4.png', alt: 'sec4' },
  { src: '/farfull/sec 5.png', alt: 'sec5', link: '/projects/web' },
  { src: '/farfull/sec 7.png', alt: 'sec7' },
  { src: '/farfull/sec 8.png', alt: 'sec8' },
  { src: '/farfull/sec 9.png', alt: 'sec9' },
  { src: '/farfull/sec 10.png', alt: 'sec10' },
  { src: '/farfull/sec 11.png', alt: 'sec11' },
  { src: '/farfull/sec 12.png', alt: 'sec12' },
  { src: '/farfull/sec 13.png', alt: 'sec13' },
  { src: '/farfull/sec 14.png', alt: 'sec14' },
  { src: '/farfull/sec 15.png', alt: 'sec15' },
  { src: '/farfull/sec 16.png', alt: 'sec16' },
  { src: '/farfull/sec 17.png', alt: 'sec17' },
  { src: '/farfull/sec 18.png', alt: 'sec18' },
  { src: '/farfull/sec 19.png', alt: 'sec19' },
  { src: '/farfull/sec 20.png', alt: 'sec20' },
  { src: '/farfull/sec 21.png', alt: 'sec21' },
  { src: '/farfull/sec 22.png', alt: 'sec22' },
  { src: '/farfull/sec 23.png', alt: 'sec23' },
  { src: '/farfull/sec 24.png', alt: 'sec24' },
  { src: '/farfull/sec 25.png', alt: 'sec25', link: '/index' },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // loader logic
  useEffect(() => {
    const fadeOut = setTimeout(() => setIsLoading(false), 3500);
    const killLoader = setTimeout(() => setShowLoader(false), 4000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(killLoader);
    };
  }, []);

  // последовательная подгрузка картинок
  useEffect(() => {
    const loadImagesSequentially = async () => {
      for (let i = 0; i < sections.length; i++) {
        await new Promise((resolve) => {
          const img = new Image();
          img.src = sections[i].src;
          img.onload = () => {
            setLoadedCount((prev) => prev + 1);
            resolve(null);
          };
          img.onerror = () => resolve(null); 
        });
      }
    };

    loadImagesSequentially();
  }, []);

  // fadeIn при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showLoader && <Loader visible={isLoading} />}
      <main className={isLoading ? 'mainHidden' : 'mainVisible'}>
        <div className="scaledWrapper">
          <div className={styles.fullpage}>
            {sections.map((sec, i) => (
              <div
                key={i}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className={`${styles.section} ${styles.default}`}
              >
                <section>
                  {sec.link ? (
                    <Link href={sec.link}>
                      {i < loadedCount && (
                        <img src={sec.src} alt={sec.alt} loading="lazy" />
                      )}
                    </Link>
                  ) : (
                    i < loadedCount && (
                      <img src={sec.src} alt={sec.alt} loading="lazy" />
                    )
                  )}
                </section>
              </div>
            ))}
          </div>
        </div>
        <HeadUp />
      </main>
    </>
  );
}