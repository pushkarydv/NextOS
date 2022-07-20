import Head from "next/head";
import Accessbar from "../components/Accessbar";
import BaseApp from "../components/BaseApp";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextOS</title>
        <meta
          name="description"
          content="A next generations OS design built for fun using Next Js and Tailwind CSS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-full h-screen relative">
        <Widget />
        <BaseApp />
        <Accessbar />
      </div>
    </>
  );
}
