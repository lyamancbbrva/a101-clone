import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { GrFormEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import { createSubcategory, deleteSubcategory, editSubcategory, getCategories } from "../api/api";

function Subcategory() {

  const [subcatName, setSubcatName] = useState();
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [catId, setCatId] = useState();
  const [subcatId, setSubcatId] = useState();
  const [category, setCategory] = useState([]);
  const [subcat, setSubcat] = useState([]);

  useEffect(() => {
	getCategories().then((resp) => setCategory(resp));
  }, []);
  
  

   async function addSubcat() {

   const obj = { name: subcatName, categoryId: catId };
	
    if (subcatName.trim().length >= 3) {
		const newSubcat = await createSubcategory(obj)
		console.log(newSubcat);
		
		setSubcat([...subcat, obj])
		setAddOpen(false);
		
    } else toast.error("subcat ve ya select sec");
    
	
  }

  function editSubCategory() {

	setEditOpen(false)

	const obj = {name: subcatName}
	console.log(category);
	console.log(obj);
	console.log(subcatId);
	editSubcategory(subcatId,obj).then(resp => console.log(resp))

  }
  
  

  function delSubcat() {

	setDeleteOpen(false);
	deleteSubcategory(subcatId)
	setSubcat(subcat.filter((item) => item.id !== subcatId))
	
  }

  function handleSubcat(e) {
	setSubcat(category.find((item) => item.id == e.target.value).subcategory);
	}

  return (
	<>
	  <div className="mx-auto pt-[30px] mt-[30px] text-center">
		<h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
		  Altkateqori ekle
		</h1>
	  </div>
	  <div className="my-5 w-[85%] lg:w-[70%] px-10 mx-auto py-5">
		<div className="flex items-center">
		  <select
			onChange={handleSubcat}
			className="w-[85%] lg:w-[90%] outline-none text-[1em] border rounded-tl-[5px] rounded-bl-[5px] inline-block py-3 px-4 my-5 "
		  >
			<option defaultValue>Kateqori seç</option>
			{category ? (
			  category.map((item,i) => (
				<option value={item.id} key={i}>
				  {item.name}
				</option>
			  ))
			) : (
			  <option>yoxdu qaqa ged kateqori yarat qadan alim</option>
			)}
		  </select>
		  <button
			onClick={() => setAddOpen(true)}
			className="bg-[#278D9B] text-nowrap text-[1em] inline-block my-5 py-[.7rem] px-5 text-white rounded-br-[5px] rounded-tr-[5px]"
		  >
			Altkateqori ekle
		  </button>
		</div>
		<div className="relative mx-auto rounded-[5px] overflow-x-auto">
		  <table className="text-sm text-left  w-full ">
			<thead className="text-xs bg-[#278d9b]">
			  <tr>
				<th
				  scope="col"
				  colSpan={1}
				  className="text-[1.6em] p-5 text-white "
				>
				  Altkateqori adı
				</th>
				<th
				  scope="col"
				  colSpan={1}
				  className="text-[1.6em] text-center p-5 text-white "
				>
				  Sil ve ya düzenle
				</th>
			  </tr>
			</thead>
			<tbody className="text-black text-[1.2em]">
			  {subcat.length > 0 ? (
				subcat.map((item,i) => (
				  <tr key={i} className=" border">
					<td scope="row" className="px-6 py-4 font-medium">
					  {item.name}
					</td>

					<td
					  scope="row"
					  className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
					>
					  <GrFormEdit
						onClick={() =>{ {setSubcatId(item.id); setEditOpen(true)}}}
						className="text-[1.45em] cursor-pointer"
					  />
					  <FaRegTrashAlt
						className="cursor-pointer"
						onClick={() =>{setDeleteOpen(true); setSubcatId(item.id)}}
					  />
					</td>
				  </tr>
				))
			  ) : (
				<tr className=" border">
				  <td scope="row" className="px-6 py-4 font-medium">
					heleki subcat yoxdu qaqa
				  </td>

				  <td
					scope="row"
					className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
				  ></td>
				</tr>
			  )}
			</tbody>
		  </table>
		</div>
	  </div>

	  {/* Delete modal */}

	  <Dialog
		open={deleteOpen}
		onClose={setDeleteOpen}
		className="relative z-10"
	  >
		<DialogBackdrop
		  transition
		  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
		/>

		<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
		  <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
			<DialogPanel
			  transition
			  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
			>
			  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="sm:flex sm:items-center">
				  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
					<ExclamationTriangleIcon
					  aria-hidden="true"
					  className="h-6 w-6 text-red-600"
					/>
				  </div>
				  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
					<DialogTitle
					  as="h3"
					  className="text-base font-semibold leading-6 text-gray-900"
					>
					  Kateqoriyi silmek istediğine emin misin ?
					</DialogTitle>
				  </div>
				</div>
			  </div>
			  <div className=" gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  data-autofocus
				  onClick={delSubcat}
				  className="mt-3 inline-flex w-full bg-[#278e9b] justify-center rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm sm:mt-0 sm:w-auto"
				>
				  Evet
				</button>
				<button
				  type="button"
				  onClick={() => {
					setDeleteOpen(false);
				  }}
				  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
				>
				  Hayır
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>

	  {/*Add subcategory modal */}
	  <Dialog open={addOpen} onClose={setAddOpen} className="relative z-10">
		<DialogBackdrop
		  transition
		  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
		/>
		<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
		  <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
			<DialogPanel
			  transition
			  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
			>
			  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="sm:flex border-b py-5 sm:items-center">
				  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#278e9b40] sm:mx-0 sm:h-10 sm:w-10">
					<FaQuestion
					  aria-hidden="true"
					  className="h-6 w-6 text-[#278D9B]"
					/>
				  </div>
				  <div className="mt-3 items-center justify-between w-full flex text-center sm:ml-4 sm:mt-0 sm:text-left">
					<DialogTitle
					  as="h3"
					  className="text-[1.4em] font-semibold leading-6 text-gray-900"
					>
					  Alt Kateqori ekle
					</DialogTitle>

					<FaXmark
					  className="text-[1.3em] cursor-pointer"
					  onClick={() => setAddOpen(false)}
					/>
				  </div>
				</div>
			  </div>
			  <div className="w-[90%] mx-auto">
				<select
				  onChange={(e) => setCatId(e.target.value)}
				  className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mt-7 mb-2 "
				>
				  <option defaultValue>Kateqori seç</option>
				  {category &&
					category.map((item, i) => (
					  <option key={i} value={item.id}>
						{item.name}
					  </option>
					))}
				</select>
				<input
				  type="text"
				  onInput={(e) => setSubcatName(e.target.value)}
				  className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mt-1 mb-7 "
				  placeholder="Yeni altkateqorinin adı..."
				/>
			  </div>
			  <div className=" gap-3 px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  data-autofocus
				  onClick={addSubcat}
				  className="mt-3 inline-flex w-full bg-[#278e9b] justify-center rounded-md text-white px-7 py-2 text-sm font-semibold shadow-sm sm:mt-0 sm:w-auto"
				>
				  Ekle
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>

	  {/* Edit subcategory modal */}
	  <Dialog open={editOpen} onClose={setEditOpen} className="relative z-10">
		<DialogBackdrop
		  transition
		  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
		/>

		<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
		  <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
			<DialogPanel
			  transition
			  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
			>
			  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="sm:flex sm:items-center">
				  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#278e9b40] sm:mx-0 sm:h-10 sm:w-10">
					<FaRegEdit
					  aria-hidden="true"
					  className="h-6 w-6 text-[#278D9B]"
					/>
				  </div>
				  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
					<DialogTitle
					  as="h3"
					  className="text-base font-semibold leading-6 text-gray-900"
					>
					  Altkateqori ismini değişmek istediğine emin misin ?
					</DialogTitle>
				  </div>
				</div>
				<input
				  value={subcatName || subcat.find(item => item.id == subcatId)?.name}
				  onInput={(e) => setSubcatName(e.target.value)}
				  type="text"
				  placeholder="altkateqori ismi"
				  className="border ml-14 outline-none border-[#278e9baa] rounded-[5px] py-1 px-4  inline-block my-3"
				/>
			  </div>
			  <div className=" gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  data-autofocus
				  onClick={editSubCategory}
				  className="mt-3 inline-flex w-full bg-[#278e9b] justify-center rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm sm:mt-0 sm:w-auto"
				>
				  Evet
				</button>
				<button
				  type="button"
				  onClick={() => setEditOpen(false)}
				  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
				>
				  Hayır
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>
	</>
  );
}

export default Subcategory;
