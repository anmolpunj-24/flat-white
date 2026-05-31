// nextjs import
import { useRouter } from "next/router";

export default function CtaButton({
  bgColor,
  textColor,
  ctaText,
  padding,
  linkTo,
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(linkTo)}
      className="group relative border border-[#0a0f1533] cursor-pointer capitalize rounded-[99px] h-min w-min whitespace-nowrap text-[14px] transition-all duration-200 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor, padding: padding }}
    >
      <div className="relative overflow-hidden block">
        <div className="transition-transform duration-200 ease-out group-hover:-translate-y-full block">
          {ctaText}
        </div>

        <div className="absolute inset-0 transition-transform duration-200 ease-out translate-y-full group-hover:translate-y-0 block">
          {ctaText}
        </div>
      </div>
    </div>
  );
}
