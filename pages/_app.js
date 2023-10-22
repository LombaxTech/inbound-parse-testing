import "../styles/globals.css";
import { GoogleApiProvider } from "react-gapi";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://apis.google.com/js/api.js" />
      <Script src="https://accounts.google.com/gsi/client" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
