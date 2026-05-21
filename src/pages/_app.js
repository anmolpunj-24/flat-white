// styles import
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// components import
import Seo from "@/mainComponents/seo";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} mt-[8rem]`}>
      <Seo />
      <Component {...pageProps} />
    </div>
  );
}
