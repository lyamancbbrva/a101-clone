import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[45vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
