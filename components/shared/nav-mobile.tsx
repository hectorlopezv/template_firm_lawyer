import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/assets/logo/white_logo_transparent_background.png";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
const NavMobileContent = () => {

    return (
        <Sheet>
        <SheetTrigger className="block lg:hidden">
          <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
          <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
          <span className="block h-[3px] w-7 rounded-md bg-white"></span>
        </SheetTrigger>
        <SheetContent className="border-none p-0 text-white">
          <div className="h-full overflow-y-auto p-6">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={166}
                    height={30}
                  />
                </Link>
              </SheetTitle>
              <SheetDescription>
                <ul className="block pt-8 text-left *:text-white lg:hidden lg:gap-4 xl:gap-8">
                  {/* <li className="relative">
                    <Link
                      href="/"
                      className="relative block border-b border-white py-3 pr-0 duration-300 ease-in-out after:transition-transform"
                    >
                      <Collapsible>
                        <CollapsibleTrigger>
                          Home
                          <ChevronDown
                            size="15"
                            className="absolute right-0 top-[21px] -translate-y-1/2"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul
                            className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500 ease-menu  lg:min-w-52"
                            role="list"
                          >
                            <li>
                              <SheetClose asChild>
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
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/home-2/"
                                  className="group/subItem relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  Home2
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Link>
                  </li> */}
                  <li className="group relative">
                    <SheetClose asChild>
                      <Link
                        href="/who-we-are/"
                        className="relative block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                      >
                        Quienes somos
                      </Link>
                    </SheetClose>
                  </li>
                  <li className="relative">
                    <Link
                      href="#"
                      className="relative  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                    >
                      <Collapsible>
                        <CollapsibleTrigger>
                          Areas de practica
                          <ChevronDown
                            size="15"
                            className="absolute right-0 top-[21px] -translate-y-1/2"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul
                            className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                            role="list"
                          >
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/practice-areas-2-column/"
                                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  2 Column Layout
                                </Link>
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/practice-areas-3-column-layout/"
                                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  3 Column Layout
                                </Link>
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/single-practice-area/"
                                  className="group/subItem relative block px-5 py-4 pb-1 text-white transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  Areas de practicas individuales
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="#"
                      className="relative block  border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                    >
                      <Collapsible>
                        <CollapsibleTrigger>
                          Equipo Juridico
                          <ChevronDown
                            size="15"
                            className="absolute right-0 top-1/2 -translate-y-1/2"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul
                            className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                            role="list"
                          >
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/single-team-member/"
                                  className="group/subItem relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  Robert Darren
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="#"
                      className="relative block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                    >
                      <Collapsible>
                        <CollapsibleTrigger>
                          Pages
                          <ChevronDown
                            size="15"
                            className="absolute right-0 top-[21px] -translate-y-1/2"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul
                            className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                            role="list"
                          >
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/faqs/"
                                  className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  Faqs
                                </Link>
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/404/"
                                  className="group/subItem relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  404 Page
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Link>
                  </li>
                  {/* <li className="relative">
                    <Link
                      href="#"
                      className="relative block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                    >
                      <Collapsible>
                        <CollapsibleTrigger>
                          Blog
                          <ChevronDown
                            size="15"
                            className="absolute right-0 top-[21px] -translate-y-1/2"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul
                            className=" top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500 ease-menu  lg:right-0"
                            role="list"
                          >
                            <li>
                              <SheetClose asChild>
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
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
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
                              </SheetClose>
                            </li>

                            <li>
                              <SheetClose asChild>
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
                              </SheetClose>
                            </li>
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/blog-grid/"
                                  className="group/subItem relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                >
                                  <ChevronRight
                                    size="15"
                                    className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                  />
                                  Blog Grid
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Link>
                  </li> */}
                  <li className="group relative">
                    <SheetClose asChild>
                      <Link
                        href="/contact/"
                        className="relative block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    );
}

export default NavMobileContent;