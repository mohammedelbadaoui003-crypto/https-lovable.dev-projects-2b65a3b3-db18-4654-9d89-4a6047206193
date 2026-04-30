import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="موقع افيليييت Temu - احصل على أفضل المنتجات بأسعار منخفضة جداً!" />
        <title>Temu Affiliate - أفضل المنتجات</title>
      </Head>
      <Header />
      <main><Component {...pageProps} /></main>
      <Footer />
    </>
  );
}