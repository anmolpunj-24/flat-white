export default function SectionSmallHeading({
  color,
  fontSize,
  lineHeight,
  letterSpacing,
  align,
  text,
  maxWidth,
  fontWeight,
}) {
  return (
    <div
      className={`${fontSize} ${lineHeight} ${letterSpacing} whitespace-pre-wrap break-words`}
      style={{
        color: color,
        textAlign: align,
        maxWidth: maxWidth,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </div>
  );
}
