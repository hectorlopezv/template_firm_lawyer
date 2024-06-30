import React from "react";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import Image from "next/image";
import homefirmimage from "@/public/assets/a_1.jpeg";

const TwoColumnTextWithImage = () => {
  return (
    <div className="container py-16 sm:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[70%]">
          <PrimaryHeadline text="Sobre Nosotros" />
          <div className="text-base text-[#333]">
            <p className="mb-6">
            Lopez & Abogados, un despacho legal comprometido con brindar asesoría y representación de alta calidad en las áreas de Derecho Laboral, Seguridad Social y Pensiones. Nuestra misión es ofrecer soluciones legales eficaces y personalizadas, atendiendo las necesidades específicas de cada uno de nuestros clientes con profesionalismo y dedicación.
            </p>

            <p className="mb-6">
            Para obtener más información sobre cómo podemos asistirle, no dude en contactarnos. Estamos aquí para ayudarle a navegar por el complejo panorama legal con confianza y seguridad.
            </p>
          </div>
          <ButtonCustom href="/contacto" text="Conocenos" buttonType="secondary" />
        </div>
        <div className="flex basis-full justify-center sm:text-center lg:block lg:basis-[30%]">
          <Image
            src={homefirmimage}
            alt="Home Firm Image"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextWithImage;
