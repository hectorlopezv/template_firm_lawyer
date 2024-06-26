import React from "react";
import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import PABottomContent from "@/components/practice-areas/single/PABottomContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Practice Area - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="FAMILY LAW" image={singlepabanner} />

      <PAContent />

      <CTA
        bgClass="bg-primary-main"
        headline="Obtenga la consulta para las cuestiones legales más complejas."
        buttonLink="#"
        buttonText="Contact Us"
        ctaType="withBg"
        buttonType="dark"
      />

      <PABottomContent />

      <PreFooter />
    </>
  );
};

export default page;
