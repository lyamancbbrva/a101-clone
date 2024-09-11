import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/Main";
import Layout from "./layout/Layout";
import Basket from "./components/main/Basket";
import Error404 from "./components/Error404";
import { useEffect, useState } from "react";
import CardInfo from "./components/main/CardInfo";
import Categories from "./components/main/Categories";
import Campaigns from "./components/main/Campaigns";
import Login from "./components/main/Login";
import AdminLayout from "./layout/AdminLayout";
import Home from './admin/Home';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Lemanin yixildigi skuter1",
      price: 300.0,
      count: 1,
      image: "src/assets/img/test.jpg",
    },
    {
      id: 2,
      name: "Lemanin yixildigi skuter2",
      price: 200.0,
      count: 1,
      image: "src/assets/img/test.jpg",
    },
    {
      id: 3,
      name: "Lemanin yixildigi skuter3",
      price: 100.0,
      count: 1,
      image: "src/assets/img/test.jpg",
    },
  ]);

  return (
    <>
      <Routes>
        <Route  path="/admin" element={<AdminLayout/>}>
            <Route  path="/admin" element={<Home/> } />
        </Route>
        <Route path="/" element={<Layout items={items} setItems={setItems} />}>
          <Route path="/" element={<Main />} />
          <Route path="/sepet" element={<Basket items={items} />} />
          <Route path="/kampanyalar" element={<Campaigns />} />
          <Route path="/giris" element={<Login />} />
          <Route path="/cardInfo" element={<CardInfo />} />
          <Route path="/kateqoriler" element={<Categories />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
