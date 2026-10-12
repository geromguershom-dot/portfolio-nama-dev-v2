import { useRef, type CSSProperties } from "react";

/** Profondeur de parallaxe (en px) appliquée à un groupe SVG. */
const depth = (value: number) => ({ "--d": value }) as CSSProperties;

function Monogram({ stroke, width }: { stroke: string; width: number }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
      <path d="M156 292 L156 190 L232 292 L232 190" />
      <path d="M352 210 A54 54 0 1 0 358 266 L358 244 L320 244" />
    </g>
  );
}

export default function HeroOrb() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", String(((event.clientX - rect.left) / rect.width - 0.5) * 2));
    el.style.setProperty("--my", String(((event.clientY - rect.top) / rect.height - 0.5) * 2));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--mx", "0");
    ref.current?.style.setProperty("--my", "0");
  };

  return (
    <div className="orb" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} aria-hidden="true">
      <svg viewBox="0 0 480 480">
        <defs>
          <radialGradient id="orb-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0.35" stopColor="#7c3aed" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#22d3ee" stopOpacity="0.14" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orb-ring" gradientUnits="userSpaceOnUse" x1="32" y1="240" x2="448" y2="240">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
          <radialGradient id="orb-glass" cx="38%" cy="30%" r="85%">
            <stop offset="0" stopColor="#7c6cff" />
            <stop offset="0.45" stopColor="#2b1d96" />
            <stop offset="1" stopColor="#0a0a3c" />
          </radialGradient>
          <radialGradient id="orb-rim" cx="50%" cy="50%" r="50%">
            <stop offset="0.78" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="1" stopColor="#67e8f9" stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="orb-under" cx="50%" cy="108%" r="70%">
            <stop offset="0" stopColor="#ec4899" stopOpacity="0.75" />
            <stop offset="1" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orb-spec" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orb-mono" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8af3ff" />
            <stop offset="0.55" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#b44cf0" />
          </linearGradient>
          <radialGradient id="orb-bead-v" cx="32%" cy="28%" r="80%">
            <stop offset="0" stopColor="#f0e6ff" />
            <stop offset="0.35" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#1a1458" />
          </radialGradient>
          <radialGradient id="orb-bead-c" cx="32%" cy="28%" r="80%">
            <stop offset="0" stopColor="#e0fbff" />
            <stop offset="0.35" stopColor="#22b8d8" />
            <stop offset="1" stopColor="#0b1a45" />
          </radialGradient>
          <clipPath id="orb-sphere-clip">
            <circle cx="240" cy="240" r="128" />
          </clipPath>
          <clipPath id="orb-front">
            <rect x="0" y="236" width="480" height="244" />
          </clipPath>
          <filter id="orb-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="orb-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Halo lumineux */}
        <g className="orb-layer" style={depth(5)}>
          <circle cx="240" cy="240" r="228" fill="url(#orb-halo)" />
        </g>

        <g className="orb-layer" style={depth(12)}>
          {/* Anneaux — moitié arrière */}
          <g transform="rotate(-24 240 240)">
            <ellipse cx="240" cy="240" rx="208" ry="72" fill="none" stroke="url(#orb-ring)" strokeWidth="12" opacity="0.55" filter="url(#orb-soft)" />
            <ellipse cx="240" cy="240" rx="208" ry="72" fill="none" stroke="url(#orb-ring)" strokeWidth="7" />
          </g>
          <g transform="rotate(32 240 240)">
            <ellipse cx="240" cy="240" rx="178" ry="52" fill="none" stroke="url(#orb-ring)" strokeWidth="3" opacity="0.55" />
          </g>

          {/* Sphère de verre */}
          <circle cx="240" cy="240" r="128" fill="url(#orb-glass)" />
          <g clipPath="url(#orb-sphere-clip)">
            <rect x="100" y="100" width="280" height="280" fill="url(#orb-under)" />
            <circle cx="240" cy="240" r="128" fill="url(#orb-rim)" />
          </g>
          <circle cx="240" cy="240" r="127" fill="none" stroke="#9be7ff" strokeOpacity="0.35" strokeWidth="1.5" />

          {/* Monogramme NG en relief */}
          <g transform="translate(240 242) scale(0.82) translate(-257 -241)">
            <g filter="url(#orb-soft)" opacity="0.8">
              <Monogram stroke="#22d3ee" width={30} />
            </g>
            <g transform="translate(5 7)">
              <Monogram stroke="#101a63" width={26} />
            </g>
            <g transform="translate(2.5 3.5)">
              <Monogram stroke="#1e3a9a" width={26} />
            </g>
            <Monogram stroke="url(#orb-mono)" width={24} />
            <g opacity="0.5" transform="translate(-1 -1.5)">
              <Monogram stroke="#e6fbff" width={4} />
            </g>
          </g>

          {/* Reflets */}
          <ellipse cx="192" cy="168" rx="60" ry="26" transform="rotate(-38 192 168)" fill="url(#orb-spec)" opacity="0.8" />
          <circle cx="160" cy="214" r="4" fill="#fff" opacity="0.7" />

          {/* Anneau — moitié avant */}
          <g transform="rotate(-24 240 240)">
            <ellipse cx="240" cy="240" rx="208" ry="72" fill="none" stroke="url(#orb-ring)" strokeWidth="12" opacity="0.55" filter="url(#orb-soft)" clipPath="url(#orb-front)" />
            <ellipse cx="240" cy="240" rx="208" ry="72" fill="none" stroke="url(#orb-ring)" strokeWidth="7" clipPath="url(#orb-front)" />
          </g>
        </g>

        {/* Billes brillantes */}
        <g className="orb-layer" style={depth(24)}>
          <g className="orb-bead">
            <circle cx="392" cy="104" r="40" fill="#8b5cf6" opacity="0.35" filter="url(#orb-blur)" />
            <circle cx="392" cy="104" r="27" fill="url(#orb-bead-v)" />
            <circle cx="383" cy="94" r="6" fill="#fff" opacity="0.75" />
          </g>
          <g className="orb-bead">
            <circle cx="92" cy="356" r="26" fill="#22d3ee" opacity="0.28" filter="url(#orb-blur)" />
            <circle cx="92" cy="356" r="17" fill="url(#orb-bead-c)" />
            <circle cx="87" cy="350" r="4" fill="#fff" opacity="0.8" />
          </g>
          <g className="orb-bead">
            <circle cx="372" cy="384" r="12" fill="url(#orb-bead-v)" />
            <circle cx="369" cy="380" r="2.8" fill="#fff" opacity="0.8" />
          </g>
          <g className="orb-bead">
            <circle cx="104" cy="128" r="9" fill="url(#orb-bead-c)" />
            <circle cx="102" cy="125" r="2.2" fill="#fff" opacity="0.8" />
          </g>
          <circle cx="430" cy="236" r="2.4" fill="#fff" opacity="0.8" />
          <circle cx="58" cy="236" r="1.8" fill="#67e8f9" opacity="0.9" />
          <circle cx="300" cy="44" r="1.8" fill="#fff" opacity="0.7" />
          <circle cx="204" cy="448" r="2" fill="#f0abfc" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
