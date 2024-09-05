import { Route, Routes } from "react-router-dom"
import Main from "./components/main/Main"
import Layout from "./layout/Layout"
import Basket from "./components/main/Basket"
import Error404 from "./components/Error404"

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='*' element={<Error404/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
