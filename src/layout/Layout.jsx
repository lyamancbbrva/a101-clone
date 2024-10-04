import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout() {
  const mainCategory = [
    {
      name: "Elektronik",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/j-4GhgugfQ_1024x1024.png",
    },
    {
      name: "Ev & Yaşam",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/oZ4CLG763L_1024x1024.png",
    },
    {
      name: "Giyim & Aksesuar",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/K7Dojvagto_1024x1024.png",
    },
    {
      name: "Oto & Bahçe & Yapı",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/NY0jC-lxUV_1024x1024.png",
    },
    {
      name: "Anne & Bebek & Oyuncak",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/HypCfDo2sq_1024x1024.png",
    },
    {
      name: "Kozmetik & Kişisel Bakım",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/lgXbpkYp1d_1024x1024.png",
    },
    {
      name: "Kitap & Kırtasiye",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/aLjegjIe3Q_1024x1024.png",
    },
    {
      name: "Market",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/BRNpLVW214_1024x1024.png",
    },
  ];

  return (
    <>
      <Header mainCategory={mainCategory} />
      <main className="min-h-[45vh]">
        <Outlet mainCategory={mainCategory} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
