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

  const stripeHeight = 16 / 13;

  return (
    <svg
      viewBox="0 0 24 16"
      className={className ?? flagClass}
      aria-hidden="true"
      role="img"
    >
      {Array.from({ length: 13 }, (_, index) => (
        <rect
          key={index}
          y={index * stripeHeight}
          width="24"
          height={stripeHeight}
          fill={index % 2 === 0 ? '#B22234' : '#FFFFFF'}
        />
      ))}
      <rect width="9.6" height={stripeHeight * 7} fill="#3C3B6E" />
      {[
        [1.2, 1.1],
        [2.4, 1.1],
        [3.6, 1.1],
        [4.8, 1.1],
        [1.8, 2.3],
        [3.0, 2.3],
        [4.2, 2.3],
        [1.2, 3.5],
        [2.4, 3.5],
        [3.6, 3.5],
        [4.8, 3.5],
        [1.8, 4.7],
        [3.0, 4.7],
        [4.2, 4.7]
      ].map(([cx, cy], index) => (
        <circle key={index} cx={cx} cy={cy} r="0.45" fill="#FFFFFF" />
      ))}
    </svg>
  );
}
