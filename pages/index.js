import Head from "next/head";
import Accessbar from "../components/Accessbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextOS</title>
        <meta
          name="description"
          content="A next generations OS design built for fun using Next Js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen relative">
        <Accessbar />
      </div>
    </>
  );
}
