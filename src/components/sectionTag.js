// styles import
import styles from "../styles/index.module.css";

export default function SectionTag({ heading, bgColor }) {
  return (
    <div
      className={`${styles.tagDiv} px-[12px] py-[8px] uppercase bg-[bgColor] rounded-[99px] w-min text-white text-[12px] leading-none font-semibold`}
      style={{ backgroundColor: --bgColor }}
    >
      {heading}
    </div>
  );
}
