import Head from "next/head";
import { Fragment } from "react";
import type { NextPage } from "next";
import {
  About,
  Contact,
  Hero,
  Home as HomeSection,
  Portfolio,
  Technologies,
} from "sections";
import { Fab, Footer, Header, Particles } from "components";

const Home: NextPage = () => {
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
      <div
        className="relative w-full min-h-screen font-poppins bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/confetti-background.png')",
        }}
      >
        <Header />
        {/* <Particles /> */}
        <Hero />
        {/* <HomeSection /> */}
        <About />
        <Portfolio />
        <Technologies />
        <Contact />
        <Fab />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

