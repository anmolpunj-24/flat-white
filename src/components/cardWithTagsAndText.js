export default function CardWithTagsAndText({ expertise }) {
  return (
    <div className="flex flex-col bg-[#f0f1f5] gap-[12px] p-[24px] lg:p-[32px] rounded-[12px]">
      <div className="text-[12px] uppercase bg-[#fff] rounded-[99px] px-[12px] py-[6px] h-min font-[600] max-w-max">
        {expertise?.category}
      </div>
      <h5 className="whitespace-pre-wrap break-words text-[#0a0f15] text-[24px] tracking-[-0.06em] leading-[1.2em]">
        {expertise?.title}
      </h5>
      <p className="text-[#657084] whitespace-pre-wrap break-words text-[16px] leading-[1.4em] tracking-[-0.02em]">
        {expertise?.smallHeading}
      </p>
    </div>
  );
}
