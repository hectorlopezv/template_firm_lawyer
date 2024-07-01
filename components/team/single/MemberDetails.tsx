import Image from "next/image";
// import Link from "next/link";

// import homefirmimage from "@/public/assets/home-member1.jpg";
import PrimaryHeadline from "@/components/global/primary-headline";
import React from "react";
// import { Facebook, LinkedinIcon, Youtube } from "lucide-react";

// const memberSocialLinks: {
//   name: string;
//   link: string;
//   icon: React.ReactNode;
// }[] = [
//   {
//     name: "Facebook",
//     link: "#",
//     icon: <Facebook size={30} />,
//   },
//   {
//     name: "LinkedIn",
//     link: "#",
//     icon: <LinkedinIcon size={30} />,
//   },
//   {
//     name: "Youtube",
//     link: "#",
//     icon: <Youtube size={30} />,
//   },
// ];

const MemberDetails = ({ details }: any) => {
  console.log({details});
  const { text1 = "", text2 = "", text3 = "", text4 = "", name, image } = details;
  console.log({text1, text2, text3, text4})
  return (
    <div className="container py-16 lg:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[30%]">
          <Image
            src={image}
            alt="Home Firm Image"
            className="rounded-md"
          />
          {/* <ul className="flex items-center justify-center py-5">
            {memberSocialLinks.map((link) => (
              <li className="ml-3 w-8" key={link.name}>
                <Link href={link.link} target="_blank">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="basis-full lg:basis-[70%]">
          <PrimaryHeadline
            text={`Sobre ${name}`}
            additionalClass="primary-headline-left"
          />
          <div className="text-base text-[#333]">
            {text1 && <p className="mb-6">
              {text1}
            </p>}
            {text2 && <p className="mb-6">
              {text2}
            </p>}
            {text3 && <p className="mb-6">
              {text3}
            </p>}
            {text4 && <p className="mb-6">
              {text4}
            </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
