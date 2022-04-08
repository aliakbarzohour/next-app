// ==================================================

// Hello friends .

// In this section, I apply general changes in terms
// of style and component and inject it in the
// _app.js section.

// ==================================================

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      {/* SEO meta TAG's */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale" />
      </Head>
      {children}
    </>
  );
}
