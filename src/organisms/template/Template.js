import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer/Footer";

export default function Template() {
  return (
    <VerticalWrapper>
      <>
        <Header />
        <Outlet /> {/* CHILDREN  */}
        <Footer />
      </>
    </VerticalWrapper>
  );
}
