import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function OurProcess() {
  return (
    <div className="px-[12px]">
      <div className="bg-[#657084] flex flex-col h-min max-w-[1416px] pt-[164px] px-[112px] gap-[80px] rounded-[12px]">
        <div className="flex flex-col gap-[146px]">
          <SectionTag
            heading={`/  Our process`}
            bgColor={`#747e90`}
            textColor={`#fff`}
            animation={true}
          />
          <SectionHeading
            fontSize={`64px`}
            color={`#fff`}
            letterSpacing={`-0.06em`}
            lineHeight={`1em`}
            text={`How we transform strategy, insights and expertise into measurable business outcomes`}
          />
        </div>

        <div className="relative h-full w-full max-w-[940px]">
          <Divider bgColor={`#ffffff1a`} />

          <svg
            viewBox="0 0 1199 1434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M232.488 0C232.488 46.2989 269.981 83.8525 316.279 83.9273L975.782 84.9935C1099.37 85.1932 1199.11 186.067 1197.91 309.646C1196.73 431.828 1097.32 530.197 975.135 529.997C856.628 529.803 711.976 529.566 598.349 529.38C480.719 529.188 329.837 528.941 209.135 528.744C94.1047 528.555 0.731262 621.631 0.50032 736.661C0.269118 851.82 93.5111 945.323 208.671 945.415L861.46 945.931C970.456 946.018 1058.77 1034.4 1058.77 1143.4C1058.77 1252.98 969.54 1341.6 859.96 1340.86L628.689 1339.28C576.127 1338.93 533.326 1381.44 533.326 1434"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          </svg>

          <svg
            viewBox="0 0 1199 1434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-auto"
          >
            <path
              d="M232.488 0C232.488 46.2989 269.981 83.8525 316.279 83.9273L975.782 84.9935C1099.37 85.1932 1199.11 186.067 1197.91 309.646C1196.73 431.828 1097.32 530.197 975.135 529.997C856.628 529.803 711.976 529.566 598.349 529.38C480.719 529.188 329.837 528.941 209.135 528.744C94.1047 528.555 0.731262 621.631 0.50032 736.661C0.269118 851.82 93.5111 945.323 208.671 945.415L861.46 945.931C970.456 946.018 1058.77 1034.4 1058.77 1143.4C1058.77 1252.98 969.54 1341.6 859.96 1340.86L628.689 1339.28C576.127 1338.93 533.326 1381.44 533.326 1434"
              stroke="rgb(255, 255, 255)"
              strokeWidth="1"
              style={{
                strokeDasharray: "4566.18, 4566.18",
                strokeDashoffset: "4054.28",
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
