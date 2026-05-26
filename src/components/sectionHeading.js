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
      className={`${fontSize} ${letterSpacing} ${lineHeight} ${maxWidth} whitespace-pre-wrap break-words`}
      style={{
        color: color,
        textAlign: align,
      }}
    >
      {text}
    </div>
  );
}
