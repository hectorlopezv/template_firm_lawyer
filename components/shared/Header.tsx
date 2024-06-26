
import logo from "@/public/assets/logo/white_logo_transparent_background.png";
import Image from "next/image";
import Link from "next/link";
import NavDesktopContent from "./nav-desktop";
import NavMobileContent from "./nav-mobile";
import { PhoneCall } from "lucide-react";



const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <div className="container py-2">
        <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between">
          <div className="basis-full text-center sm:basis-auto sm:text-left flex gap-x-4">
            <span className="font-medium"> Contáctanos:</span>
            <Link className="font-bold" target="_blank" href="https://wa.me/573205552871?text=Estoy%20interesado%20en%20una%20consulta%20sin%20costos%20de%20mi%20caso">
              <div className="flex items-center gap-x-2">
                <PhoneCall className="text-green-500 h-5 w-5"/>
                <span>
                  +57 301-4966-134
                </span>
              
              </div>
            </Link>
          </div>
          <Link href="/contact" className="font-medium">
            Solicite una consulta gratuita
          </Link>
        </div>
      </div>
      <div className="relative bg-background">
        <div className="container">
          <div className="flex min-h-[80px] items-center  justify-between lg:min-h-full">
            <div className="shrink-0 basis-[155px]">
              <Link href="/">
                <Image src={logo} alt="Logo" width={166} height={30} />
              </Link>
            </div>
            <div className="text-white">
              <NavDesktopContent />
              <NavMobileContent/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
