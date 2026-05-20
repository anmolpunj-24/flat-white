// styles import
import "@/styles/globals.css";

// components import
import Seo from "@/components/seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />;
    </>
  );
}
