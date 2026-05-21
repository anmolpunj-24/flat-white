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
      className="whitespace-pre-wrap break-words"
      style={{
        color: color,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        textAlign: align,
        maxWidth: maxWidth,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </div>
  );
}
