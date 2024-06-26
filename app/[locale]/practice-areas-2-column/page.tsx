import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PAList from "@/components/practice-areas/PAList";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas De Practica 2 Columns - Lawyero",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <InnerBanner text="Areas De Practica 2 COLUMN" />
      <HeadlineWithText
        headlineText="Areas De Practica"
        text="At lawyero we practice almost all areas of life. Some of the most
          notable Areas De Practica in which we have helped number of our clients
          to achieve their goals according to the laws are as follows:"
      />
      <PAList layout="2-column" />
      <PreFooter />
    </>
  );
};

export default page;
