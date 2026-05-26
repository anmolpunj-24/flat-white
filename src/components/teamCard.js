// nextjs import
import Image from "next/image";

// react import
import { useState } from "react";

export default function TeamCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-[1px] flex items-center justify-center p-[24px]"
        >
          <div
            className="relative max-w-[500px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/assets/woman.webp"
              alt="expanded image"
              width={500}
              height={500}
              className="w-full h-auto rounded-[12px] object-cover"
            />
          </div>
        </div>
      )}

      <div className="p-[32px] flex flex-col lg:justify-between rounded-[12px] h-full w-full bg-[#ffffff0a] lg:min-h-[500px]">
        <div className="flex flex-col flex-col-reverse sm:flex-row h-min gap-[12px] pb-[42px] items-start sm:items-center justify-between">
          <div className="items-center gap-[10px]">
            <h4 className="text-[32px] text-white tracking-[-0.06em]">
              Emma Carter
            </h4>
            <div className="flex gap-[8px]">
              <p className="uppercase text-[12px] rounded-[99px] px-[12px] py-[6px] bg-[#222631] w-min h-min text-white whitespace-pre font-[600]">
                Managing Partner
              </p>
              <p className="uppercase text-[12px] rounded-[99px] px-[12px] py-[6px] bg-[#222631] w-min h-min text-white whitespace-pre font-[600]">
                London
              </p>
              <span className="group rounded-[99px] p-[7px] bg-[#222631] hover:bg-white cursor-pointer transition-all duration-300">
                <Image
                  src="/assets/linkedin-light.svg"
                  alt="linkedin"
                  height={12}
                  width={15}
                  className="block group-hover:hidden"
                />

                <Image
                  src="/assets/linkedin-dark.svg"
                  alt="linkedin"
                  height={12}
                  width={15}
                  className="hidden group-hover:block"
                />
              </span>
            </div>
          </div>
          <div
            className="rounded-[12px] cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            <Image
              className="object-cover rounded-[12px]"
              src={`/assets/woman.webp`}
              height={100}
              width={100}
              alt="image"
            />
          </div>
        </div>
        <p className="text-[16px] leading-[1.4em] tracking-[-0.02em] whitespace-pre-wrap break-words text-[#ffffffcc]">
          Emma leads FlatWhite with over 15 years of experience in corporate
          strategy and business transformation. She specializes in guiding
          global companies through complex change and scaling growth
          initiatives.
        </p>
      </div>
    </>
  );
}
