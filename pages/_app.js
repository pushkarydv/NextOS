import "../styles/tailwind_config.css";
import "../styles/scrollbar.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="applicationFont">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
