import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../features/Footer/Footer";

export default function Layout() {
  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
