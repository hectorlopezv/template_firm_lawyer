import InnerBanner from "@/components/global/inner-banner";
import { ContactForm } from "@/components/global/ContactForm";
import PrimaryHeadline from "@/components/global/primary-headline";
import Iframe from "@/components/shared/Iframe";
import { MapPin, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conocenos - Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="Contactanos" />
      <div className="w-full">
        <Iframe url="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=buenavista barranquilla&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
      </div>

      <div className="overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative basis-full pb-20 pr-0 pt-16 before:z-[-1] lg:basis-2/3 lg:pr-12 lg:pt-24">
              <PrimaryHeadline
                text="Programe Una Consulta Gratuita"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <p className="mb-5 text-base leading-7 text-[#333]">
                Llámenos para programar una consulta gratuita o complete el
                formulario siguiente forma. Uno de nuestros representantes se
                comunicará con usted. en 24 horas.
              </p>
              <ContactForm />
            </div>
            <div className="relative basis-full pb-16 pt-0 lg:basis-1/3 lg:pb-20 lg:pt-24">
              <PrimaryHeadline
                text="Ponerse En Contacto"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <ul>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="https://wa.me/573205552871?text=Estoy%20interesado%20en%20una%20consulta%20sin%20costos%20de%20mi%20caso"
                  >
                    +57 301-4966-134
                  </a>
                </li>
                {/* <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="#"
                  >
                    1911-462-281
                  </a>
                </li> */}
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Oficina central
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      Barranquilla, Colombia <br /> Atlantico.
                    </p>
                  </div>
                </div>
                {/* <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Regional Office
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, <br /> March Street, Sydney.
                    </p>
                  </div>
                </div> */}
                <div>
                  <h3 className="mb-7 mt-8 text-2xl font-bold text-[#333]">
                    Horario de Atencion
                  </h3>
                  <ul className="text-base leading-6 text-[#313131]">
                    <li className="relative flex border-b border-[#313131] py-4">
                      <span className="w-1/2 font-bold">Lunes-Miercoles</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="relative flex border-b border-[#313131] py-4">
                      <span className="w-1/2 font-bold">Jueves-Viernes</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="relative flex py-4">
                      <span className="w-1/2 font-bold">Sabado-Domingo</span>
                      <span className="w-1/2 text-right">Cerrados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
