// components/MagazineFlipbook.tsx
import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from '../styles/Magazine.module.css';

const images = [
  '/mainpage/journal/page1.png',
  '/mainpage/journal/page2.png',
  '/mainpage/journal/page3.png',
  '/mainpage/journal/page4.png',
];

const MagazineFlipbook = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.layout}>
      {showLoader && (
        <div className={styles.loaderWrapper}>
          {/* Можно Loader вообще убрать */}
        </div>
      )}

      {!isOpened && !showLoader && (
        <div className={`${styles.note} ${isOpened ? styles.hide : ''}`}>
          OPEN MAGAZINE
        </div>
      )}

        {!showLoader && (
          <HTMLFlipBook
            style={{}}
            width={400}
            height={600}
            size="stretch"
            minWidth={300}
            maxWidth={600}
            minHeight={400}
            maxHeight={900}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className={styles.book}
            onFlip={(e) => {
              if (e.data?.page > 0) {
                setIsOpened(true);
              }
            }}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {images.map((src, index) => (
              <div key={index} className={styles.page}>
                <img src={src} alt={`Page ${index + 1}`} />
              </div>
            ))}
                 </HTMLFlipBook>
      )}
    </div>
  );
};

export default MagazineFlipbook;