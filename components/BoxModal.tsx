import React from "react";

const telegramIcon = "/mainpage/headers/telegram.svg";
const instagramIcon = "/mainpage/headers/instagram.svg";
const distort = "/mainpage/Distort.png"; // твой фон
// Если есть свои вектора — добавь их тут

import styles from '../styles/BoxModal.module.css'; // см. ниже, стили перепиши из твоего style.css

export const BoxModal: React.FC = () => (
  <div className={styles.box}>
    <div className={styles.frame}>
      <div className={styles.overlapGroup}>
        <div className={styles.preview}>
          <img className={styles.distort} alt="Distort" src={distort} />
          <div className={styles.topLeft} />
          <div className={styles.bottomRight} />
        </div>

        <div className={styles.group}>
          <div className={styles.textWrapper}>OUT OF STOCK</div>
          <div className={styles.textWrapper2}>follow for updates</div>
          <div className={styles.socialsRow}>
            <a
              href="https://t.me/dmitryproduction"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className={styles.socialLink}
            >
              <img className={styles.socialIcon} src={telegramIcon} alt="Telegram" />
            </a>
            <a
              href="https://www.instagram.com/alisscart?igsh=MWRjajQwOTdtM24xbQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <img className={styles.socialIcon} src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BoxModal;