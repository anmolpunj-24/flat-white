// components import
import SectionHeading from "@/components/sectionHeading";
import BlogsCard from "@/components/blogsCard";

export default function Blogs() {
  return (
    <div className="w-full flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[100px] h-min px-[20px] lg:px-[40px] xl:px-[124px] pt-[40px] lg:pt-[92px] xl:pt-[92px] pb-[60px] lg:pb-[92px] xl:pb-[92px] max-w-[1440px] mx-auto">
      <SectionHeading
        fontSize={`text-[48px] lg:text-[64px] xl:text-[74px]`}
        color={`#111`}
        letterSpacing={`tracking-[-0.06em]`}
        lineHeight={`leading-[1em]`}
        text={`Flat-White Blogs`}
      />
      <div className="flex flex-wrap gap-[10px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogsCard key={index} />
        ))}
      </div>

      <div className="flex mx-auto bg-[#111] text-[#fff] px-[28px] py-[16px] rounded-[99px] text-[18px] w-min whitespace-nowrap">Load More Blogs</div>
    </div>
  );
}
