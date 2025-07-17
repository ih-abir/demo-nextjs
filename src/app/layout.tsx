import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import bgImage from "@images/bg-image.webp";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "@styles/style.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  preload: true
});

const louisGeorgeCafe = localFont({
  src: [
    { path: "../../public/fonts/louis_george_cafe-webfont.woff2", style: "normal" },
  ],
  variable: "--font-louis-george-cafe"
});

export const metadata: Metadata = {
  title: "🎶 Identity Music: UK digital music distribution for independent artists & labels",
  description: "Upload your music to global streaming services with Identity Music's distribution platform. UK experts in music promotion, rights management, distribution & publishing. Friendly support team, fast upload times & exclusive promotional support for independent artists & labels across the world. Publish your music now!",
  icons: {
    icon: '/brand-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[poppins.variable, louisGeorgeCafe.variable].join(" ")}>
        <div
          className={[
            "fixed inset-0 z-[-99]",
            "size-screen bg-cover bg-center"
          ].join(" ")}
        >
          <Image
            className="w-full h-full object-cover"
            src={bgImage}
            alt="background-image"
            width={1920}
            height={1080}
            sizes={[
              "(max-width: 325px) 325px, (max-width: 415px) 415px",
              "(max-width: 639px) 639px, (max-width: 767px) 767px",
              "(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px",
            ].join(", ")}
          />
        </div>
        
        <div className="block w-full">
          <Navbar />
          <main>
            {children}
          </main>
        </div>

        <Footer />
        <Script src="/scripts/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
