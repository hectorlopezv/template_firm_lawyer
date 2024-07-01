import Image from "next/image";
import paimagetopcontent from "@/public/assets/single-pa-top-content.jpg";
import PrimaryHeadline from "@/components/global/primary-headline";
import { ChevronRight } from "lucide-react";

const listData: string[] = [
  "Divorce",
  "Financial Matters",
  "Agreements",
  "Spouse Abuse",
  "Childern",
  "Martial Matters",
];

const PABottomContent = ({area}:any) => {
  const areaContent = {
    "derecho-laboral": {
      headline: "Historia En Casos De Derecho Laboral",
      text: "Durante casi 20 años, los abogados de derecho laboral de López & Abogados han ayudado a nuestros clientes con los siguientes asuntos",
      image: paimagetopcontent,
      servicios:[
        "Divorce",
        "Financial Matters",
        "Agreements",
        "Spouse Abuse",
        "Childern",
        "Martial Matters",
      ]
    },
    "pensiones": {
      headline: "Historia En Casos De Pensiones",
      text: "Durante casi 20 años, los abogados de pensiones de López & Abogados han ayudado a nuestros clientes con los siguientes asuntos",
      image: paimagetopcontent,
      servicios:[
        "Divorce",
        "Financial Matters",
        "Agreements",
        "Spouse Abuse",
        "Childern",
        "Martial Matters",
      ]
    },
    "seguridad-social": {
      headline: "Historia En Casos De Seguridad Social",
      text: "Durante casi 20 años, los abogados de seguridad social de López & Abogados han ayudado a nuestros clientes con los siguientes asuntos",
      image: paimagetopcontent,
      servicios:[
        "Divorce",
        "Financial Matters",
        "Agreements",
        "Spouse Abuse",
        "Childern",
        "Martial Matters",
      ]
    },
  }
  return (
    <div className="flex flex-wrap gap-0 lg:flex-nowrap lg:gap-8">
      <div className="relative basis-full sm:min-h-96 sm:basis-full lg:min-h-full lg:basis-1/2">
        <Image
          src={paimagetopcontent}
          alt="Single Practice Area Top"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="basis-full px-8 py-16 sm:-order-1 lg:order-2 lg:basis-1/2 lg:pl-11 lg:pr-20">
        <PrimaryHeadline
          text={areaContent[area].headline}
          additionalClass="primary-headline-left"
        />
        <p className="mb-5 text-base leading-6 text-[#333]">
          {areaContent[area].text}
        </p>
        <ul className="pb-8">
          {areaContent[area]?.servicios?.map((item, index) => (
            <li
              key={index}
              className="relative border-b border-[#313131] py-4 pl-5 text-base leading-6 text-[#313131]"
            >
              <ChevronRight
                size={15}
                className="absolute left-0 top-1/2 -translate-y-1/2"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-5 text-base font-bold leading-6 text-[#333]">
        Contáctenos hoy para una evaluación inicial de su caso. Hablará con uno de nuestros abogados para discutir su situación. Recibirá información sobre su asunto en particular y podrá evaluar si nuestro abogado se ajusta a sus necesidades y nivel de comodidad. Puede decidir si nuestro abogado es adecuado para usted. Contáctenos hoy al +57 301-4966-134.
        </p>
      </div>
    </div>
  );
};

export default PABottomContent;
