import React from "react";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import MemberDetails from "@/components/team/single/MemberDetails";
import Stats from "@/components/team/single/Stats";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import Quote from "@/components/shared/Quote";
import BackgroundAndPA from "@/components/team/single/BackgroundAndPA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Member - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="Robert Darren" image={singleteambanner} />

      <MemberDetails />

      <Stats />

      <CTA
        headline="Obtenga la consulta para las cuestiones legales más complejas."
        buttonText="Conocenos"
        buttonLink="#"
        ctaType="withBg"
        bgClass="bg-primary-main"
        buttonType="dark"
      />

      <BackgroundAndPA />

      <Quote
        text="I was struggling to get my legal issues sorted out before i met
              Mr. John at Lopez & Abogados. I was amazed by his attitude and attention to
              detail and he sorted my case in no time understanding what i need
              to get done. Thankyou Mr. John."
        bgClass="bg-primary-main"
        textClass="text-white"
      />

      <PreFooter />
    </>
  );
};

export default page;
