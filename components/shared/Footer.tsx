import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo/white_logo_transparent_background.png";
// import ButtonCustom from "../global/button";
import X from "@/public/assets/X.svg";
import { Facebook, Youtube, LinkedinIcon, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container pb-14 pt-20">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap">
            <div className="basis-full lg:basis-1/3">
              <div>
                <Link href="/">
                  <Image src={logo} alt="Logo" width={160} height={160} />
                </Link>
                <div className="mt-5 pb-7">
                  <p className="text-sm leading-6 text-white">
                    EnLopez & Abogados  Estamos comprometidos a brindar a nuestros clientes un servicio excepcional y una representación legal efectiva.
                  </p>
                </div>
                {/* <ButtonCustom href="#" text="Buy Now" /> */}
              </div>
            </div>
            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white">
                <span className="text-[#14cab4]">Anuncio</span> Legal
              </h3>
              <div className="mt-5 lg:pb-7">
                <p className="text-sm leading-6 text-white">
                La información en este sitio web es para información general.
                  fines únicamente. Nada en este sitio debe tomarse como legal.
                  asesoramiento para cualquier caso o situación individual. Esta informacion
                  no tiene la intención de crear, y el recibo o la visualización no
                  constituyen una relación abogado-cliente.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white">
                <span className="font-bold text-[#14cab4]">Horario </span> Atencion
              </h3>
              <ul className="text-sm leading-6 text-white">
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Lunes</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Martes</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Miercoles</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Jueves</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Viernes</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Sabado - Domingo</span>
                  <span className="w-1/2 text-right">Cerrados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-7">
        <div className="container">
          <div className="flex flex-wrap items-center lg:flex-nowrap">
            <div className="basis-full lg:basis-1/2">
              <p className="mb-4 text-center text-sm leading-6 text-white lg:mb-0 lg:text-left">
                &copy; Copyrights López & Abogados 2024. Todos los derechos reservados.
              </p>
            </div>
            <div className="basis-full lg:basis-1/2">
              <ul className="flex items-center justify-center lg:justify-end">
                <li className="ml-3 w-8">
                  {/* <Link href="#" target="_blank">
                    <Facebook size={30} className="text-white" />
                  </Link> */}
                </li>
                <li className="ml-3 w-8">
                  {/* <Link href="#" target="_blank">
                    <Image src={X} alt="Follow us on Twitter" className="w-6" />
                  </Link> */}
                </li>
                <li className="ml-3 w-8">
                  {/* <Link href="#" target="_blank">
                    <LinkedinIcon size={30} className="text-white" />
                  </Link> */}
                </li>
                <li className="ml-3 w-8">
                  {/* <Link href="#" target="_blank">
                    <Youtube size={30} className="text-white" />
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
