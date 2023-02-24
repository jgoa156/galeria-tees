import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/styles/main.css";
import "../../public/fonts/Heebo.css";

export default function AppWrapper(props) {
  return (
    <App {...props} />
  );
}

function App(props) {
  return (
    <section id="app">
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#111" />

        <title>{process.env.title}</title>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://jgoa156.github.io/FA5PRO/css/all.min.css"
        />

        {/* Google Places */}
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleKey}&libraries=places`} async defer />
      </Head>

      <noscript>
        You need to turn on JavaScript to see this page
      </noscript>

      <main id={"main"}>
        <props.Component {...props.pageProps} />
      </main>
    </section>
  );
}