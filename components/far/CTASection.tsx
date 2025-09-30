import { useState, type ReactNode } from 'react';
import { useRouter } from "next/navigation";

type FolderProps = {
  color?: string;
  size?: number;
  items?: (ReactNode | null)[];
  className?: string;
  link?: string;
};

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

export default function Folder({
  color = '#3783F5',
  size = 1,
  items = [],
  className = '',
  link = '/projects/web/farfullproject'
}: FolderProps) {
  const maxItems = 3;
  const papers = [...items];
  while (papers.length < maxItems) papers.push(null);

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = "url('/far/hero.png')";
  const paper2 = "url('/far/hero.png')";
  const paper3 = "url('/far/hero.png')";

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      if (link.startsWith('http')) {
        window.open(link, "_blank");
      } else {
        router.push(link);
      }
    }, 400);
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {papers.map((item, i) => (
            <div key={i} className={`paper paper-${i + 1}`}>
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>

      <style jsx>{`
        .folder {
          transition: all 0.2s ease-in;
          cursor: pointer;
        }

        .folder:not(.folder--click):hover {
          transform: translateY(-8px);
        }

        .folder:not(.folder--click):hover .paper {
          transform: translate(-50%, 0%);
        }

        .folder:not(.folder--click):hover .folder__front {
          transform: skew(15deg) scaleY(0.6);
        }

        .folder:not(.folder--click):hover .right {
          transform: skew(-15deg) scaleY(0.6);
        }

        .folder.open {
          transform: translateY(-8px);
        }

        .folder.open .paper:nth-child(1) {
          transform: translate(-120%, -70%) rotateZ(-15deg);
        }

        .folder.open .paper:nth-child(1):hover {
          transform: translate(-120%, -70%) rotateZ(-15deg) scale(1.1);
        }

        .folder.open .paper:nth-child(2) {
          transform: translate(10%, -70%) rotateZ(15deg);
          height: 80%;
        }

        .folder.open .paper:nth-child(2):hover {
          transform: translate(10%, -70%) rotateZ(15deg) scale(1.1);
        }

        .folder.open .paper:nth-child(3) {
          transform: translate(-50%, -100%) rotateZ(5deg);
          height: 80%;
        }

        .folder.open .paper:nth-child(3):hover {
          transform: translate(-50%, -100%) rotateZ(5deg) scale(1.1);
        }

        .folder.open .folder__front {
          transform: skew(15deg) scaleY(0.6);
        }

        .folder.open .right {
          transform: skew(-15deg) scaleY(0.6);
        }

        .folder__back {
          position: relative;
          width: 100px;
          height: 80px;
          background: var(--folder-back-color);
          border-radius: 0px 10px 10px 10px;
        }

        .folder__back::after {
          position: absolute;
          z-index: 0;
          bottom: 98%;
          left: 0;
          content: '';
          width: 30px;
          height: 10px;
          background: var(--folder-back-color);
          border-radius: 5px 5px 0 0;
        }

        .paper {
          position: absolute;
          z-index: 2;
          bottom: 10%;
          left: 50%;
          transform: translate(-50%, 10%);
          width: 70%;
          height: 80%;
          border-radius: 10px;
          transition: all 0.3s ease-in-out;
        }

        .paper:nth-child(2) {
          width: 80%;
          height: 70%;
        }

        .paper:nth-child(3) {
          width: 90%;
          height: 60%;
        }

        .paper-2 { background: var(--paper-2) no-repeat center/cover; }
        .paper-2 { background: var(--paper-2) no-repeat center/cover; }
        .paper-3 { background: var(--paper-3) no-repeat center/cover; }

        .folder__front {
          position: absolute;
          z-index: 3;
          width: 100%;
          height: 100%;
          background: var(--folder-color);
          border-radius: 5px 10px 10px 10px;
          transform-origin: bottom;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}