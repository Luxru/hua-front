import Logo from "@/components/Logo";
import Hua from "@/components/Hua";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Head>
        <title>Hua Preview</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <Logo />
        <div className="flex-1 flex items-center justify-center">
          <Hua />
        </div>
        <Footer href={{ pathname: "/[pid]/panel", query: { pid: pid } }} />
      </div>
    </>
  );
}
