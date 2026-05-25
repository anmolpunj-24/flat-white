// components import
import CtaButton from "@/components/ctaButton";

// nextjs import
import Link from "next/link";

export default function Header() {
  let ele = ["About Us", "Services", "Process", "Pricing"];

  let toSection = (e, el) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const id = el.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }; 

  return (
    <div className="fixed top-0 left-0 z-20 bg-[#fff] w-full h-min p-0 overflow-hidden flex items-center gap-[10px] justify-between max-w-[1440px] p-[20px]">
      <Link href={`/`}>
        <h3 className="flex gap-[162px] min-w-[300px] max-w-[300px] h-min cursor-pointer text-[#0a0f15] text-[28px] leading-[1em] tracking-[-0.06em] font-light">
          FlatWhite.
        </h3>
      </Link>

      <div className="flex flex-grow items-center justify-between h-min gap-[24px]">
        <div className="flex items-center gap-[24px] w-min h-min">
          {ele.map((el, index) => (
            <a
              key={index}
              href={`#${el.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col w-fit hover:cursor-pointer "
              onClick={(e) => toSection(e, el)}
            >
              <p className="whitespace-pre text-[#0a0f15] text-[14px] tracking-[-0.02em] leading-[1.3em]">
                {el}
              </p>

              <span className="mt-[2px] h-[1px] w-0 bg-[#0a0f15] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex gap-[12px] w-min h-min ">
          <CtaButton
            bgColor="#ffff"
            textColor="#111"
            ctaText={`Book a call`}
            padding={`10px 14px`}
          />
          <CtaButton
            bgColor="#111"
            textColor="#ffff"
            ctaText={`Get in touch`}
            padding={`10px 14px`}
          />
        </div>
      </div>
    </div>
  );
}
