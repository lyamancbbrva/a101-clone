import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/main/Main";
import Layout from "./layout/Layout";
import Basket from "./components/main/Basket";
import Error404 from "./components/Error404";
import { useEffect, useState } from "react";
import CardInfo from "./components/main/CardInfo";
import Categories from "./components/main/Categories";
import Campaigns from "./components/main/Campaigns";
import AdminLayout from "./layout/AdminLayout";
import Home from "./admin/Home";
import Category from "./admin/Category";
import { Toaster } from "react-hot-toast";
import Subcategory from "./admin/Subcategory";
import Product from "./admin/Product";
import Slider from "./admin/Slider";
import Register from "./admin/Register";
import Login from "./components/main/Login";
import { verifyToken } from "./api/api";
import { Cookies } from "react-cookie";

const cook = new Cookies()

function App() {

	const [auth, setAuth] = useState(true)
	const { pathname } = useLocation();

	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
    


	const [items, setItems] = useState([
	
	]);

	if (pathname.split('/')[1] === 'admin') {
		
		verifyToken().then(resp =>  console.log(resp))	
	}else setAuth(false)
	
	

	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<Routes>
				{
					auth ? <Route path="/admin" element={<AdminLayout />}>
					<Route path="/admin" element={<Home />} />
					<Route path="kateqori" element={<Category />} />
					<Route path="altkateqori" element={<Subcategory />} />
					<Route path="urun" element={<Product/>} />
					<Route path="slayt" element={<Slider/>} />
				</Route> : <Route path="/giris" element={<Login/>} />
				}
				<Route path="/" element={<Layout  items={items} setItems={setItems} />}>
					<Route path="/" element={<Main />} />
					<Route path="/sepet" element={<Basket items={items} />} />
					<Route path="/kampanyalar" element={<Campaigns />} />
					<Route path="/cardInfo" element={<CardInfo />} />
					<Route path="/kateqoriler" element={<Categories />} />
					<Route path="*" element={<Error404 />} />
				</Route>
				<Route>
					<Route path="/giris" element={<Login/>} />
					<Route path="/register" element={<Register/>}/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
