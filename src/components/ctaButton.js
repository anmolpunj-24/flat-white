export default function CtaButton({ bgColor, textColor, ctaText, padding }) {
  return (
    <div
      className="border border-[#0a0f1533] cursor-pointer capitalize rounded-[99px] h-min w-min item-center justify-center whitespace-pre text-[14px]"
      style={{ backgroundColor: bgColor, color: textColor, padding: padding }}
    >
      {ctaText}
    </div>
  );
}
