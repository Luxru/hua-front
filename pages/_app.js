import "@/styles/globals.css";
import Context from "@/context/HuaContext";
import Layout from "@/components/Layout";
import localFont from 'next/font/local'

const fzltFont = localFont({ src: '../public/assets/font/FZLanTingHeiS-HC-GB.ttf',variable: '--font-fzlt'})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout className={`${fzltFont.variable}`}>
        <Context>
          <Component {...pageProps} />
        </Context>
      </Layout>
    </>
  );
}
