// reactjs import
import { useEffect, useState } from "react";

// nextjs import
import { useRouter } from "next/router";
import { useRef } from "react";

// gsap import
import gsap from "gsap";

export default function Loader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  const textRef = useRef(null);

  useEffect(() => {
    if (!loading || !textRef.current) return;

    const letters = textRef.current.children;

    const animations = Array.from(letters).map((letter) =>
      gsap.to(letter, {
        y: -12,
        duration: 0.45,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }),
    );

    return () => {
      animations.forEach((animation) => animation.kill());
    };
  }, [loading]);

  useEffect(() => {
    const handleStart = (url) => {
      const formattedName =
        url === "/"
          ? "Home"
          : url
              .replace("/", "")
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

      setPageName(`Loading ${formattedName}...`);
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
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
