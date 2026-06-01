// components import
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";
import CtaButton from "@/components/ctaButton";

export default function Location() {
  const industries = [
    "Manufacturing",
    "Healthcare",
    "Education",
    "Retail",
    "Hospitality",
    "Real Estate",
    "Technology",
    "E-Commerce",
  ];

  const challenges = [
    "Generating qualified leads",
    "Building a strong online presence",
    "Scaling operations efficiently",
    "Standing out from competitors",
    "Improving conversion rates",
    "Creating sustainable growth",
  ];

  const areas = [
    "Model Town",
    "Urban Estate",
    "Civil Lines",
    "GTB Nagar",
    "Ladowali Road",
    "Football Chowk",
    "Maqsudan",
    "Rama Mandi",
  ];

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full px-[20px] lg:px-[40px] xl:px-[124px] pt-[40px] lg:pt-[100px] pb-[80px] gap-[40px] lg:gap-[70px]">
      <div className="flex flex-col gap-[32px] max-w-[900px]">
        <SectionTag
          heading={`/ Jalandhar`}
          bgColor="#e0e5eb"
          textColor="#111"
        />

        <SectionHeading
          fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
          color="#111"
          letterSpacing="tracking-[-0.06em]"
          lineHeight="leading-[1em]"
          text="Business Consulting Services in Jalandhar"
        />

        <p className="text-[18px] lg:text-[22px] text-[#657084] max-w-[760px] leading-[1.6]">
          Helping businesses across Jalandhar grow through strategy, innovation,
          operational excellence and digital transformation.
        </p>

        <div className="flex flex-wrap gap-[16px]">
          <CtaButton
            bgColor="#111"
            textColor="#fff"
            ctaText="Book a Discovery Call"
            linkTo="/contact-us"
            padding={`18px 24px`}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-[20px]">
        {[
          ["120+", "Businesses Supported"],
          ["300+", "Projects Delivered"],
          ["4.9/5", "Average Client Rating"],
        ].map(([value, label]) => (
          <div key={label} className="bg-[#f0f1f5] rounded-[20px] p-[32px]">
            <h3 className="text-[40px] font-[600] tracking-[-0.05em]">
              {value}
            </h3>
            <p className="text-[#657084]">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-[240px_1fr] gap-[60px]">
        <SectionTag
          heading={`/ Why FlatWhite`}
          bgColor="#e0e5eb"
          textColor="#111"
        />

        <div className="grid md:grid-cols-2 gap-[20px]">
          {[
            "Deep understanding of local markets",
            "Data-driven business decisions",
            "Growth-focused strategies",
            "Measurable business outcomes",
          ].map((item) => (
            <div key={item} className="bg-[#f0f1f5] rounded-[20px] p-[28px]">
              <h3 className="text-[22px] font-[500] tracking-[-0.04em]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[40px]">
        <SectionHeading
          fontSize="text-[36px] lg:text-[56px]"
          color="#111"
          letterSpacing="tracking-[-0.06em]"
          lineHeight="leading-[1em]"
          text="Industries We Support in Jalandhar"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-[#f0f1f5] rounded-[16px] p-[24px]"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0a0f15] rounded-[24px] p-[40px] lg:p-[60px]">
        <div className="flex flex-col gap-[40px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[56px]"
            color="#fff"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Common Growth Challenges for Businesses in Jalandhar"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {challenges.map((challenge) => (
              <div
                key={challenge}
                className="bg-[#151b23] rounded-[16px] p-[24px]"
              >
                <p className="text-[#b8c0cc]">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px]">
        <SectionHeading
          fontSize="text-[36px] lg:text-[56px]"
          color="#111"
          letterSpacing="tracking-[-0.06em]"
          lineHeight="leading-[1em]"
          text="Services We Offer"
        />

        <div className="grid md:grid-cols-2 gap-[20px]">
          {[
            "Business Strategy",
            "Operational Excellence",
            "Digital Transformation",
            "Growth Consulting",
          ].map((service) => (
            <div key={service} className="bg-[#f0f1f5] rounded-[20px] p-[32px]">
              <h3 className="text-[24px] font-[500]">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[32px]">
        <SectionHeading
          fontSize="text-[36px] lg:text-[56px]"
          color="#111"
          letterSpacing="tracking-[-0.06em]"
          lineHeight="leading-[1em]"
          text="Serving Businesses Across Jalandhar"
        />

        <div className="flex flex-wrap gap-[12px]">
          {areas.map((area) => (
            <span
              key={area}
              className="px-[18px] py-[12px] bg-[#f0f1f5] rounded-full"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#0a0f15] rounded-[24px] p-[40px] lg:p-[80px] text-center">
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-[24px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[64px]"
            color="#fff"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Ready to grow your business in Jalandhar?"
          />

          <p className="text-[#b8c0cc] text-[18px] max-w-[620px]">
            Let's identify your biggest opportunities and create a strategy that
            delivers measurable business growth.
          </p>

          <CtaButton
            bgColor="#fff"
            textColor="#111"
            ctaText="Book a Discovery Call"
            linkTo="/contact-us"
            padding={`18px 24px`}
          />
        </div>
      </div>
    </div>
  );
}
