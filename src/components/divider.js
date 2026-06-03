// reactjs import
import { useEffect, useRef } from "react";

// gsap import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Divider({ bgColor }) {
  const lineRef = useRef();

  useEffect(() => {
    gsap.from(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      duration: 4,
      x: 10,
      scaleX: 0,
      opacity: 0.2,
      transformOrigin: "left center",
      ease: "power3.out",
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={lineRef}
      style={{ backgroundColor: bgColor }}
      className="w-full h-[1.2px] relative overflow-hidden rounded-[26px]"
    ></div>
  );
}
