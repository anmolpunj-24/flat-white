// components import
import Faqs from "@/mainComponents/faqs";
import FutureReadyBusiness from "@/mainComponents/futureReadyBusiness";
import OurExpertise from "@/mainComponents/ourExpertise";
import OurMethods from "@/mainComponents/ourMethods";
import OurProcess from "@/mainComponents/ourProcess";
import Partnership from "@/mainComponents/partnership";
import Pricing from "@/mainComponents/pricing";
import WhatWeOffer from "@/mainComponents/whatWeOffer";
import WhoWeAre from "@/mainComponents/whoWeAre";

export default function Home() {
  return (
    <>
      {/* future ready business */}
      <FutureReadyBusiness />

      {/* who we are */}
      <WhoWeAre />

      {/* our methods */}
      <OurMethods />

      {/* what we offer */}
      <WhatWeOffer />

      {/* our process */}
      <OurProcess />

      {/* our experties */}
      <OurExpertise />

      {/* partnership */}
      <Partnership />

      {/* pricing */}
      {/* <Pricing /> */}

      {/* faq */}
      <Faqs />
    </>
  );
}
