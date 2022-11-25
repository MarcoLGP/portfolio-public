import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp