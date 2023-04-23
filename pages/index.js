import Header from "@/components/Header";
import Panel from "@/components/Panel";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hua App</title>
      </Head>
      <div className="bg-slate-100 min-h-screen h-screen flex items-center justify-center">
        <div className="bg-white w-full h-full lg:h-5/6 lg:w-4/5 grid grid-rows-3 shadow-2xl overflow-auto rounded-2xl select-none">
          <div className="self-start">
            <Header />
          </div>
          <div className="self-center">
            <Panel />
          </div>
          <div className="self-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
