// components import
import CtaButton from "@/components/ctaButton";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

// nextjs import
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="h-min flex flex-col max-w-[1440px] items-center gap-[40px] xl:gap-[96px] w-full pt-[46px] pb-[60px] lg:pb-[124px] px-[12px] lg:px-[40px] xl:px-[124px] m-auto">
      <div className="flex flex-col xl:flex-row justify-between gap-[30px] lg:gap-[60px] xl:gap-[100px] h-min p-0 w-full">
        <SectionTag
          heading={`/ Testimonials`}
          bgColor={`#e0e5eb`}
          textColor={"#111"}
          animation={true}
        />

        <div className="flex flex-col gap-[32px]">
          <SectionHeading
            fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
            color={`#0a0f15`}
            letterSpacing={`tracking-[-0.06em]`}
            lineHeight={`leading-[1em]`}
            text={`Trusted by Growing Businesses`}
          />

          <p className="text-[16px] lg:text-[20px] leading-[1.5] text-[#4b5563] max-w-[620px]">
            Real stories from founders, marketers, and teams who achieved
            measurable growth with FlatWhite.
          </p>

          <div className="flex flex-wrap gap-x-[40px] gap-y-[24px] pt-[8px]">
            <div className="flex flex-col">
              <span className="text-[24px] lg:text-[32px] font-[700] text-[#111]">
                4.9/5
              </span>
              <span className="text-[14px] text-[#6b7280]">Average Rating</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[24px] lg:text-[32px] font-[700] text-[#111]">
                120+
              </span>
              <span className="text-[14px] text-[#6b7280]">Happy Clients</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[24px] lg:text-[32px] font-[700] text-[#111]">
                300+
              </span>
              <span className="text-[14px] text-[#6b7280]">
                Projects Delivered
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[24px]">
        <SectionHeading
          fontSize={`text-[32px] lg:text-[42px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`Featured Success Stories`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="relative bg-[#f0f1f5] rounded-[24px] p-[30px] lg:p-[40px] flex flex-col gap-[24px]"
            >
              <Image
                src={`/assets/quotes.svg`}
                height={50}
                width={50}
                alt="quotes"
                className="absolute right-[10px] top-[-10px] opacity-[0.5]"
              />

              <span className="text-[18px] text-[#f59e0b]">★★★★★</span>

              <p className="text-[20px] lg:text-[24px] font-[500] tracking-[-0.06em] leading-[1.2em] text-[#111]">
                "FlatWhite helped us increase qualified leads by 230% in just
                six months."
              </p>

              <div className="flex items-center gap-[16px] mt-auto">
                <div className="w-[56px] h-[56px] rounded-full bg-[#d9dee5]" />

                <div>
                  <h4 className="font-[600] text-[#111]">Sarah Johnson</h4>
                  <p className="text-[14px] text-[#657084]">
                    Marketing Director, NovaTech
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-[24px]">
        <SectionHeading
          fontSize={`text-[32px] lg:text-[42px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`What Clients Are Saying`}
        />

        <div className="columns-1 md:columns-2 xl:columns-3 gap-[10px] space-y-[20px]">
          {[
            {
              text: "The redesign improved our conversion rates almost immediately.",
              size: "small",
            },
            {
              text: "Working with FlatWhite gave us a clear roadmap for growth and execution. Their team felt like an extension of our own.",
              size: "large",
            },
            {
              text: "Our organic traffic grew by more than 180% within four months.",
              size: "medium",
            },
            {
              text: "Excellent communication, fast delivery, and measurable results.",
              size: "small",
            },
            {
              text: "The entire customer journey was reworked. We now have a much stronger positioning and a website that finally converts.",
              size: "large",
            },
            {
              text: "Highly recommend them to any growing business.",
              size: "small",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`break-inside-avoid bg-[#f0f1f5] rounded-[24px] p-[24px] mb-[20px]
        ${
          item.size === "large"
            ? "xl:min-h-[300px]"
            : item.size === "medium"
              ? "xl:min-h-[220px]"
              : "xl:min-h-[180px]"
        }`}
            >
              <div className="flex flex-col h-full">
                <span className="text-[18px] text-[#f59e0b] mb-[16px]">
                  ★★★★★
                </span>

                <p className="text-[16px] lg:text-[20px] leading-[1.3] tracking-[-0.03em] text-[#111]">
                  "{item.text}"
                </p>

                <div className="mt-auto pt-[24px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#d9dee5]" />

                    <div>
                      <h5 className="font-[600] text-[#111] text-[14px]">
                        Client Name
                      </h5>

                      <p className="text-[13px] text-[#657084]">
                        Founder, Company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#0a0f15] rounded-[30px] px-[24px] sm:px-[40px] lg:px-[80px] py-[60px] lg:py-[90px] flex flex-col items-center text-center gap-[24px]">
        <h3 className="text-[#fff] text-[32px] sm:text-[40px] lg:text-[54px] font-[500] tracking-[-0.04em] leading-[1.05] max-w-[900px]">
          Ready to Become Our Next Success Story?
        </h3>

        <p className="text-[#b8c0cc] text-[16px] lg:text-[20px] leading-[1.6] max-w-[650px]">
          Let's discuss how we can help grow your business with strategies
          tailored to your goals.
        </p>

        <CtaButton
          bgColor="#ffff"
          textColor="#111"
          ctaText={`Book a Discovery Call`}
          padding={`14px 24px`}
          linkTo={`/contact-us`}
        />
      </div>
    </div>
  );
}
