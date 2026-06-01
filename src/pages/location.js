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

  const services = [
    {
      title: "Business Strategy",
      description:
        "Strategic planning, market positioning, competitive analysis and long-term growth roadmaps that help businesses scale sustainably.",
    },
    {
      title: "Operational Excellence",
      description:
        "Process optimization, workflow improvements and performance management systems that increase efficiency and profitability.",
    },
    {
      title: "Digital Transformation",
      description:
        "Technology implementation, workflow automation and digital initiatives designed to modernize business operations.",
    },
    {
      title: "Growth Consulting",
      description:
        "Customer acquisition, revenue growth strategies and market expansion planning to accelerate business performance.",
    },
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
          heading={`/ Business Consulting in Jalandhar`}
          bgColor="#e0e5eb"
          textColor="#111"
        />

        <div className="flex flex-col gap-[24px] max-w-[900px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[56px]"
            color="#111"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Helping Businesses Scale, Optimize & Grow"
          />

          <p className="text-[#657084] text-[18px] leading-[1.8]">
            FlatWhite provides business consulting services in Jalandhar for
            startups, SMEs, family-owned businesses, manufacturers, retailers,
            healthcare providers, educational institutions, and technology
            companies. We help organizations improve operational efficiency,
            increase profitability, streamline business processes, and develop
            scalable growth strategies.
          </p>

          <p className="text-[#657084] text-[18px] leading-[1.8]">
            Our consultants work closely with leadership teams to identify
            growth opportunities, solve operational bottlenecks, implement
            digital transformation initiatives, improve customer acquisition,
            and build sustainable competitive advantages. Every engagement is
            tailored to the business's objectives, industry dynamics, and market
            position.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-[240px_1fr] gap-[60px]">
        <SectionTag
          heading={`/ Industries We Serve`}
          bgColor="#e0e5eb"
          textColor="#111"
        />

        <div className="flex flex-col gap-[32px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[56px]"
            color="#111"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Industry-Specific Consulting Expertise"
          />

          <p className="text-[#657084] text-[18px] leading-[1.8] max-w-[900px]">
            Our consultants work with organizations across manufacturing,
            healthcare, education, retail, hospitality, technology, real estate
            and e-commerce sectors. We understand that every industry faces
            unique operational, competitive and growth challenges, which is why
            our recommendations are customized to each business and market.
          </p>

          <div className="flex flex-wrap gap-[12px]">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-[#f0f1f5] rounded-full px-[20px] py-[12px]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0a0f15] rounded-[24px] p-[40px] lg:p-[60px]">
        <div className="flex flex-col gap-[40px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[56px]"
            color="#fff"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Business Challenges We Help Solve"
          />

          <div className="grid gap-[20px]">
            {[
              {
                challenge: "Stagnant Revenue Growth",
                solution:
                  "Developing growth strategies, market expansion plans and customer acquisition systems.",
              },
              {
                challenge: "Operational Inefficiencies",
                solution:
                  "Optimizing workflows, reducing waste and improving productivity.",
              },
              {
                challenge: "Digital Transformation",
                solution:
                  "Implementing technology, automation and modern business processes.",
              },
              {
                challenge: "Scaling Operations",
                solution:
                  "Building systems, structures and processes that support sustainable growth.",
              },
            ].map((item) => (
              <div
                key={item.challenge}
                className="grid lg:grid-cols-[300px_1fr] gap-[24px] bg-[#151b23] rounded-[20px] p-[28px]"
              >
                <h3 className="text-white text-[22px] font-[500]">
                  {item.challenge}
                </h3>

                <p className="text-[#b8c0cc] leading-[1.7]">{item.solution}</p>
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
          text="Business Consulting Services We Offer"
        />

        <div className="grid md:grid-cols-2 gap-[20px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#f0f1f5] rounded-[20px] p-[32px]"
            >
              <h3 className="text-[24px] font-[600] mb-[12px]">
                {service.title}
              </h3>

              <p className="text-[#657084] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-[240px_1fr] gap-[60px]">
        <SectionTag
          heading={`/ Why FlatWhite`}
          bgColor="#e0e5eb"
          textColor="#111"
        />

        <div className="flex flex-col gap-[32px]">
          <SectionHeading
            fontSize="text-[36px] lg:text-[56px]"
            color="#111"
            letterSpacing="tracking-[-0.06em]"
            lineHeight="leading-[1em]"
            text="Why Businesses Choose FlatWhite"
          />

          <p className="text-[#657084] text-[18px] leading-[1.8]">
            Businesses choose FlatWhite because we combine strategic thinking
            with practical execution. Our consulting engagements focus on
            measurable business outcomes, helping organizations improve
            efficiency, increase profitability and build sustainable growth
            systems.
          </p>

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
