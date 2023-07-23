import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
