import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import TeamMembers from "@/components/who-we-are/TeamMembers";
import TopText from "@/components/who-we-are/TopText";
import CTA from "@/components/shared/CTA";
import WeAreBest from "@/components/who-we-are/WeAreBest";
import WhyChooseUs from "@/components/who-we-are/WhyChooseUs";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUIENES SOMOS - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <InnerBanner text="QUIENES SOMOS" />
      <TopText />
      <TeamMembers />
      <CTA
        bgClass="bg-primary-main"
        headline="Obtenga la consulta para las cuestiones legales más complejas."
        buttonLink="#"
        buttonText="Conocenos"
        ctaType="withBg"
        buttonType="dark"
      />
      <WhyChooseUs />
      <WeAreBest />
      <PreFooter />
    </>
  );
};

export default page;
