import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import MemberDetails from "@/components/team/single/MemberDetails";
import Stats from "@/components/team/single/Stats";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import Quote from "@/components/shared/Quote";
import BackgroundAndPA from "@/components/team/single/BackgroundAndPA";
import { Metadata } from "next";
import a1 from "@/public/assets/a_1.jpeg";
import a2 from "@/public/assets/a_2.jpeg";
import a3 from "@/public/assets/a_3.jpeg";

export const metadata: Metadata = {
  title: "Team Member - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};

const page = ({params}:any) => {
  const {member} = params;
  const memberImages = {
    "hector-lopez": a1,
    "isabel-molinares": a2,
    "alejandro-molinares": a3,
  } as const;
  const memberText={
    "hector-lopez": "Hector Lopez",
    "isabel-molinares": "Isabel Molinares",
    "alejandro-molinares": "Alejandro Molinares"
  } as const;
  const image = memberImages[member as any] as any;
  const text = memberText[member as any] as any;
  const detailsText={
    "hector-lopez": {
      "text1":"",
      "text2":"",
      "text3":"",
      "text4":""
    },
    "isabel-molinares":  {
      "text1":"",
      "text2":"",
      "text3":"",
      "text4":""
    },
    "alejandro-molinares":  {
      "text1":"",
      "text2":"",
      "text3":"",
      "text4":""
    },
  } as const;
  const roleText={
    "hector-lopez": "Hector Lopez",
    "isabel-molinares": "Isabel Molinares",
    "alejandro-molinares": "Alejandro Molinares"
  } as const;

  return (
    <>
      <InnerBanner text={text} image={image} />

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
        text={`""Estaba luchando por resolver mis problemas legales antes de conocer
              Sr/a. ${text} en López & Abogados. Me sorprendió su actitud y atención.
              detalle y resolvió mi caso en poco tiempo entendiendo lo que necesito
              para terminar. Gracias Sr/a. ${text}""`}
        bgClass="bg-primary-main"
        textClass="text-white"
      />

      <PreFooter />
    </>
  );
};

export default page;
