import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout() {

    const mainCategory = ['Elektronik', 'Ev & Yaşam','Giyim & Aksesuar','Oto & Bahçe & Yapı','Anne & Bebek & Oyuncak','Kozmetik & Kişisel Bakım','Kitap & Kırtasiye','Market']

  return (
    <>
      <Header mainCategory={mainCategory}/>
      <main className="min-h-[45vh]">
        <Outlet mainCategory={mainCategory}/>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
