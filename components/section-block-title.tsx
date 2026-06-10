function renderAccentWords(text: string) {
  const parts = text.split(
    /(Specialized|Industrial|Engineering|Digital|Solutions|Spezialisiertes|Industrie|Industrielle|Digitale|Lösungen)/gi
  );

  return parts.map((part, index) =>
    /^(Specialized|Industrial|Engineering|Digital|Solutions|Spezialisiertes|Industrie|Industrielle|Digitale|Lösungen)$/i.test(
      part
    ) ? (
      <span key={index} className="highlight-green">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

type SectionBlockTitleProps = {
  title: string;
  className?: string;
};

export function SectionBlockTitle({ title, className = 'section-title section-block-title text-offwhite' }: SectionBlockTitleProps) {
  const [primary, ...rest] = title.split(' — ');
  const secondary = rest.join(' — ').trim();

  if (!secondary) {
    return <h2 className={className}>{title}</h2>;
  }

  return (
    <h2 className={className}>
      <span className="section-block-title-line">{primary}</span>
      <span className="section-block-title-line">{renderAccentWords(secondary)}</span>
    </h2>
  );
}
