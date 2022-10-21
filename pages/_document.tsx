import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap" rel="stylesheet" />

        <meta name="title" content="Coyote Web Studio" />
        <meta name="description" content="Coyote Web Studio is a web design and development studio based in Buenos Aires, Argentina" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Coyote Web Studio" />
        <meta property="og:description" content="We are a web design and development studio based in Buenos Aires, Argentina." />
        <meta property="og:image" content="/img/CWS-logo-dark.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Coyote Web Studio" />
        <meta property="twitter:description" content="We are a web design and development studio based in Buenos Aires, Argentina." />
        <meta property="twitter:image" content="/img/CWS-logo-dark.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
