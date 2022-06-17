import useMinHeight from "@/core/hooks/useMinHeight";
import Head from "next/head";
import React, { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModalLogin from "@/components/ModalLogin";
import { useAppSelector } from "@/core/redux/hooks";

const MainLayout = ({ children }) => {
  const footerRef = useRef<HTMLElement>();
  const offset = useMinHeight([footerRef]);
  const { modalLogin } = useAppSelector((state) => state.ui);
  return (
    <>
      <Head>
        <title>Nextjs Starter</title>
      </Head>
      <Header />
      <div style={{ minHeight: `calc(100vh - ${offset}px)` }}>{children}</div>
      {modalLogin && <ModalLogin />}
      <Footer footerRef={footerRef} />
    </>
  );
};

export default MainLayout;
