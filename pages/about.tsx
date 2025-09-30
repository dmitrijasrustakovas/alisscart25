import HeadUp from '../components/HeadUp'
import Lanyard from '../components/Lanyard'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <HeadUp />

      {/* Контейнер для текста и Lanyard */}
      <div className={styles.contentWrapper}>
        <section className={styles.textBlock}>
          
          <p className={styles.desc}>
  Hi, I’m Dmitrijas — a digital creator with a passion for experimental web3, 3D, and audiovisual projects.<br /><br />
  For over three years, I’ve been working as a freelancer, collaborating with clients from all backgrounds and industries. Whether you’re an artist, entrepreneur, or big brand, I love finding creative solutions and making unique ideas real.<br /><br />
  My approach blends design, animation, and code — every project you see here is handcrafted, whether it’s for events, music releases, or custom web experiences. I thrive on creative collaborations and believe the best results come from mixing different disciplines.<br /><br />
  This space is a living portfolio of what inspires me: from digital art experiments and web-based projects to real-world collaborations. If you’re looking to build something original, connect via socials or just drop a message — always open to new ideas and creative partnerships!
</p>
        </section>

        {/* Lanyard - поверх, справа */}
        
      </div>
      <div className={styles.lanyardOverlay}>
          <Lanyard />
        </div>
    </main>
  )
}