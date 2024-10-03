import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "KDR Tech Portfolio | Flutter Developer | React Native Developer | Mobile App Developer | Game Developer",
  description:
    "Welcome to KDR Tech Portfolio. Arbaz KDR is a skilled Flutter Developer, React Native Developer, Mobile App Developer, and Game Developer. Explore our projects and services to see how we can bring your ideas to life.",
  keywords:
    "Flutter Developer, React Native Developer, Mobile App Developer, Game Developer, Cross-Platform Development, iOS Development, Android Development, App Development, Game Development, UI/UX Design, Front-End Development, Full-Stack Development, Arbaz KDR, KDR Tech",
  viewport: "width=device-width, initial-scale=1.0" as string,
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title:
      "KDR Tech Portfolio | Flutter Developer | React Native Developer | Mobile App Developer | Game Developer",
    description:
      "Welcome to KDR Tech Portfolio. Arbaz KDR is a skilled Flutter Developer, React Native Developer, Mobile App Developer, and Game Developer. Explore our projects and services to see how we can bring your ideas to life.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description || ""} />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords || ""
          }
        />
        <meta name="viewport" content={String(metadata.viewport) || ""} />

        <title>{String(metadata.title) || "Default Title"}</title>
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
