export default function CtaButton({ bgColor, textColor, ctaText }) {
  return (
    <div
      className="border border-[#0a0f1533] cursor-pointer capitalize rounded-[99px] h-min w-min px-[16px] py-[12px] item-center justify-center whitespace-pre"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {ctaText}
    </div>
  );
}
