import '../styles/index.css';
import { DefaultSeo } from 'next-seo';
import SEOConfig from '../seo.config.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
