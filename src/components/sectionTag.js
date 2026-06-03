// reactjs import
import { useEffect, useRef } from "react";

// gsap import
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SectionTag({
  heading,
  bgColor,
  textColor, 
  animation = false,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const mySplitText = new SplitText(headingRef.current, { type: "chars" });

    gsap.from(mySplitText.chars, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      opacity: 0,
      x: 50,
      stagger: 0.05,
      ease: "power3.inOut",
    });

    return () => {
      mySplitText.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {animation === true ? (
        <div
          ref={headingRef}
          className="whitespace-pre px-[12px] py-[8px] uppercase bg-[bgColor] rounded-[99px] h-min w-min text-[12px] leading-none font-[600]"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {heading}
        </div>
      ) : (
        <div
          className="whitespace-pre px-[12px] py-[8px] uppercase bg-[bgColor] rounded-[99px] h-min w-min text-[12px] leading-none font-[600]"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {heading}
        </div>
      )}
    </>
  );
}
