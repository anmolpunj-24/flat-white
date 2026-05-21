export default function CardWithTagsAndText() {
  return (
    <div className="flex flex-col bg-[#f0f1f5] gap-[12px] p-[32px] rounded-[12px] h-min">
      <div className="text-[12px] uppercase bg-[#fff] rounded-[99px] px-[12px] py-[6px] w-min h-min font-medium">
        Strategy
      </div>
      <h5 className="whitespace-pre-wrap break-words text-[#0a0f15] text-[24px] tracking-[-0.04em] leading-[1.2em]">
        Developing long-term plans that drive sustainable growth
      </h5>
      <p className="text-[#657084] whitespace-pre-wrap break-words text-[16px] leading-[1.4em]">
        We help companies define clear goals and create actionable roadmaps for
        success
      </p>
    </div>
  );
}
