import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

import Loader from '../components/Loader';
import HeadUp from '../components/HeadUp';
import BoxModal from '../components/BoxModal';

import styles from '../styles/Shop.module.css';

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [modal, setModal] = useState(false);

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
        <Spline scene="/scene/shopno.splinecode" />

        {/* Кнопка по центру под 3D */}
        {!modal && (
    <div className={styles.buyBtnWrapper}>
      <button className={styles.buyBtn} onClick={() => setModal(true)}>
        Buy
      </button>
    </div>
  )}

        {/* Модальное окно */}
        {modal && (
          <div className={styles.modalOverlay} onClick={() => setModal(false)}>
            <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
              
              <BoxModal />
              <button className={styles.closeBtn} onClick={() => setModal(false)}>
                ×
              </button>
            </div>
          </div>
        )}

        {showLoader && (
          <div className={`${styles.loaderOverlay} ${!isLoading ? styles.fadeOut : ''}`}>
            <Loader visible={true} />
          </div>
        )}
      </div>
    </main>
  );
}