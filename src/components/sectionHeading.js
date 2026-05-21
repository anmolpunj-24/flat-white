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
      className="whitespace-pre-wrap break-words"
      style={{
        fontSize: fontSize,
        color: color,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        maxWidth: maxWidth,
        textAlign: align,
      }}
    >
      {text}
    </div>
  );
}
