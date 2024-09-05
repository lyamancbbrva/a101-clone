import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./components/main/Main"
import Layout from "./layout/Layout"
import Basket from "./components/main/Basket"
import Error404 from "./components/Error404"
import Kampanyalar from "./components/main/Kampanyalar"
import { useEffect } from "react"
import CardInfo from "./components/main/CardInfo"

function App() {
    const { pathname } = useLocation()
    useEffect(()=> {
        window.scroll(0, 0)
    }, [pathname])
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='/kampanyalar' element={<Kampanyalar />} />
                    <Route path='/cardInfo' element={<CardInfo />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
