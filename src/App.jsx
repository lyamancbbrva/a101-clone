import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./components/main/Main"
import Layout from "./layout/Layout"
import Basket from "./components/main/Basket"
<<<<<<< HEAD
import Error404 from "./components/Error404"
=======
import Kampanyalar from "./components/main/Kampanyalar"
import { useEffect } from "react"
>>>>>>> 271724f0b475a092069b6999593c166df731c101

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
<<<<<<< HEAD
                    <Route path='*' element={<Error404/>} />
=======
                    <Route path='/kampanyalar' element={<Kampanyalar />} />
                    <Route path='*' element={<Error404 />} />
>>>>>>> 271724f0b475a092069b6999593c166df731c101
                </Route>
            </Routes>
        </>
    )
}

export default App
