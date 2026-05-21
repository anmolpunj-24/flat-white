// styles import
import styles from "../styles/index.module.css";

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
      className={`${styles.headingTag} whitespace-pre-wrap break-words`}
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
