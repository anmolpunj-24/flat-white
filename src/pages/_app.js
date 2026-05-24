// styles import
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components import
import Header from "@/mainComponents/header";
import Footer from "@/mainComponents/footer";
import Seo from "@/mainComponents/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      {/* seo */}
      <Seo />

      {/* header */}
      <Header />

      <main className="mt-[5.5rem]">
        <Component {...pageProps} />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
