import "../styles/tailwind_config.css";
import "../styles/scrollbar.css";
import "../styles/globals.css";
import Background from "../components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <main className="applicationFont">
      <Background />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
