// components import
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

export default function ServiceDetail() {
  const tiles = [
    {
      title: "Strategy",
      points: [
        "Market positioning",
        "Growth planning",
        "Competitive analysis",
        "Business consulting",
      ],
    },
    {
      title: "Operations",
      points: [
        "Workflow optimization",
        "Team alignment",
        "Process automation",
        "Performance tracking",
      ],
    },
    {
      title: "Technology",
      points: [
        "Custom software",
        "AI integrations",
        "Cloud infrastructure",
        "System architecture",
      ],
    },
    {
      title: "Design",
      points: [
        "UI/UX systems",
        "Brand direction",
        "Product experiences",
        "Motion design",
      ],
    },
    {
      title: "Marketing",
      points: [
        "SEO optimization",
        "Paid campaigns",
        "Content strategy",
        "Analytics setup",
      ],
    },
    {
      title: "Support",
      points: [
        "Maintenance",
        "Training sessions",
        "Technical support",
        "Reporting",
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[20px] h-min px-[20px] lg:px-[40px] xl:px-[100px] pt-[40px] lg:pt-[80px] xl:pt-[80px] pb-[60px] lg:pb-[80px] xl:pb-[80px]">
        <SectionHeading
          fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`This is the service title`}
        />
        <SectionSmallHeading
          color={`#bfc7d4`}
          fontSize={`text-[16px]`}
          lineHeight={`leading-[1.4em]`}
          letterSpacing={`tracking-[-0.02em]`}
          text={`FlatWhite partners with leadership teams to redefine strategy, streamline operations and unlock sustainable growth. We translate ambition into an actionable roadmap using data, technology and close collaboration.`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px] px-[20px] lg:px-[40px] xl:px-[100px] pb-[80px]">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="rounded-[24px] bg-[#f5f7fa] border border-[#d9dee7] p-[28px] flex flex-col gap-[24px]"
          >
            <h3 className="text-[24px] tracking-[-0.04em] leading-[1em] font-[600] text-[#111]">
              {tile?.title}
            </h3>

            <ul className="flex flex-col gap-[14px]">
              {tile.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[10px] text-[15px] leading-[1.4em] text-[#5f6b7a]"
                >
                  <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#111] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
