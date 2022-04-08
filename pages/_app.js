// ============================================

// Hello friends .

// This section is where any change in it
// causes changes in the whole program and
// you can put the main components and styles
// here to be applied in the whole program
// and there is no need to manipulate the
// whole program separately.

// ============================================

import "../styles/globals.css";
import Layout from "../components/Layout";
import Footer from "../components/Footer/footer";
import Nav from "../components/Nav/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Inside the live section I put the page styles
      and in this section I work to apply to all parts 
      of the program. */}
      <Layout>
        {/* Navbar */}
        <Nav />
        {/* All app components */}
        <Component {...pageProps} />
        {/* Footer */}
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
