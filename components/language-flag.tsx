type LanguageFlagProps = {
  code: 'en' | 'de';
  className?: string;
};

const flagClass =
  'h-4 w-6 shrink-0 overflow-hidden rounded-sm border border-line shadow-sm';

export function LanguageFlag({ code, className }: LanguageFlagProps) {
  if (code === 'de') {
    return (
      <svg
        viewBox="0 0 24 16"
        className={className ?? flagClass}
        aria-hidden="true"
        role="img"
      >
        <rect width="24" height="5.33" fill="#000000" />
        <rect y="5.33" width="24" height="5.34" fill="#DD0000" />
        <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 16"
      className={className ?? flagClass}
      aria-hidden="true"
      role="img"
    >
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="3.2" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M9.6,0 H14.4 V16 H9.6 Z M0,5.6 H24 V10.4 H0 Z" fill="#FFFFFF" />
      <path d="M10.8,0 H13.2 V16 H10.8 Z M0,6.8 H24 V9.2 H0 Z" fill="#C8102E" />
    </svg>
  );
}
