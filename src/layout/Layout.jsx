import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Layout({items, setItems}) {
    return (
        <>
            <Header items={items} setItems={setItems}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout