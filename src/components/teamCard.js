// nextjs import
import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="p-[32px] flex flex-col justify-between rounded-[12px] h-full w-full bg-[#ffffff0a] min-h-[500px]">
      <div className="flex h-min gap-[12px] pb-[42px] items-center justify-between">
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
            <span className="group rounded-[99px] p-[8px] bg-[#222631] hover:bg-white cursor-pointer transition-all duration-300">
              <Image
                src="/assets/linkedin.svg"
                alt="linkedin"
                height={13}
                width={15}
                className="block group-hover:hidden"
              />

              <Image
                src="/assets/linkedin-dark.svg"
                alt="linkedin"
                height={13}
                width={15}
                className="hidden group-hover:block"
              />
            </span>
          </div>
        </div>
        <div className="rounded-[12px] cursor-pointer">
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
        strategy and business transformation. She specializes in guiding global
        companies through complex change and scaling growth initiatives.
      </p>
    </div>
  );
}
