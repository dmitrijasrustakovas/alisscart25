import { useState, useEffect } from "react";
import HeadUp from "../../../components/HeadUp";
import Loader from "../../../components/Loader";

import HeroSection from "../../../components/far/HeroSection";
import AboutSection from "../../../components/far/AboutSection";
import ScrollingTags from "../../../components/far/ScrollingTags";
import ScreensGallery from "../../../components/far/ScreensGallery";
import MotionShowcase from "../../../components/far/MotionShowcase";
import CTASection from "../../../components/far/CTASection";

import MagicBento from '../../../components/far/ScreensGallery'



import styles from "../../../styles/Far.module.css";

export default function FarlegacyPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) return <Loader visible={true} />;

  return (
    <main className={styles.main}>
      <HeadUp />
      
      <HeroSection />

      <AboutSection />

      <ScrollingTags />

      <MotionShowcase />

      <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>

      <CTASection  className={styles.CTASection}/>
    </main>
  );
}