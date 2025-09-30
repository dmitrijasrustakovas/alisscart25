import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = ({ visible }: { visible: boolean }) => {
  return (
    <div className={`${styles.wrapper} ${!visible ? styles.fadeOut : ''}`}>
      <div>
        <div className={styles['ring-3']}>
          <div className={styles['ring-2']}>
            <div className={styles['ring-1']}>
              <img
                src="/mainpage/avatar.png"
                alt="loader-avatar"
                className={styles.avatar}
              />
              <div className={styles.glow} />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          {[...Array(6)].map((_, i) => (
            <svg
              key={i}
              className={`${styles.crescent} ${styles[`crescent-${i + 1}`]}`}
              viewBox="0 0 50 50"
            >
              <path
                d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0"
                fill="rgba(210, 40, 35, 0.33)"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;