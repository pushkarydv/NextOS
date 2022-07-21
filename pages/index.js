import Head from "next/head";
import Accessbar from "../components/Accessbar";
import About from "../components/About";
import BaseApp from "../components/BaseApp";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-907HKY5G82"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-907HKY5G82');`,
          }}
        />
        <title>NextOS</title>
        <meta
          name="description"
          content="A next generations OS design built for fun using Next Js and Tailwind CSS"
        />
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="NextOS" />

        <meta
          name="description"
          content="A Modern Operating System design built into a Website using Next JS and Tailwind CSS"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="author" content="Pushkar Yadav" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextos.pushkaryadav.in/" />
        <meta property="og:title" content="NextOS" />
        <meta
          property="og:description"
          content="A Modern Operating System design built into a Website using Next JS and Tailwind CSS"
        />
        <meta
          property="og:image"
          content="https://nextos.pushkaryadav.in/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nextos.pushkaryadav.in/"
        />
        <meta property="twitter:title" content="NextOS" />
        <meta
          property="twitter:description"
          content="A Modern Operating System design built into a Website using Next JS and Tailwind CSS"
        />
        <meta
          property="twitter:image"
          content="https://nextos.pushkaryadav.in/banner.png"
        />
      </Head>
      <div className="w-full h-screen relative overflow-hidden">
        <Widget />
        <BaseApp />
        <About />
        <Accessbar />
      </div>
    </>
  );
}
