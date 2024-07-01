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
  const contentMember={
    "hector-lopez":{
      "image":a1,
      headline:"Abogado Hector Lopez",
      name:"Hector Lopez",
      "quote":`Estaba luchando por resolver mis problemas legales antes de conocer
              Sr/a. Hector Lopez en López & Abogados. Me sorprendió su actitud y atención.
              detalle y resolvió mi caso en poco tiempo entendiendo lo que necesito
              para terminar. Gracias Sr/a. Hector Lopez`,
              "text1":"Héctor López ha ejercido la abogacía durante los últimos 20 años y ha tenido mucho éxito en lograr que sus clientes obtengan protección dentro de las jurisdicciones de la ley. Hector Lopez obtuvo su licenciatura en derecha de la univerdad simon bolivar barranquilla/colombia, su especialidad en la universidad libre de barranquilla/colombia en seguridad social ",
              "text2":null,
      "text3":null,
      "text4":null,
      "background":{
        "areas-de-practica":["Derecho Laboral", "Seguridad Social", "Pensiones"]
      }


    },
    "isabel-molinares":{
      "image":a2,
      headline:"Abogada Isabel Molinares",
      name:"Isabel Molinares",
      "quote":`Estaba luchando por resolver mis problemas legales antes de conocer
              Sr/a. Isabel Molinares en López & Abogados. Me sorprendió su actitud y atención.
              detalle y resolvió mi caso en poco tiempo entendiendo lo que necesito
              para terminar. Gracias Sr/a. isabel Molinares`,
      "text1":"Isabel Molinares ha ejercido la abogacía durante los últimos 5 años y ha tenido mucho éxito en lograr que sus clientes obtengan protección dentro de las jurisdicciones de la ley. ",
      "text2":null,
      "text3":null,
      "text4":null,
      "background":{
        "areas-de-practica":["Derecho Laboral", "Seguridad Social", "Pensiones"]
      }
    },
    "alejandro-molinares":{
      "image":a3,
      headline:"Asesor Juridico Alejandro Molinares",
      name:"Alejandro Molinares",
      "quote":`Estaba luchando por resolver mis problemas legales antes de conocer
              Sr/a. Alejandro Molinares en López & Abogados. Me sorprendió su actitud y atención.
              detalle y resolvió mi caso en poco tiempo entendiendo lo que necesito
              para terminar. Gracias Sr/a. Alejandro Molinares`,
      "text1":"Asesor Juridico de lopez Abogados por mas de 7 anos ",
      "text2":null,
      "text3":null,
      "text4":null,
      "background":{
        "areas-de-practica":["Derecho Laboral", "Seguridad Social", "Pensiones"]
      }
    }
  }


  return (
    <>
      <InnerBanner text={contentMember[member]?.headline} image={contentMember[member]?.image} />

      <MemberDetails details={{...contentMember[member]}}/>

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
        text={contentMember[member]?.quote}
        bgClass="bg-primary-main"
        textClass="text-white"
      />

      <PreFooter />
    </>
  );
};

export default page;
