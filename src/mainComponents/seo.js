// nextjs import
import Head from "next/head";

export default function Seo({ metaTitle, metaDesc }) {
  return (
    <Head>
      <title>{metaTitle ?? "FlatWhite"}</title>
      <meta name="description" content={metaDesc ?? "FlatWhite"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        href="/assets/icon-dark.svg"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/assets/icon-light.svg"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
}
