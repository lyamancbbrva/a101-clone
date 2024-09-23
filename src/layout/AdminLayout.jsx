import React from "react";
import Nav from "../admin/Nav";
import { Link, Outlet } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, Square2StackIcon } from "@heroicons/react/16/solid";

function AdminLayout() {

  return (
	<div className="sm:flex gap-5 relative">
	  <div className="fixed hidden md:block bg-white w-[100%] top-0 right-0 shadow-md  h-[70px] z-[8]"></div>
	  <div className="fixed top-3 hidden md:block right-10 text-right z-[9]">
		<Menu>
		  <MenuButton className="inline-flex items-center gap-4 rounded-md py-1.5 px-3 text-sm/6 font-semibold ">
			<img
			  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvljIOzu5-cOANxNofDDPKR7eZvTBWpMQAQQ&s"
			  alt="quzu"
			  className="w-[40px] h-[40px] object-cover rounded-full "
			/>
			<span>Xezer</span>
			<ChevronDownIcon className="size-4 " />
		  </MenuButton>

		  <MenuItems
			transition
			anchor="bottom end"
			className="w-48 origin-top-right rounded-xl bg-white my-2 shadow-xl p-1  transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
		  >
			<Link to={'/giris'}>
			<MenuItem>
			  <button className="group flex w-full hover:bg-[#f1f1f1] items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
				<TbLogout className="flex-shrink-0 text-[1.1em] w-6 mr-3 " />
				Çıkış yap
				<kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
				  ⌘E
				</kbd>
			  </button>
			</MenuItem></Link>
			<Link to={'/register'}>
			<MenuItem>
			  <button className="group text-nowrap overflow-hidden hover:bg-[#f1f1f1] flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
				<RiUserAddLine className="flex-shrink-0 text-[1.1em] w-6 mr-3 " />
				Yeni admin ekle
				<kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
				  ⌘D
				</kbd>
			  </button>
			</MenuItem></Link>
			<div className="my-1 h-px bg-white/5" />
		  </MenuItems>
		</Menu>
	  </div>

	  <Nav />
	  <main className="w-full">
		<Outlet />
	  </main>
	</div>
  );
}

export default AdminLayout;
