// styles import
import styles from "../styles/index.module.css";

export default function SectionTag({ heading, bgColor, textColor }) {
  return (
    <div
      className={`${styles.tagDiv} whitespace-pre px-[12px] py-[8px] uppercase bg-[bgColor] rounded-[99px] w-min text-[12px] leading-none font-semibold`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {heading}
    </div>
  );
}
