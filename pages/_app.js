import "@/styles/globals.css";
import Head from "next/head";
import Context from "@/context/HuaContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
