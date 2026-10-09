export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Logo NG">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.6" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="#0b1230" />
      <rect x="1" y="1" width="46" height="46" rx="11" fill="none" stroke="url(#logo-g)" strokeWidth="1.5" />
      <text x="24" y="31" textAnchor="middle" fontFamily="Space Grotesk, Arial, sans-serif" fontWeight="800" fontSize="20" fill="url(#logo-g)">
        NG
      </text>
    </svg>
  );
}
