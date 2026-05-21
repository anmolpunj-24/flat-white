import CtaButton from "@/components/ctaButton";

export default function Header() {
  let ele = ["About Us", "Services", "Process", "Pricing"];
  return (
    <div className="fixed top-0 left-0 z-20 bg-[#fff] w-full h-min p-0 overflow-hidden flex items-center gap-[10px] justify-between max-w-[1440px] p-[20px]">
      <h3 className="flex gap-[162px] min-w-[300px] max-w-[300px] h-min cursor-pointer text-[#0a0f15] text-[28px] leading-[1em] tracking-[-0.06em] font-light">
        FlatWhite.
      </h3>
      <div className="flex flex-grow items-center justify-between h-min gap-[24px]">
        <div className="flex items-center gap-[24px] w-min h-min">
          {ele.map((el, index) => (
            <p
              className="hover:cursor-pointer hover:underline whitespace-pre text-[#0a0f15] text-[14px] tracking-[-0.02em] leading-[1.3em]"
              key={index}
            >
              {el}
            </p>
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
