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

// data import
import homeData from "../../data/home.json"

export default function Home() {
  return (
    <>
      {/* future ready business */}
      <FutureReadyBusiness data={homeData?.banner}/>

      {/* who we are */}
      <WhoWeAre data={homeData?.whoAreWe}/>

      {/* our methods */}
      <OurMethods data={homeData?.ourMethods}/>

      {/* what we offer */}
      <WhatWeOffer />

      {/* our process */}
      <OurProcess />

      {/* our experties */}
      <OurExpertise data={homeData?.ourExpertise}/>

      {/* partnership */}
      <Partnership data={homeData?.reviews}/>

      {/* pricing */}
      {/* <Pricing /> */}

      {/* faq */}
      <Faqs data={homeData?.faqs}/>
    </>
  );
}
