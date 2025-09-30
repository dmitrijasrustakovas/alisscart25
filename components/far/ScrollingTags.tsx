const tags = [
  [
    "User Persona", "User Flow", "User Experience", "User Scenario", "Mindmap",
    "Usability", "Screen Mapping", "Human Interface Guidelines", "Miro", "Веб-дизайн", "Material Design"
  ],
  [
    "Blender 3D", "Adobe After Effect", "3D-графика", "Adobe Photoshop",
    "Английский язык", "Adobe Illustrator", "Unreal Engine 5", "Figma", "next.js"
  ],
  [
    "HTML", "CSS", "tree.js", "Adobe Substance 3D Painter", "Marvelous Designer",
    "UX-исследования", "UX/UI", "Прототипирование", "A/B тесты", "User Interface"
  ]
];

const speeds = ["20s", "28s", "24s"];

export default function ScrollingTags() {
  return (
    <section className="overflow-hidden bg-black py-8 space-y-4">
      {tags.map((row, i) => (
        <div key={i} className="relative w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap gap-4 will-change-transform"
            style={{
              width: "max-content",
              animation: `${i % 2 === 0 ? "scroll-left" : "scroll-right"} ${speeds[i]} linear infinite`,
            }}
          >
            {[...row, ...row].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm md:text-base hover:bg-white/10 hover:scale-105 transition-transform"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-row:hover {
        animation-play-state: paused;
        animation-duration: calc(var(--animation-speed, 20s) * 2);
        }
      `}</style>
    </section>
  );
}