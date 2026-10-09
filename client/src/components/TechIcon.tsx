export type TechName = "React" | "Node.js" | "Express" | "MongoDB";

export default function TechIcon({ name }: { name: TechName }) {
  const common = { viewBox: "0 0 32 32", fill: "none", strokeWidth: 1.6, "aria-hidden": true } as const;
  switch (name) {
    case "React":
      return (
        <svg {...common} stroke="#22d3ee">
          <ellipse cx="16" cy="16" rx="13" ry="5" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
          <circle cx="16" cy="16" r="2" fill="#22d3ee" stroke="none" />
        </svg>
      );
    case "Node.js":
      return (
        <svg {...common} stroke="#4ade80">
          <path d="M16 3l11 6.3v13.4L16 29 5 22.7V9.3z" />
          <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4ade80" stroke="none" fontFamily="Arial, sans-serif">JS</text>
        </svg>
      );
    case "Express":
      return (
        <svg {...common} stroke="currentColor">
          <text x="16" y="22" textAnchor="middle" fontSize="17" fontWeight="600" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif">ex</text>
        </svg>
      );
    case "MongoDB":
      return (
        <svg {...common} stroke="#34d399">
          <path d="M16 3c4 5 7 9 7 14a7 7 0 0 1-14 0c0-5 3-9 7-14z" />
          <path d="M16 12v17" />
        </svg>
      );
  }
}
