import React from "react";
import Nav from "../admin/Nav";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}

export default AdminLayout;
