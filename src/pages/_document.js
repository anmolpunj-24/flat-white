// nextjs import
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />

      <body>
        <div id="initial-loader">
          <h1>Loading...</h1>
        </div>

        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", () => {
                const loader = document.getElementById("initial-loader");

                if (loader) {
                  loader.style.opacity = "0";

                  setTimeout(() => {
                    loader.remove();
                  }, 400);
                }
              });
            `,
          }}
        />

        <style>{`
          #initial-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(12px);
            transition: opacity 0.4s ease;
          }

          #initial-loader h1 {
            color: white;
            font-size: 30px;
            font-weight: 600;
            letter-spacing: -0.04em;
          }
        `}</style>
      </body>
    </Html>
  );
}