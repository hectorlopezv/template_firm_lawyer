import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
const NavDesktopContent = () => {

    return (
        <nav className="">
        <ul className="hidden lg:flex lg:gap-4 xl:gap-8">
          {/* <li className="group">
            <Link
              href="/"
              className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Home
              <ChevronDown
                size="15"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </Link>
            <ul
              className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
              role="list"
            >
              <li>
                <Link
                  href="/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Home 1
                </Link>
              </li>
              <li>
                <Link
                  href="/home-2/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Home2
                </Link>
              </li>
            </ul>
          </li> */}
          <li className="group">
            <Link
              href="/quienes-somos/"
              className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Quienes somos
            </Link>
          </li>
          <li className="group">
            <Link
              href="#"
              className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Areas de practica
              <ChevronDown
                size="15"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </Link>
            <ul
              className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
              role="list"
            >
              <li>
                <Link
                  href="/practice-areas-2-column/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                    Derecho Laboral
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas-3-column-layout/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Seguridad social
                </Link>
              </li>
              <li>
                <Link
                  href="/single-practice-area/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Pensiones
                </Link>
              </li>
            </ul>
          </li>
          <li className="group">
            <Link
              href="#"
              className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Equipo juridico
              <ChevronDown
                size="15"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </Link>
            <ul
              className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
              role="list"
            >
              <li>
                <Link
                  href="/equipo/hector-lopez"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Hector Lopez
                </Link>
                        </li>
                        <li>
                <Link
                  href="/equipo/isabel-molinares"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Isabel Molinares
                    </Link>
                        </li>

                        <li>
                <Link
                  href="/equipo/alejandro-molinares"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Alejandro Molinares
                </Link>
                        </li>
            </ul>
          </li>
          <li className="group relative">
            <Link
              href="/preguntas-frequentes/"
              className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Dudas frequentes
              {/* <ChevronDown
                size="15"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              /> */}
            </Link>
            {/* <ul
              className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
              role="list"
            >
              <li>
                <Link
                  href="/faqs/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Preguntas frecuentes
                </Link>
              </li>
            </ul> */}
          </li>
          {/* <li className="group relative">
            <Link
              href="#"
              className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Blog
              <ChevronDown
                size="15"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </Link>
            <ul
              className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100 lg:right-0  lg:min-w-52"
              role="list"
            >
              <li>
                <Link
                  href="/blog/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Blog With Sidebar
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-full-page/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Blog Full page
                </Link>
              </li>

              <li>
                <Link
                  href="/blog-chess-style/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Blog Chess Style
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-grid/"
                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                >
                  <ChevronRight
                    size="15"
                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                  />
                  Blog Grid
                </Link>
              </li>
            </ul>
          </li> */}
          <li className="group relative">
            <Link
              href="/contacto/"
              className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    );
}
export default NavDesktopContent;