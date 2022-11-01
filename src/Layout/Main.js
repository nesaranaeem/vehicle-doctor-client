import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
