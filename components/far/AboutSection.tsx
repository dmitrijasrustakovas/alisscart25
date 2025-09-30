import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll("h2, p, li"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="aboutSection">
      <h2>Задачи:</h2>
      <p>
        Создать интерфейсы и визуальную систему для целой экосистемы Farlegacy:
        три разных сайта (на двух этапах разработки) и кроссплатформенное приложение,
        которое работает как на ПК, так и на телефонах.
      </p>

      <h2>Достижения:</h2>
      <ul>
        <li>Разработал общую дизайн-систему, чтобы сайты и приложение выглядели единообразно</li>
        <li>Проработал UX-поток для матчей, экранов карт, навигации между этапами</li>
        <li>Создал UI для трёх сайтов (лендинги, маркетплейс, внутренняя панель) и адаптировал их под мобайл</li>
        <li>Сделал анимации интерфейсов и motion-эффекты для вовлечения</li>
        <li>Обеспечил полную адаптивность и целостный UX на всех устройствах</li>
      </ul>

      {/* Стили прямо в компоненте */}
      <style jsx>{`
        .aboutSection {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1.5rem;
          text-align: left;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
          color: #fff;
          padding: 4rem 1.5rem;
        }

        .aboutSection h2 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .aboutSection p {
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 700px;
        }

        .aboutSection ul {
          list-style: disc inside;
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 700px;
        }

        .aboutSection li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .aboutSection {
            padding: 2rem 1rem;
          }

          .aboutSection h2 {
            font-size: 1.75rem;
          }

          .aboutSection p,
          .aboutSection ul {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}