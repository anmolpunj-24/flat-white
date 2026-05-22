export default function SectionTag({ heading, bgColor, textColor }) {
  return (
    <div
      className="whitespace-pre px-[12px] py-[8px] uppercase bg-[bgColor] rounded-[99px] h-min w-min text-[12px] leading-none font-[600]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {heading}
    </div>
  );
}
