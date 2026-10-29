// Club sub-brand mark: a W inside a football pitch centre circle.
// Only for club-facing parts of the site.
const ClubMark = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" role="img" aria-label="Warren Digital for clubs" className={className}>
    <rect width="64" height="64" rx="14" fill="#166534" />
    <g fill="none" stroke="#FAFAF7" strokeWidth="2.5">
      <circle cx="32" cy="32" r="20" />
      <path d="M4 32h8M52 32h8" />
    </g>
    <text
      x="32"
      y="40.5"
      textAnchor="middle"
      fontFamily="Archivo, sans-serif"
      fontWeight="800"
      fontSize="24"
      fill="#FAFAF7"
    >
      W
    </text>
  </svg>
);

export default ClubMark;
