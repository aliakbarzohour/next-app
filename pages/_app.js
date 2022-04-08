import "../styles/globals.css";
import Layout from "../components/Layout";
import Footer from "../components/Footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
