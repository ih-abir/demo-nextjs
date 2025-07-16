import type { Metadata } from "next";
import Script from "next/script";

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
            "fixed inset-0 size-screen z-[-99]",
            ` bg-cover bg-center`
          ].join(" ")}
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        
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
