import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout({ items, setItems }) {
  return (
    <>
      <Header  items={items} setItems={setItems} />
      <main className="min-h-[45vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
