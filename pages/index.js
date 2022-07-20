import Head from "next/head";

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
        <div className="text-center text-emerald-500 text-4xl">
          Hello India!
        </div>
      </div>
    </>
  );
}
