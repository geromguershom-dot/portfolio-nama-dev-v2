import { useRef } from "react";

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
      <svg viewBox="0 0 400 400">
        <defs>
          <radialGradient id="orb-body" cx="34%" cy="28%" r="80%">
            <stop offset="0" stopColor="#c4b5fd" />
            <stop offset="0.42" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#1e1b4b" />
          </radialGradient>
          <linearGradient id="orb-ring" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.6" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="orb-text" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#67e8f9" />
            <stop offset="1" stopColor="#f0abfc" />
          </linearGradient>
          <filter id="orb-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <g className="orb-layer">
          <circle cx="200" cy="200" r="140" fill="#8b5cf6" opacity="0.35" filter="url(#orb-glow)" />
          <circle cx="200" cy="200" r="118" fill="url(#orb-body)" />
          <ellipse cx="200" cy="200" rx="170" ry="62" fill="none" stroke="url(#orb-ring)" strokeWidth="5" transform="rotate(-22 200 200)" opacity="0.95" />
          <text x="200" y="238" textAnchor="middle" fontFamily="Space Grotesk, Arial, sans-serif" fontWeight="800" fontSize="116" fill="url(#orb-text)" letterSpacing="-6">
            NG
          </text>
          <circle cx="318" cy="96" r="22" fill="url(#orb-body)" />
          <circle cx="78" cy="318" r="14" fill="url(#orb-body)" />
          <circle cx="332" cy="300" r="8" fill="#22d3ee" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
