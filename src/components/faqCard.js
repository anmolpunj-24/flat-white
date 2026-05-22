export default function FaqCard() {
  return (
    <div className="group bg-[#747e90] w-full rounded-[12px] cursor-pointer h-min items-center p-[32px] flex justify-between gap-[12px]">
      <p className="text-white whitespace-pre-wrap break-words text-[18px] font-[500] leading-[1.3em] tracking-[-0.04em]">
        What services do you offer?
      </p>

      <div className="bg-[#9199A9] group-hover:bg-white transition-all duration-300 rounded-full h-[24px] w-[24px] relative flex items-center justify-center group-hover:rotate-[315deg] shrink-0">
        <div className="absolute w-[10px] h-[2px] bg-white group-hover:bg-[#9199A9] transition-all duration-300 rounded-full"></div>
        <div className="absolute h-[10px] w-[2px] bg-white group-hover:bg-[#9199A9] transition-all duration-300 rounded-full"></div>
      </div>
    </div>
  );
}
