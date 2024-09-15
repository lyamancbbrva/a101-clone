import React, { useState } from "react";
import a101logo from "../assets/img/extra-logo.webp";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Ana sayfa", link: "/admin", icon: IoHomeOutline },
    { name: "Kateqori", link: "kateqori", icon: BiCategory },
    { name: "Altkateqori", link: "altkateqori", icon: IoFolderOpenOutline },
    { name: "Ürün", link: "admin", icon: MdProductionQuantityLimits },
    { name: "Slayt", link: "admin", icon: FaRegImage },
  ];

  return (
    <>
      <nav className="relative">
        <div className="flex sm:hidden justify-between items-center p-5 border-b">
          <div
            id="nav-icon4"
            className={`${sidebar ? "open" : ""}`}
            onClick={() => setSidebar(!sidebar)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link
            to={"/"}
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            <img
              src={a101logo}
              alt="a101 logo"
              className="bg-white max-w-[120px]"
            />
          </Link>
        </div>
        <div
          className={`bg-[#04BCD4] ${
            sidebar ? "translate-x-[0] w-[80vw]" : "translate-x-[-100%]"
          } transform admin-sidebar fixed sm:relative z-10 sm:translate-x-0 shadow-xl  h-screen  hover:sm:w-[40vw] hover:lg:w-[30vw] sm:w-[70px] overflow-hidden hover:xl:w-[20vw]`}
        >
          <div className="p-6 hidden sm:block border-b bg-white ">
            <Link
              to={"/"}
              href="index.html"
              className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            >
              <img
                src={a101logo}
                alt="a101 logo"
                className="bg-white max-w-[70px] ml-[-25px] admin-logo"
              />
            </Link>
          </div>
          <div className="flex h-[85%] flex-col justify-between">
            <div className="text-white text-base  pt-3">
              {links &&
                links.map((item, i) => (
                  <Link
                    to={item.link}
                    key={i}
                    className="flex gap-3 border-b-[#54e4f7] items-center text-white py-4 pl-6"
                  >
                    <item.icon
                      className="text-white mr-3 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
            </div>
            <div>
              <Link className="cursor-pointer pt-2 pl-6 flex gap-3 text-white">
                <RiUserAddLine className="flex-shrink-0 text-[1.4em] w-6 mr-3 " />
                Admin ekle
              </Link>
              <Link className="cursor-pointer pt-2 pl-6 flex gap-3 text-white">
                <TbLogout className="flex-shrink-0 text-[1.4em] w-6 mr-3 " />
                Çıkış yap
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
