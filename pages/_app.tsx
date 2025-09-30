import "@/styles/globals.css";
import '@/styles/magic-bento-globals.css';
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <title>alisscart</title>

        <meta
          name="description"
          content="Explore creative 3D animations, motion graphics, album covers, and digital concepts by alisscart. Let's collaborate on visual art and design projects."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="alisscart" />
        <meta
          property="og:description"
          content="Dive into the world of 3D animations, album covers, and digital design by alisscart. Collaborate on creative motion graphics and more."
        />
        <meta property="og:image" content="/meta/telegram.jpg" />
        <meta property="og:url" content="https://alisscart.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="alisscart" />
        <meta
          name="twitter:description"
          content="Join alisscart on a creative journey through 3D animation, motion graphics, and digital art. Let's work together on unique design projects."
        />
        <meta name="twitter:image" content="/meta/twitter.jpg" />

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "5a184ee09a8f4ffab01c7aa1f8b3e267"}'
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}