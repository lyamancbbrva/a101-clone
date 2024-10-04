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

const cook = new Cookies();

function App() {

	const [auth, setAuth] = useState(false);
	const { pathname } = useLocation();
	const [basket, setBasket] = useState([])


	useEffect(() => {
		window.scroll(0, 0);
		if (pathname.split('/')[1] === 'admin') {
			if (pathname.startsWith('/admin')) {
				const check = verifyToken()
				check.then(res => {
					setAuth(res.status)
					cook.set("user", res.user_login)
				})
			} else setAuth(false);
		}
	}, [pathname]);


	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<Routes>
				{auth == 401 || auth == false ? (
					<Route path="/admin" element={<Login />} />
				) : (
					<Route path="/admin" element={<AdminLayout />}>
						<Route path="/admin" element={<Home />} />
						<Route path="kateqori" element={<Category />} />
						<Route path="altkateqori" element={<Subcategory />} />
						<Route path="urun" element={<Product />} />
						<Route path="slayt" element={<Slider />} />
					</Route>
				)}
				<Route path="/" element={<Layout basket={basket}/>}>
					<Route path="/" element={<Main basket={basket} setBasket={setBasket} />} />
					<Route path="/sepet"  element={<Basket basket={basket} setBasket={setBasket}/>}  />
					<Route path="/kampanyalar" element={<Campaigns />} />
					<Route path="/product/:id" element={<CardInfo basket={basket} setBasket={setBasket} />} />
					<Route path="/:category/:subCategory" element={<Categories  basket={basket} setBasket={setBasket} />} />
				</Route>
				<Route>
					<Route path="/giris" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
