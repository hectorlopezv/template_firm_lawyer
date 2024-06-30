/* eslint-disable camelcase */

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

import { Albert_Sans } from "next/font/google";
import React from "react";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Welcome to Lopez & Abogados",
  description: "Your one stop solution for legal matters",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${albertSans.variable}`}>
          <Header />
          {children}
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
