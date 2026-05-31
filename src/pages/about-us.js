// components import
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";
import TeamCard from "@/components/teamCard";

export default function AboutUs() {
  return (
    <div className="px-[30px]">
      <div className="flex flex-col z-10 bg-[#0a0f15] -mt-[8px] rounded-bl-[12px] rounded-br-[12px] mb-[2rem] max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col xl:flex-row gap-[40px] lg:gap-[100px] xl:gap-[40px] h-min pt-[60px] lg:pt-[92px] px-[20px] lg:px-[40px] xl:px-[124px] pb-[32px] lg:pb-[46px] justify-between">
          <SectionTag
            heading={`/  Our experts`}
            bgColor={`#222631`}
            textColor={"#fff"}
            animation={true}
          />

          <SectionHeading
            fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
            color={`#fff`}
            letterSpacing={`tracking-[-0.06em]`}
            lineHeight={`leading-[1em]`}
            text={`The team driving strategy, innovation and growth`}
            maxWidth={`max-w-[720px]`}
          />
        </div>
        <Divider bgColor={`#222631`} />
        <div className="flex flex-col lg:grid lg:grid-cols-[repeat(2,minmax(200px,1fr))] justify-center gap-[4px] h-min px-[20px] pt-[32px] pb-[20px] lg:px-[40px] xl:px-[124px] py-[92px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TeamCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
