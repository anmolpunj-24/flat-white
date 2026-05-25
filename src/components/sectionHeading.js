export default function SectionHeading({
  fontSize,
  color,
  letterSpacing,
  lineHeight,
  maxWidth,
  text,
  align,
}) {
  return (
    <div
      className={`${fontSize} ${letterSpacing} ${lineHeight} whitespace-pre-wrap break-words`}
      style={{
        color: color,
        maxWidth: maxWidth,
        textAlign: align,
      }}
    >
      {text}
    </div>
  );
}
