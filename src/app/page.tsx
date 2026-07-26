import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import AboutIntro from "@/components/sections/AboutIntro";
import MediaTeaser from "@/components/sections/MediaTeaser";
import MadeByStudio from "@/components/sections/MadeByStudio";
import Cases from "@/components/sections/Cases";
import AboutUs from "@/components/sections/AboutUs";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Showreel />
      <AboutIntro />
      <MediaTeaser />
      <MadeByStudio />
      <Cases />
      <AboutUs />
      <ContactCta />
    </div>
  );
}
