import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import FAQsList from "@/components/FAQs/FAQsList";
import FAQsAccordion from "@/components/FAQs/FAQsAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Lopez & Abogados",
  description: "Su solución integral para asuntos legales",
};

const Page = () => {
  return (
    <>
      <InnerBanner text="Dudas Sobre Tu Caso" />

      <FAQsAccordion />

      <FAQsList headline="Preguntas frecuentes" separator />

      {/* <FAQsList headline="FAQs Style 2" columns={2} bgType="white" /> */}

      <PreFooter />
    </>
  );
};

export default Page;
