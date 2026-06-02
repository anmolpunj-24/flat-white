// components import
import CtaButton from "@/components/ctaButton";

// nextjs import
import Link from "next/link";
import Image from "next/image";

// react import
import { useState } from "react";

export default function Header() {
  let ele = ["Home", "About Us", "Services", "Blogs", "Testimonials"];

  const [isOpen, setIsOpen] = useState(false);

  let expandHeader = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-[#fff]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-[10px] px-[20px] py-[20px]">
        <Link href={`/`} className="focus:outline-none">
          <h3 className="flex gap-[162px] min-w-[300px] max-w-[300px] h-min cursor-pointer text-[#0a0f15] text-[28px] leading-[1em] tracking-[-0.06em] font-light">
            FlatWhite.
          </h3>
        </Link>

        {/* desktop */}
        <div className="hidden lg:flex flex-grow items-center justify-between h-min gap-[24px]">
          <div className="flex items-center gap-[24px] w-min h-min">
            {ele.map((el, index) => (
              <Link
                key={index}
                href={
                  el.toLowerCase() === "home"
                    ? "/"
                    : `/${el.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="group flex flex-col w-fit hover:cursor-pointer"
              >
                <p className="whitespace-pre text-[#0a0f15] text-[14px] tracking-[-0.02em] leading-[1.3em]">
                  {el}
                </p>

                <span className="mt-[2px] h-[1px] w-0 bg-[#0a0f15] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="flex gap-[12px] w-min h-min ">
            <CtaButton
              bgColor="#ffff"
              textColor="#111"
              ctaText={`Book a call`}
              padding={`10px 14px`}
            />
            <CtaButton
              bgColor="#111"
              textColor="#ffff"
              ctaText={`Get in touch`}
              padding={`10px 14px`}
              linkTo={`/contact-us`}
            />
          </div>
        </div>

        {/* mobile */}
        <button
          onClick={expandHeader}
          className="relative flex lg:hidden flex-col justify-center items-center gap-[10px] w-[42px] h-[42px]"
        >
          <span
            className={`absolute w-[28px] h-[2px] scale-y-[0.5] bg-[#0a0f15] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute w-[28px] h-[2px] scale-y-[0.5] bg-[#0a0f15] transition-all duration-300 ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
            }`}
          />
        </button>

        {/* mobile menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden lg:hidden z-[99] pb-[42px]
    ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
        >
          <div className="flex flex-col gap-[46px] pt-[60px] items-center">
            <div className="flex flex-col gap-[24px]">
              {ele.map((el, index) => (
                <Link
                  key={index}
                  href={`/${el.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="text-[#0a0f15] text-[18px] leading-[1em] tracking-[-0.04em] font-[500]"
                >
                  {el}
                </Link>
              ))}
            </div>

            <div className="flex gap-[12px] items-center">
              <CtaButton
                bgColor="#f0f1f5"
                textColor="#111"
                ctaText={`Book a call`}
                padding={`14px 18px`}
              />

              <CtaButton
                bgColor="#111"
                textColor="#fff"
                ctaText={`Get in touch`}
                padding={`14px 18px`}
                linkTo={`/contact-us`}
              />
            </div>

            <div className="flex gap-[12px] items-center justify-center">
              {icons.map((ico, index) => (
                <Link
                  href={ico?.link}
                  key={index}
                  className="group flex items-center justify-center rounded-full bg-[#f0f1f5] hover:bg-white transition-all duration-300 h-[52px] w-[52px]"
                >
                  <Image
                    src={ico?.iconDark}
                    alt={ico?.alt}
                    width={22}
                    height={22}
                    className="block group-hover:hidden"
                  />

                  <Image
                    src={ico?.iconLight}
                    alt={ico?.alt}
                    width={22}
                    height={22}
                    className="hidden group-hover:block"
                  />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-[24px] text-center">
              <Link
                href="mailto:contact@flatwhite.com"
                className="text-[#0a0f15] text-[18px]"
              >
                contact@flatwhite.com
              </Link>

              <p className="text-[#747e90] text-[14px] leading-[1.5em] max-w-[240px]">
                FlatWhite Consulting 10 Queen Street, London, UK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
