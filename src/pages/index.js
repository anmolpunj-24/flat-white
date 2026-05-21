// components import
import Faqs from "@/mainComponents/faqs";
import Footer from "@/mainComponents/footer";
import Header from "@/mainComponents/header";
import OurExpertise from "@/mainComponents/ourExpertise";
import OurMethods from "@/mainComponents/ourMethods";
import Partnership from "@/mainComponents/partnership";
import Pricing from "@/mainComponents/pricing";
import WhatWeOffer from "@/mainComponents/whatWeOffer";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />

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

      {/* faq */}
      <Faqs />

      {/* footer */}
      <Footer />
    </>
  );
}
