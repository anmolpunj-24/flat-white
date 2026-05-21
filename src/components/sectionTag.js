// styles import
import styles from "../styles/index.module.css";

export default function SectionTag({ heading, bgColor, textColor }) {
  return (
    <div
      className={`${styles.tagDiv} whitespace-pre px-[12px] py-[6px] uppercase bg-[bgColor] rounded-[99px] h-min w-min text-[12px] leading-none font-meduim`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {heading}
    </div>
  );
}
