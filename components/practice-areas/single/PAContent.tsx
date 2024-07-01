import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import paimage1 from "@/public/assets/pa-img-1.jpg";

const PAContent = ({area}:any) => {
  const practiceText = {
    "derecho-laboral": "En Colombia, el derecho laboral se aplica a través de la constitución, así como las leyes, decretos y tratados internacionales. Estas normas establecen las condiciones de trabajo, los derechos y obligaciones de los trabajadores y empleadores, así como las sanciones por incumplimiento.Por ejemplo, se establecen reglas sobre el salario mínimo, las horas de trabajo, las vacaciones y las condiciones de seguridad y salud en el lugar de trabajo.El derecho laboral en Colombia es dinámico y está en constante evolución para adaptarse a los cambios socioeconómicos. Se han introducido nuevas leyes para proteger los derechos de los trabajadores en la economía digital y para abordar los desafíos de la igualdad de género en el lugar de trabajo. Esto sumado al reciente proyecto de reforma laboral que radicó el Gobierno Nacional.",
    "pensiones": "En general la pensión se entiende como un seguro social frente a los riesgos laborales (desempleo, accidente de trabajo, enfermedad, seguro médico, invalidez...) o contra la vejez (jubilación) u otras circunstancias sobrevenidas que generan dependencia como la discapacidad, viudez, orfandad u otras.Un sistema público de pensiones es el que el Estado administra con el fin de garantizar protección social frente a la vejez u otras circunstancias sobrevenidas por dependencia. ​En general, los sistemas de pensiones (públicos, privados y mixtos) varían mucho de país a país en cuanto a edad de jubilación, porcentaje de la pensión respecto al último salario, desgravaciones fiscales de los planes de pensiones privados y otros factores",
    "seguridad-social": "Se puede definir que el sistema general de seguridad social en salud tiene como objetivo regular el servicio público esencial de salud y crear condiciones de acceso en toda la población al servicio en todos los niveles de atención, para garantizar el cubrimiento de la atención de los servicios previstos en el plan de beneficios de salud. El sistema general de Pensiones tiene por objeto garantizar a la población el amparo contra las contingencias derivadas de la vejez, invalidez o  la muerte, mediante el reconocimiento de una pensión y prestaciones determinadas en la ley. El Sistema General de Riesgos Laborales articula el sistema de prevención de accidentes de trabajo y enfermedades laborales a través de planes de salud ocupacional y prevención de riesgos al tiempo de atender los siniestros laborales por medio de las prestaciones de subsidio por incapacidad, indemnización por incapacidad permanente parcial, pensión de invalidez y pensión de sobrevivientes.",
  }
  return (
    <div className="container py-16 lg:py-24">
      <div className="flex flex-wrap gap-0 lg:flex-nowrap lg:gap-10">
        <div className="basis-full lg:basis-4/6">
          <PrimaryHeadline
            text="Overview"
            additionalClass="primary-headline-left"
          />
          <p className="mb-5 text-base text-[#333]">
{practiceText[area]}
          </p>
        </div>
        <div className="basis-full pt-7 lg:basis-1/3 lg:pt-0">
          <Image
            src={paimage1}
            alt="Practice Area Image"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PAContent;
