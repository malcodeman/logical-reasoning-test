import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta name="og:description" content="logical reasoning test" />
          <meta name="description" content="logical reasoning test" />
          <meta property="og:image" content="opengraph.png"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
