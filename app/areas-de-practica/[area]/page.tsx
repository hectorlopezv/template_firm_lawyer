import React from "react";
import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import PABottomContent from "@/components/practice-areas/single/PABottomContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Practice Area - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};

const page = ({params}:any) => {
  const {area} = params;
  const practiceText = {
    "derecho-laboral": "Derecho Laboral",
    "pensiones": "Pensiones",
    "seguridad-social": "Seguridad Social",
  }
  return (
    <>
      <InnerBanner text={practiceText[area] as any} image={singlepabanner} />

      <PAContent area={area as any}/>

      <CTA
        bgClass="bg-primary-main"
        headline="Obtenga la consulta para las cuestiones legales más complejas."
        buttonLink="/quienes-somos"
        buttonText="Conocenos"
        ctaType="withBg"
        buttonType="dark"
      />

      <PABottomContent area={area as any} />

      <PreFooter />
    </>
  );
};

export default page;
