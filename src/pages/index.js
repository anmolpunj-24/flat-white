// components import
import OurExpertise from "@/mainComponents/ourExpertise";
import OurMethods from "@/mainComponents/ourMethods";
import Partnership from "@/mainComponents/partnership";
import Pricing from "@/mainComponents/pricing";
import WhatWeOffer from "@/mainComponents/whatWeOffer";

export default function Home() {
  return (
    <>
      {/* our methods */}
      <OurMethods />

      {/* what we offer */}
      <WhatWeOffer />

      {/* our experties */}
      <OurExpertise />

      {/* partnership */}
      <Partnership />

      {/* pricing */}
      <Pricing />
    </>
  );
}
