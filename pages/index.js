import Head from "next/head";
import React from "react";
import { Header , Hero} from "../Container";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Venkat-Portfolio</title>
      </Head>

      <Header />

      <main>
        <section id='#hero'>
            <Hero/>
        </section>
      </main>

    </React.Fragment>
  );
};

export default index;
