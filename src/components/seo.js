// nextjs import
import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <title>FlatWhite</title>
      <meta name="description" content="FlatWhite" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/icon-dark.svg" media="(prefers-color-scheme: light)" />
       <link rel="icon" href="/assets/icon-light.svg" media="(prefers-color-scheme: dark)" />
    </Head>
  );
}
