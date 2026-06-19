// components import
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";
import TeamCard from "@/components/teamCard";

// react import
import { useEffect } from "react";

// team data import
import teams from "../../data/team.json";

// gsap import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "FlatWhite was founded with a mission to help businesses grow through strategy and execution.",
    },
    {
      year: "2021",
      title: "First Major Milestone",
      description: "Partnered with over 50 clients across multiple industries.",
    },
    {
      year: "2023",
      title: "Expanding Services",
      description:
        "Added branding, web experiences, and performance marketing solutions.",
    },
    {
      year: "2025",
      title: "Driving Impact",
      description:
        "Delivered 300+ projects and helped clients achieve measurable growth.",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".timeline-card");
    const dots = gsap.utils.toArray(".timeline-dot");

    const isLg = window.innerWidth >= 1024;

    cards.forEach((card, index) => {
      const direction = isLg ? (index % 2 === 0 ? -70 : 70) : 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(dots[index], {
        scale: 0,
        duration: 0.35,
        ease: "back.out(3)",
      }).fromTo(
        card,
        {
          x: 0,
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          x: direction,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
        },
        "-=0.1",
      );
    });

    gsap.fromTo(
      ".timeline-line",
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 90%",
          end: "bottom bottom",
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="px-[20px] lg:px-[40px] xl:px-[124px] py-[20px] lg:py-[80px]">
        <div className="grid xl:grid-cols-[240px_1fr] gap-[60px]">
          <SectionTag
            heading={`/  Who We Are`}
            bgColor="#e0e5eb"
            textColor="#111"
          />

          <div className="flex flex-col gap-[24px]">
            <SectionHeading
              fontSize="text-[36px] lg:text-[56px]"
              color="#111"
              letterSpacing="tracking-[-0.06em]"
              lineHeight="leading-[1em]"
              text="Building businesses that outperform expectations."
            />

            <p className="text-[18px] leading-[1.7] text-[#657084] max-w-[760px]">
              FlatWhite partners with ambitious companies to create growth
              strategies, strengthen brands, and build digital experiences that
              deliver measurable business outcomes.
            </p>

            <p className="text-[18px] leading-[1.7] text-[#657084] max-w-[760px]">
              We believe that great work starts with understanding the business
              behind it. That's why every engagement begins with insight and
              ends with impact.
            </p>
          </div>
        </div>
      </div>
      <div className="px-[20px] lg:px-[40px] xl:px-[124px] pb-[60px] lg:pb-[100px]">
        <div className="flex flex-col gap-[60px] lg:gap-[80px]">
          <div className="flex flex-col items-center gap-[16px]">
            <SectionTag
              heading={`/ Our Journey`}
              bgColor="#e0e5eb"
              textColor="#111"
            />

            <SectionHeading
              fontSize="text-[36px] lg:text-[56px]"
              color="#111"
              letterSpacing="tracking-[-0.06em]"
              lineHeight="leading-[1em]"
              text="From ideas to impact."
            />
          </div>

          <div className="timeline-wrapper relative lg:max-w-[1000px] mx-auto">
            <div className="hidden lg:block timeline-line absolute lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#d9dee5] -translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-[10px] lg:mb-[60px] ${
                  index % 2 === 0
                    ? "justify-center lg:justify-start"
                    : "justify-center lg:justify-end"
                }`}
              >
                <div className="hidden lg:block timeline-dot absolute left-1/2 w-[16px] h-[16px] bg-[#111] rounded-full -translate-x-1/2 z-10" />

                <div
                  className={`timeline-card w-full lg:w-[calc(50%-40px)] bg-[#f0f1f5] rounded-[20px] p-[24px] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <span className="text-[14px] font-[600] text-[#657084]">
                    {item.year}
                  </span>

                  <h3 className="text-[24px] font-[600] tracking-[-0.04em] mt-[8px]">
                    {item.title}
                  </h3>

                  <p className="text-[#657084] mt-[12px] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[20px] bg-[#f0f1f5] rounded-[24px] p-[32px] lg:p-[40px]">
              <span className="text-[14px] font-[600] uppercase tracking-[0.08em] text-[#657084]">
                Our Mission
              </span>

              <h3 className="text-[28px] lg:text-[36px] font-[500] tracking-[-0.06em] leading-[1em] text-[#111]">
                Helping businesses grow with clarity and confidence.
              </h3>

              <p className="text-[17px] leading-[1.3em] text-[#657084]">
                Our mission is to provide businesses with the strategy,
                insights, and execution they need to unlock growth, strengthen
                their brand, and achieve measurable success.
              </p>
            </div>

            <div className="flex flex-col bg-[#0a0f15] rounded-[24px] p-[32px] lg:p-[40px] gap-[20px]">
              <span className="text-[14px] font-[600] uppercase tracking-[0.08em] text-[#8e99ab]">
                Our Vision
              </span>

              <h3 className="text-[28px] lg:text-[36px] font-[500] tracking-[-0.06m] leading-[1em] text-[#fff]">
                Becoming the trusted growth partner for ambitious brands.
              </h3>

              <p className="text-[17px] leading-[1.3em] text-[#b8c0cc]">
                We envision a future where every business has access to the
                expertise, strategy, and innovation required to compete, scale,
                and create lasting impact in their industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px]">
        <div className="flex flex-col z-10 bg-[#0a0f15] rounded-[12px] mb-[2rem]">
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
            {teams.ourTeam.map((item, index) => (
              <TeamCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
