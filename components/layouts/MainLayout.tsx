import useMinHeight from "@/core/hooks/useMinHeight";
import Head from "next/head";
import React, { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  const footerRef = useRef<HTMLElement>();
  const offset = useMinHeight([footerRef]);
  return (
    <>
      <Head>
        <title>Nextjs Starter</title>
      </Head>
      <Header />
      <div style={{ minHeight: `calc(100vh - ${offset}px)` }}>{children}</div>
      <Footer footerRef={footerRef} />
    </>
  );
};

export default MainLayout;
