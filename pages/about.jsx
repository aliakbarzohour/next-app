import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Next - About</title>
        <meta
          name="description"
          content="This page is a About Page You know who i am . . ."
        />
        <meta name="viewport" content="width=device-width, initial-scale" />
        <meta name="keywords" content="react,html,css,next,nextjs," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>About Page</h2>
      </main>
    </>
  );
}
