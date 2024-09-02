import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Salemate | your business partner</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
