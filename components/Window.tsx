import React from 'react';
import styles from '../styles/Window.module.css';

type Props = {
  title?: string;
  children?: React.ReactNode;
  icons?: { src: string; alt: string }[];
};

const Windows: React.FC<Props> = ({ title = 'Untitled Window', children, icons = [] }) => {
  return (
    <div className={styles.windowWrapper}>
      <div className={styles.topBar}>
        <div className={styles.buttons}>
          <span className={`${styles.circle} ${styles.red}`} />
          <span className={`${styles.circle} ${styles.yellow}`} />
          <span className={`${styles.circle} ${styles.green}`} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.tools}>
          <img src="/mainpage/ui/grid.svg" alt="grid" />
          <img src="/mainpage/ui/list.svg" alt="list" />
          <img src="/mainpage/ui/columns.svg" alt="columns" />
          <img src="/mainpage/ui/devices.svg" alt="devices" />
          <img src="/mainpage/ui/search.svg" alt="search" />
        </div>
      </div>

      <div className={styles.subTitle}>{title}</div>
      <div className={styles.windowContent}>{children}</div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomIcons}>
          {icons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
        <div className={styles.available}>1 of 2 selected, 42.05 GB available</div>
      </div>
    </div>
  );
};

export default Windows;