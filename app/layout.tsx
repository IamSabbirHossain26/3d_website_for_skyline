import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyline Design Group — Future-Facing Spaces",
  description:
    "Architectural drafting, Revit BIM coordination and pre-construction visualization for developers, builders and design studios.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
