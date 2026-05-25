export default function CardWithDots({
  value = "32%",
  activeIndex,
  totalBars,
  description = "average EBITDA growth in 12 months",
}) {
  return (
    <div className="relative w-full h-full rounded-[12px] bg-[rgba(255,255,255,0.04)] p-[24px] overflow-hidden">
      <div className="flex items-start justify-between">
        <h2 className="text-white text-[46px] leading-[1em] tracking-[-0.06em] font-normal">
          {value}
        </h2>

        <div className="flex items-center gap-[2px] pt-2">
          {Array.from({ length: totalBars }).map((_, index) => (
            <div
              key={index}
              className={`h-[8px] w-[8px] rounded-[2px] transition-all duration-300 ${
                index <= activeIndex ? "bg-white" : "bg-[rgb(34,38,49)]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-right text-[14px] leading-[1.4em] tracking-[-0.02em] font-normal text-[rgb(191,199,212)] ml-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
