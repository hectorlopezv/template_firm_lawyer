import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PreFooter from "@/components/shared/PreFooter";
import PAList from "@/components/practice-areas/PAList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas De Practica 3 Columns - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <InnerBanner text="Areas De Practica" />

      <HeadlineWithText
        headlineText="Areas De Practica"
        text="En López & Abogados practicamos casi todas las áreas de la vida. Algunos de los más
          Áreas De Práctica notables en las que hemos ayudado a varios de nuestros clientes
          para lograr sus objetivos de acuerdo con las leyes son los siguientes:"
      />

      <PAList layout="3-column" />

      <PreFooter />
    </>
  );
};

export default page;
