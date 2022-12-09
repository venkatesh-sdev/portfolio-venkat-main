import Head from "next/head";
import React from "react";
import { Header, Hero } from "../Container";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Venkat-Portfolio</title>
      </Head>

      <header id="#header" className="bg-skin-fill">
        <Header />
      </header>

      <main>
        <section id="#hero" className="bg-skin-fill">
          <Hero />
        </section>
      </main>
    </React.Fragment>
  );
};

export default index;
