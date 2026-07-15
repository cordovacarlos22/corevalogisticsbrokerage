const CorevaLogo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light'
  const wordmark = isLight ? '#ffffff' : '#0f172a'
  const sub = isLight ? '#93c5fd' : '#64748b'

  return (
    <svg viewBox="0 0 300 68" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Coreva Logistics Brokerage" fill="none">
      <text x="1" y="38" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="36" letterSpacing="-1" fill={wordmark}>COREVA</text>
      <path d="M 3,50 C 75,44 148,41 210,41 L 228,33 L 220,50 C 148,56 75,61 3,62 Z" fill="url(#swoosh-grad)" />
      <defs>
        <linearGradient id="swoosh-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <text x="3" y="67" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="9.5" letterSpacing="4.5" fill={sub}>LOGISTICS BROKERAGE</text>
    </svg>
  )
}

export default CorevaLogo
