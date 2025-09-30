import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import HeadUp from '../components/HeadUp';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setIsLoading(false), 3500);
    const killLoader = setTimeout(() => setShowLoader(false), 4000); 
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(killLoader);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader visible={isLoading} />}
      <main className={isLoading ? 'mainHidden' : 'mainVisible'}>
        <div className="scaledWrapper">
        <section className={styles.hero}>
          <Link href="/about">
          <img src="/mainpage/hero.png" alt="alisscart hero" />
          </Link>
        </section>

        <section className={styles.animationsSection}>
          <video autoPlay muted loop playsInline className={styles.videoBg}>
            <source
              src="/mainpage/media/threeDanimation.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.animationsContent}>
            <div className={styles.headerGroup}>
              <Link href="/projects/animations">
              <img
                src="/mainpage/headers/3d.svg"
                alt="3D Animations"
                className={styles.animationsTitle}
              />
              </Link>
              <div className={styles.headerRight}>
                <span>[3D ARTWORKS]</span>
                <span>©2022 - 2025</span>
              </div>
            </div>
          </div>

          <div className={styles.descriptionBlock}>
            <p>
              We create 3D animated artworks blending visual storytelling and
              abstract digital aesthetics. From motion covers to full-blown
              animated sequences — our style merges reality with hyper-emotive CGI.
            </p>
          </div>
        </section>

       <section className={styles.albumSection}>
          <div className={styles.albumHeaderGroup}>
            
            <img
              src="/mainpage/headers/albumcover.svg"
              alt="Album Cover"
              className={styles.albumTitle}
            />
            <div className={styles.headerRight}>
              <span>[MOTION ARTWORKS]</span>
              <span>©2022 - 2025</span>
            </div>
          </div>

          <div className={styles.albumContentWrapper}>
            {/* Правая часть — мокап Spotify */}
            <div className={styles.albumRight}>
              <img
                src="/mainpage/headers/spotify.png"
                alt="Spotify mockup"
                className={styles.spotify}
              />
            </div>

            {/* Левая часть — две обложки и описания */}
            <div className={styles.albumLeft}>
              <div className={styles.albumGrid}>
                <div className={styles.albumItem}>
                  <img src="/mainpage/headers/albumcover1.png" alt="Cover 1" />
                  <span className={styles.caption}>В ритме дождя</span>
                </div>
                <div className={styles.albumItem}>
                  <img src="/mainpage/headers/albumcover2.png" alt="Cover 2" />
                  <span className={styles.caption}>City View Hotel</span>
                </div>
              </div>

              <div className={styles.albumDescriptions}>
                <div className={styles.descriptionLine}>
                  <span className={styles.index}>01</span>
                  <p>
                    this wasn’t just a cover — it turned into a full-blown animated clip. <br />
                    think music video meets visual trip, and yeah, it even made it to live VJ sets on TV.
                  </p>
                </div>
                <div className={styles.descriptionLine}>
                  <span className={styles.index}>02</span>
                  <p>
                    this wasn’t just a recreation — it was a full-on memory reconstruction. <br />
                    they asked to rebuild the exact room from decades ago,
                    and yeah, that’s what this is: a digital resurrection of a space
                    someone once lived, dreamed, broke down, healed in.
                    the hotel was real. the room was real.
                    now it’s alive again — on video.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.animationsSection}>
          <video autoPlay muted loop playsInline className={styles.videoBg}>
            <source
              src="/mainpage/media/musicfestival.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.animationsContent}>
            <div className={styles.headerGroup}>
              <Link href="/projects/film">
              <img
                src="/mainpage/headers/festival.svg"
                alt="Music Festival"
                className={styles.animationsTitle}
              />
              </Link>
              <div className={styles.headerRight}>
                <span>[FILM&EDITING]</span>
                <span>©2023 - 2025</span>
              </div>
            </div>
          </div>

          <div className={styles.descriptionBlock}>
            <p>
              I’ve worked with music festivals across genres — from techno to alternative and beyond. 
              Not only did I create visuals and promo campaigns, but I also filmed, edited and 
              produced full aftermovies that captured the essence of each event.
            </p>
          </div>
        </section>

        <section className={styles.magazineSection}>
          <div className={styles.magazineHeaderGroup}>
            <Link href="/projects/animation/wav">
            <img
              src="/mainpage/headers/magazine.svg"
              alt="MAGAZINE"
              className={styles.magazineTitle}
            />
            </Link>
            <div className={styles.headerRight}>
              <span>[EDITORIAL]</span>
              <span>©2023 - 2025</span>
            </div>
          </div>

          <div className={styles.magazineImageWrapper}>
            <img
              src="/mainpage/headers/magazine.png"
              alt="WAV Magazine Spread"
              className={styles.magazineImage}
            />
          </div>
        </section>

        <section className={styles.web3Section}>
          <div className={styles.web3HeaderGroup}>
            <img
              src="/mainpage/headers/web3.svg"
              alt="WEB 3"
              className={styles.web3Title}
            />
            <div className={styles.headerRight}>
              <span>[DEVELOPMENT]</span>
              <span>©2024 - 2025</span>
            </div>
          </div>

          <div className={styles.web3Content}>
            <div className={styles.laptopBlock}>
              <img src="/mainpage/headers/laptopweb3.png" alt="Web3 Macbook UI" />
              <div className={styles.textRight}>
                <p>
                  i created websites for AI agents in the Web3 space —<br />
                  not the agents themselves, but their digital fronts.<br />
                  each site acted like a personality layer or public face,<br />
                  built for agents that lived on-chain and moved like tokens.<br />
                  some were even listed on marketplaces — like crypto drops.
                </p>
              </div>
            </div>

            <div className={styles.mobileBlock}>
              <div className={styles.textLeft}>
                <p>
                  i wasn’t building utilities —<br />
                  i was shaping how these agents were perceived.<br />
                  designing the tone, the presence,<br />
                  and the weird charm of nonhuman identities.
                </p>
              </div>
              <img src="/mainpage/headers/phoneweb3.png" alt="Web3 Phone UI" />
            </div>
          </div>
        </section>

<section className={styles.contactSection}>
  <img
    src="/mainpage/headers/contact.svg"
    alt="LET'S WORK TOGETHER"
    className={styles.contactTitle}
  />

  <div className={styles.contactInfo}>
  <a className={styles.contactLeft} href="mailto:julbanchick@outlook.com">
    julbanchick@outlook.com
  </a>

  <a className={styles.contactCenter} href="https://t.me/alisscart" target="_blank" rel="noopener noreferrer">
    CONTACT ME
  </a>

  <a className={styles.contactRight} href="https://www.instagram.com/alisscart?igsh=MWRjajQwOTdtM24xbQ==" target="_blank" rel="noopener noreferrer">
    IG | @alisscart
  </a>
</div>

  <div className={styles.socialIcons}>
  <a href="https://t.me/alisscart" target="_blank" rel="noopener noreferrer">
    <img src="/mainpage/headers/telegram.svg" alt="Telegram" />
  </a>
  <a href="https://www.youtube.com/@alisscart" target="_blank" rel="noopener noreferrer">
    <img src="/mainpage/headers/youtube.svg" alt="YouTube" />
  </a>
  <a href="https://www.instagram.com/alisscart?igsh=MWRjajQwOTdtM24xbQ==" target="_blank" rel="noopener noreferrer">
    <img src="/mainpage/headers/instagram.svg" alt="Instagram" />
  </a>
</div>

  <div className={styles.copyright}>
    alisscart © 2025 All reserved
  </div>
</section>

</div>

        <HeadUp />
      </main>
    </>
  );
}