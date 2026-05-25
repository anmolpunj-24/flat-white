// components import
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";

export default function PrivacyPolicy() {
  return (
    <div className="flex gap-[100px] h-min px-[124px] py-[92px] max-w-[1440px]">
      <SectionTag
        heading={`/  Important information`}
        bgColor={`#e0e5eb`}
        textColor={`#111`}
        animation={true}
      />
      <div className="flex flex-col gap-[46px]">
        <div className="flex flex-col gap-[32px] w-full h-min">
          <SectionHeading
            fontSize={`74px`}
            color={`#111`}
            letterSpacing={`-0.06em`}
            lineHeight={`1em`}
            text={`Privacy Policy`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`FlatWhite LLC and its members, officers, directors, owners, employees, agents, representatives, suppliers, service providers, and affiliates (“FlatWhite”) provide this website (“Site”) for informational purposes only. Use of and access to the Site, including all information, materials, services, and content (“Content”), is subject to these terms and all applicable laws.`}
          />
        </div>
        <Divider bgColor={`#f0f1f5`} />
        <div className="flex flex-col gap-[32px] w-full h-min">
          <SectionHeading
            fontSize={`32px`}
            color={`#111`}
            letterSpacing={`-0.06em`}
            lineHeight={`1.2em`}
            text={`No Financial Advice`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`Content on this Site is for informational purposes and does not constitute legal, tax, investment, or financial advice. Nothing here is an offer, recommendation, or solicitation to buy or sell any financial instruments. Users are responsible for evaluating risks and making their own decisions; FlatWhite and its affiliates are not liable for outcomes based on the information provided.`}
          />
        </div>
        <Divider bgColor={`#f0f1f5`} />
        <div className="flex flex-col gap-[32px] w-full h-min">
          <SectionHeading
            fontSize={`32px`}
            color={`#111`}
            letterSpacing={`-0.06em`}
            lineHeight={`1.2em`}
            text={`Investment Risk Warning`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`Trading or investing in financial instruments involves significant risk, including the potential loss of your invested capital. Market conditions can change rapidly, and prices may fluctuate due to economic events, political developments, or other factors beyond anyone’s control.`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`Past performance does not guarantee future results, and hypothetical or simulated data may not accurately reflect actual trading outcomes. You should carefully consider your financial situation, investment objectives, and risk tolerance before engaging in any trading or investment activities.`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`FlatWhite does not assume any liability for losses, and users are solely responsible for evaluating the merits and risks associated with their investment decisions.`}
          />
        </div>
        <Divider bgColor={`#f0f1f5`} />
        <div className="flex flex-col gap-[32px] w-full h-min">
          <SectionHeading
            fontSize={`32px`}
            color={`#111`}
            letterSpacing={`-0.06em`}
            lineHeight={`1.2em`}
            text={`Accuracy and Updates`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            text={`All information is provided “as is” and may change without notice. FlatWhite makes no warranty as to completeness or accuracy of the Content.`}
          />
        </div>
      </div>
    </div>
  );
}
