// components import
import CtaButton from "@/components/ctaButton";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

// nextjs import
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  let icons = [
    {
      iconLight: "/assets/email-light.svg",
      iconDark: "/assets/email-dark.svg",
      alt: "mail",
      link: `mailto:contact@flatwhite.com`,
    },
    {
      iconLight: "/assets/insta-light.svg",
      iconDark: "/assets/insta-dark.svg",
      alt: "instagram",
      link: `https://www.instagram.com`,
    },
    {
      iconLight: "/assets/linkedin-light.svg",
      iconDark: "/assets/linkedin-dark.svg",
      alt: "linkedin",
      link: `https://www.linkedin.com`,
    },
    {
      iconLight: "/assets/slack-light.svg",
      iconDark: "/assets/slack-dark.svg",
      alt: "slack",
      link: `https://slack.com`,
    },
  ];

  let backToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-min items-center bg-[#0a0f15] rounded-tl-[12px] rounded-tr-[12px] w-full">
      <div className="flex flex-col gap-[60px] lg:gap-[164px] pt-[60px] lg:pt-[164px] px-[20px] lg:px-[40px] xl:px-[124px] pb-[40px] lg:pb-[52px] max-w-[1440px] w-full items-center">
        <div className="max-w-[590px] flex flex-col gap-[32px] h-min items-center">
          <SectionHeading
            fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
            color={`#fff`}
            letterSpacing={`tracking-[-0.06em]`}
            lineHeight={`leading-[1em]`}
            text={`Unlock growth with strategic insights`}
            align={`center`}
          />
          <SectionSmallHeading
            color={`#bfc7d4`}
            fontSize={`16px`}
            lineHeight={`leading-[1.4em]`}
            letterSpacing={`tracking-[-0.02em]`}
            align={`center`}
            text={`Learn how systematic methods can support better portfolio outcomes.`}
            maxWidth={`max-w-[390px]`}
          />

          <form className="max-w-[340px] w-full relative">
            <div className="flex items-center border border-[#E0E5EB] rounded-full h-[56px]">
              <input
                type="email"
                required
                name="Email Address"
                placeholder="Email Address"
                className="w-full bg-transparent text-white placeholder:text-[rgba(214,217,226,0.8)] outline-none py-[18px] pl-[24px] pr-[120px]"
              />
            </div>

            <div className="absolute right-[3px] top-[3px] bottom-[4px]">
              <CtaButton
                bgColor={`#fff`}
                textColor={`#111`}
                ctaText={`Subscribe`}
                padding={`14px 16px`}
              />
            </div>

            {/* Hidden Honeypot Inputs */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />

            <input
              type="text"
              name="message"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />
          </form>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between gap-[60px] lg:gap-[10px]">
          <div className="flex flex-col lg:flex-row gap-x-[70px] gap-y-[40px] lg:gap-[12px] lg:max-w-[390px] lg:min-w-[390px] h-min lg:justify-between">
            <div className="flex flex-col gap-[18px] lg:gap-[24px] h-min items-center lg:items-start">
              <p className="text-[12px] uppercase font-[600] leadin-[1em] text-[#747e90]">
                Company
              </p>

              <div className="flex flex-col gap-[12px] items-center lg:items-start">
                {["About Us", "Services", "Blogs", "Testimonials", "Case Studies", "location"].map(
                  (item, index) => (
                    <Link
                      key={index}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex flex-col w-fit"
                    >
                      <p className="text-white text-[14px] leading-[1.3em] tracking-[-0.02em]">
                        {item}
                      </p>

                      <span className="mt-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[18px] lg:gap-[24px] h-min items-center lg:items-start">
              <p className="text-[12px] uppercase font-[600] leadin-[1em] text-[#747e90]">
                Contact
              </p>

              <div className="flex flex-col gap-[12px] items-center lg:items-start">
                <p className="whitespace-pre text-white text-[14px] leading-[1.3em] tracking-[-0.02em] text-center lg:text-start">
                  FlatWhite Consulting{"\n"}
                  10 Queen Street, London, UK
                </p>

                <Link
                  href="mailto:contact@flatwhite.com"
                  className="group w-fit"
                >
                  <p className="text-white text-[14px] leading-[1.3em] tracking-[-0.02em]">
                    contact@flatwhite.com
                  </p>

                  <span className="mt-[2px] block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-col lg:justify-between gap-[24px] lg:gap-0 flex-col-reverse">
            <button
              className="group flex justify-center lg:justify-end items-center gap-[10px] cursor-pointer"
              onClick={backToTop}
            >
              <div className="relative overflow-hidden">
                <p className="transition-transform duration-300 group-hover:-translate-y-full whitespace-pre text-white text-[14px] leading-[1.3em] tracking-[-0.02em]">
                  Back to Top
                </p>

                <p className="absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-pre text-white text-[14px] leading-[1.3em] tracking-[-0.02em]">
                  Back to Top
                </p>
              </div>

              <div className="text-white flex items-center justify-center">
                ↑
              </div>
            </button>

            <div className="flex gap-[12px] items-center justify-center">
              {icons.map((ico, index) => (
                <Link
                  href={ico?.link}
                  key={index}
                  className="group rounded-[999px] flex justify-center bg-[#ffffff0a] hover:bg-white cursor-pointer transition-all duration-300 h-[52px] w-[52px]"
                >
                  <Image
                    src={ico?.iconLight}
                    alt={ico?.alt}
                    height={22}
                    width={22}
                    className="block group-hover:hidden"
                  />

                  <Image
                    src={ico?.iconDark}
                    alt={ico?.alt}
                    height={22}
                    width={22}
                    className="hidden group-hover:block"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider bgColor={`#ffffff1a`} />

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-[24px] lg:gap-[10px] w-full h-min py-[40px] lg:py-[46px] px-[20px] lg:px-[124px] text-[#747e90] text-[12px] leading-[1em] font-[600]">
        <p className="uppercase">
          © 2025 FlatWhite by{" "}
          <Link
            href={`https://ditych.com`}
            className="text-[#fff] cursor-pointer hover:text-[#9199a9]"
          >
            ditych
          </Link>{" "}
          . All rights reserved.
        </p>
        <Link
          href={`/privacy-policy`}
          className="whitespace-pre h-min w-min text-[#fff] text-[14px] leading-[1.3em] tracking-[-0.02em] cursor-pointer"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
