import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Shared
import Wrapper from "../components/shared/Wrapper";
import Spinner from "../components/shared/Spinner";
import ImageGrid from "@/components/pages/Main/ImageGrid";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Home - {process.env.title}</title>
      </Head>

      {loaded
        ? <Wrapper>
          <ImageGrid />
        </Wrapper>
        : <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Spinner size={"30px"} color={"var(--primary-color)"} />
        </div>
      }
    </>
  );
}