// react import
import { useState } from "react";

export default function FaqCard() {
  const [isOpen, setIsOpen] = useState(false);

  let expandFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-[#747e90] rounded-[12px] overflow-hidden cursor-pointer break-inside-avoid"
      onClick={expandFaq}
    >
      <div className="group w-full items-center p-[32px] flex justify-between gap-[12px]">
        <p className="text-white whitespace-pre-wrap break-words text-[18px] font-[500] leading-[1.3em] tracking-[-0.04em]">
          What services do you offer?
        </p>

        <div
          className={`
            bg-[#9199A9]
            group-hover:bg-white
            transition-all
            duration-300
            rounded-full
            h-[24px]
            w-[24px]
            relative
            flex
            items-center
            justify-center
            shrink-0
            ${isOpen ? "rotate-[315deg] bg-white" : "rotate-0"}
          `}
        >
          <div
            className={`absolute w-[10px] h-[2px] group-hover:bg-[#9199A9] transition-all duration-300 rounded-full ${isOpen ? "bg-[#9199A9]" : "bg-white"}`}
          ></div>

          <div
            className={`absolute h-[10px] w-[2px] group-hover:bg-[#9199A9] transition-all duration-300 rounded-full ${isOpen ? "bg-[#9199A9]" : "bg-white"}`}
          ></div>
        </div>
      </div>

      <div
        className={`
          grid
          transition-all
          duration-500
          ease-in-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="px-[32px] pb-[32px]">
            <p className="text-white/80 text-[16px] leading-[1.4em] tracking-[-0.02em]">
              We specialize in strategic and operational consulting. Our team
              helps organizations design growth strategies, optimize business
              processes, implement digital solutions, drive innovation, and
              manage organizational change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
