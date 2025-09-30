export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center p-[2%]">
      <img
        src="/far/hero.png"
        alt="aboutpr"
        className="object-contain max-w-[90%] max-h-[90%]"
      />

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 2% 0;
          }
        }
      `}</style>
    </section>
  );
}