import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import {
  Fab,
  Footer,
  Header,
  Loader,
  Particles,
  Notification,
} from "components";
import { About, Contact, Hero, Portfolio, Technologies } from "sections";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [loading]);

  return (
    <Fragment>
      <Head>
        <meta property="twitter:card" content="oluwayelu_large_image"></meta>
        <meta property="twitter:site" content="@oluwayelujpg"></meta>
        <meta property="twitter:title" content="iOluwayelu"></meta>
        <meta property="twitter:url" content="https://iOluwayelu.netlify.app" />
        <meta
          property="twitter:description"
          content="Oluwayelu Ifeoluwa Portfolio"
        ></meta>
        <meta property="twitter:image" content=""></meta>

        <meta property="og:image" content=""></meta>
        <meta
          property="og:description"
          content="Oluwayelu Ifeoluwa Portfolio"
        ></meta>
        <meta name="description" content="Oluwayelu Ifeoluwa Portfolio"></meta>
        <title>iOluwayelu</title>
        <meta
          property="og:title"
          content="Oluwayelu Ifeoluwa | Portfolio"
        ></meta>
        <meta name="theme-color" content="#0F1642" />
        <meta name="msapplication-navbutton-color" content="#0F1642" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0F1642" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen font-poppins bg-cover bg-center">
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Technologies />
          <Contact />
          <Fab />
          <Notification />
          <Footer />
          <Particles />
        </div>
      )}
    </Fragment>
  );
};

export default Home;

