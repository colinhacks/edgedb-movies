// import App from "next/app";
import '../style.css';
import type {AppProps /*, AppContext */} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
