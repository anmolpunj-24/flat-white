// reactjs import
import { useEffect, useState, useRef } from "react";

// nextjs import
import { useRouter } from "next/router";

// gsap import
import gsap from "gsap";

export default function Loader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  const textRef = useRef(null);
  const startTimeRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!loading || !textRef.current) return;

    const animations = Array.from(textRef.current.children).map((letter, i) =>
      gsap.to(letter, {
        y: -12,
        duration: 0.4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.08,
      }),
    );

    return () => animations.forEach((a) => a.kill());
  }, [loading]);

  useEffect(() => {
    const handleStart = (url) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      startTimeRef.current = Date.now();

      const formattedName =
        url === "/"
          ? "Home"
          : url
              .replace(/\//g, " ")
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

      setPageName(`Loading ${formattedName}...`);
      setLoading(true);
    };

    const handleComplete = () => {
      const minDuration = 2000; // 2 seconds total
      const elapsedTime = Date.now() - startTimeRef.current;
      const remainingTime = Math.max(0, minDuration - elapsedTime);

      timerRef.current = setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div ref={textRef} className="flex">
        {pageName.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block will-change-transform text-white text-[30px] font-[600] tracking-[-0.04em]"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </div>
  );
}
