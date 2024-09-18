import React from "react";
import Nav from "../admin/Nav";
import { Outlet } from "react-router-dom";

function AdminLayout() {
    
  return (
    <div className="sm:flex gap-5">
      <Nav />
      <main className="w-full">
        <Outlet/>
      </main>
    </div>
  );
}

export default AdminLayout;
