import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./components/main/Main"
import Layout from "./layout/Layout"
import Error404 from "./components/main/Error404"
import Basket from "./components/main/Basket"
import Kampanyalar from "./components/main/Kampanyalar"
import { useEffect } from "react"

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
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
