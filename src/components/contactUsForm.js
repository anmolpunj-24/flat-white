// components import
import CtaButton from "./ctaButton";
import SectionSmallHeading from "./sectionSmallHeading";

export default function ContactUsForm() {
  return (
    <div className="flex flex-col h-min gap-[32px] max-w-[490px] lg:max-w-[460px]">
      <SectionSmallHeading
        color={`#0a0f15`}
        fontSize={`text-[24px]`}
        lineHeight={`leading-[1.2em]`}
        letterSpacing={`tracking-[-0.06em]`}
        text={`Need assistance or information? \nContact us and we’ll reply as soon as possible.`}
      />

        <form className="w-full space-y-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <label className="flex flex-1 flex-col gap-2">
              <p className="text-[12px] font-[600] text-[#0a0f15] uppercase">
                First Name
              </p>

              <input
                type="text"
                required
                placeholder="First Name"
                className="h-[54px] rounded-[10px] border border-[#e0e5eb] bg-transparent px-4 text-[15px] text-[#0a0f15] outline-none transition-all placeholder:text-[rgba(10,15,21,0.4)] focus:border-black"
              />
            </label>

            <label className="flex flex-1 flex-col gap-2">
              <p className="text-[12px] font-[600] text-[#0a0f15] uppercase">
                Last Name
              </p>

              <input
                type="text"
                required
                placeholder="Last Name"
                className="h-[54px] rounded-[10px] border border-[#e0e5eb] bg-transparent px-4 text-[15px] text-[#0a0f15] outline-none transition-all placeholder:text-[rgba(10,15,21,0.4)] focus:border-black"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <p className="text-[12px] font-[600] text-[#0a0f15] uppercase">
              Email
            </p>

            <input
              type="email"
              required
              placeholder="Email"
              className="h-[54px] rounded-[10px] border border-[#e0e5eb] bg-transparent px-4 text-[15px] text-[#0a0f15] outline-none transition-all placeholder:text-[rgba(10,15,21,0.4)] focus:border-black"
            />
          </label>

          <label className="flex flex-col gap-2">
            <p className="text-[12px] font-[600] text-[#0a0f15] uppercase">
              Message
            </p>

            <textarea
              required
              placeholder="Message"
              rows={3}
              className="min-h-[134px] resize-none rounded-[10px] border border-[#e0e5eb] bg-transparent px-4 py-4 text-[15px] text-[#0a0f15] outline-none transition-all placeholder:text-[rgba(10,15,21,0.4)] focus:border-black"
            />
          </label>

          <label className="flex items-center gap-[16px]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-[4px] border border-[#e0e5eb] accent-[#0a0f15]"
            />

            <p className="text-[12px] text-[#0a0f15] uppercase font-[600]">
              Subscribe to Newsletter
            </p>
          </label>

          <CtaButton
            bgColor={`#111`}
            textColor={`#fff`}
            ctaText={`Get in touch`}
            padding={`18px 24px`}
          />
        </form>
    </div>
  );
}
