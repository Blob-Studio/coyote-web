import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap" rel="stylesheet" />

        <meta name="title" key="title" content="Coyote Web Studio" />
        <meta name="description" key="description" content="Coyote Web Studio is a web design and development studio based in Buenos Aires, Argentina" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
