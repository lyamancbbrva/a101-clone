import React from 'react'
import a101logo from '../assets/img/extra-logo.webp'

function Nav() {
  return (
    <nav className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6 border-b">
          <a
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            <img src={a101logo} alt="a101 logo" className='bg-white '/>
          </a>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
           Ana Sayfa
          </a>
          <a
            href="blank.html"
            className="flex items-center text-white py-4 pl-6 nav-item"
          >
            <i className="fas fa-sticky-note mr-3"></i>
           Kateqori
          </a>
          <a
            href="tables.html"
            className="flex items-center text-white  py-4 pl-6 nav-item"
          >
            <i className="fas fa-table mr-3"></i>
            Subkateqori
          </a>
          <a
            href="forms.html"
            className="flex items-center text-white  py-4 pl-6 nav-item"
          >
            <i className="fas fa-align-left mr-3"></i>
            Ürün
          </a>
        </nav>

      </nav>
  )
}

export default Nav