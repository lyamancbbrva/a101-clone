import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./components/main/Main"
import Layout from "./layout/Layout"
import Basket from "./components/main/Basket"
import Error404 from "./components/Error404"
import Kampanyalar from "./components/main/Kampanyalar"
import { useEffect, useState } from "react"
import CardInfo from "./components/main/CardInfo"
import Categories from "./components/main/Categories"

function App() {
    const { pathname } = useLocation()
    useEffect(()=> {
        window.scroll(0, 0)
    }, [pathname])

    const [items, setItems] = useState([
        { id: 1, name: "Lemanin yixildigi skuter1", price: 300.00, count: 1, image: "src/assets/img/test.jpg" },
        { id: 2, name: "Lemanin yixildigi skuter2", price: 200.00, count: 1, image: "src/assets/img/test.jpg" },
        { id: 3, name: "Lemanin yixildigi skuter3", price: 100.00, count: 1, image: "src/assets/img/test.jpg" }
    ]);
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout items={items} setItems={setItems}/>}>
                    <Route path='/' element={<Main />} />
                    <Route path='/basket' element={<Basket items={items}/>} />
                    <Route path='/kampanyalar' element={<Kampanyalar />} />
                    <Route path='/cardInfo' element={<CardInfo />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
