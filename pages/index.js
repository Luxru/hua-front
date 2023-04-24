import Panel from "@/components/Panel";
import Footer from "@/components/Footer";
import Head from "next/head";
import Logo from "@/components/Logo";
import HuaButtonGroup from "@/components/HuaButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
      <div className="bg-slate-100 min-h-screen h-screen flex items-center justify-center">
        <div className="bg-white w-full h-full lg:h-5/6 lg:w-4/5 grid grid-cols-1 lg:grid-rows-3 shadow-2xl overflow-auto rounded-2xl select-none">
          <div className="self-start">
            <>
              <div className="grid grid-cols-2 p-4">
                <Logo className="space-x-2 justify-self-start" />
                <div className="justify-self-end grid grid-rows-2 gap-3 mx-6">
                  <HuaButtonGroup
                    numButton={3}
                    typeButton={"Hua"}
                    className="grid grid-flow-col space-x-16"
                  />
                  <div className="space-x-16 grid grid-flow-col ">
                    <p className="inline-block text-center font-FZLT">s</p>
                    <p className="inline-block text-center font-FZLT">m</p>
                    <p className="inline-block text-center font-FZLT">l</p>
                  </div>
                </div>
              </div>
            </>
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
