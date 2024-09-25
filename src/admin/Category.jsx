import React, { useState, useRef, Fragment, useEffect } from "react";
import { GrFormEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaQuestion } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import {
  createCategory,
  createImage,
  deleteCategory,
  editCategory,
  getCategories,
} from "../api/api";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";

function Category() {
  const formdata = new FormData();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [catName, setCatName] = useState("");
  const [catId, setcatId] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [catImg, setCatImg] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {

	getCategories().then((resp) => setCategory(resp));

  }, []);

 function addCategory() {

	const obj = { name: catName, img: catImg };
	if (catImg.length !== 0 && catName.trim().length >= 3) {
	  setAddOpen(false);
	  createCategory(obj).then(resp => setCategory([...category, resp])
	  );
	} else toast.error("sekil ve ya category adi elave etmemisen");

  }

  async function handleDelete() {

	setDeleteOpen(false);
	const delCat = await deleteCategory(catId);
	setCategory(category.filter((item) => item.id !== catId));
  }

  function editCategories() {
	  const obj = {name: catName, img: catImg}
	  editCategory(catId,obj).then(resp => console.log(resp))
	  setEditOpen(false)
	  
	
	
  }

  const onDrop = async (acceptedFiles) => {

	formdata.append("img", acceptedFiles[0]);
	const newImg = await createImage(formdata);
	setCatImg([...catImg, newImg.img_url]);

  };
  

  const { getRootProps, getInputProps } = useDropzone({
	onDrop,
	maxFiles: 5,
  });

  return (
	<>
	  <div className="mx-auto pt-[30px] mt-[30px] text-center">
		<h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
		  Kateqori ekle
		</h1>
	  </div>
	  <div className="my-5 w-[85%] lg:w-[70%] px-10 mx-auto py-5">
		<div className="flex items-center">
		  <button
			onClick={() => setAddOpen(true)}
			className="bg-[#278D9B] text-nowrap text-[1em] inline-block py-[.8rem] my-5 px-5 text-white rounded-[5px]"
		  >
			Kateqori ekle
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
				  Kateqori
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
			  {category ? (
				category.map((item, i) => (
				  <tr key={i} className=" border">
					<td
					  scope="row"
					  className="px-6 py-4  gap-2 items-center font-medium"
					>
					  <img
						className="w-[80px] h-[80px] object-cover "
						src={item.img[0]}
						alt={item.name}
					  />
					  {item.name}
					</td>
					<td
					  scope="row"
					  className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
					>
					  <GrFormEdit
						onClick={() => {
						  setcatId(item.id);
						  setEditOpen(true);
						}}
						className="text-[1.45em] cursor-pointer"
					  />
					  <FaRegTrashAlt
						className="cursor-pointer"
						onClick={() => {
						  setcatId(item.id);
						  setDeleteOpen(true);
						}}
					  />
					</td>
				  </tr>
				))
			  ) : (
				<tr className=" border">
				  <td scope="row" className="px-6 py-4 font-medium">
					Yuklenir...
				  </td>
				  <td
					scope="row"
					className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
				  >
					<GrFormEdit
					  onClick={() => setEditOpen(true)}
					  className="text-[1.45em] cursor-pointer"
					/>
					<FaRegTrashAlt
					  className="cursor-pointer"
					  onClick={() => setDeleteOpen(true)}
					/>
				  </td>
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
			  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  onClick={handleDelete}
				  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
				>
				  Evet
				</button>
				<button
				  type="button"
				  data-autofocus
				  onClick={() => setDeleteOpen(false)}
				  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
				>
				  Hayır
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>

	  {/*Add category modal */}

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
				  <div className="mt-3 flex justify-between w-full items-center text-center sm:ml-4 sm:mt-0 sm:text-left">
					<DialogTitle
					  as="h3"
					  className="text-[1.4em] font-semibold leading-6 text-gray-900"
					>
					  Yeni Kateqori ekle
					</DialogTitle>
					<FaXmark
					  className="text-[1.3em] cursor-pointer"
					  onClick={() => setAddOpen(false)}
					/>
				  </div>
				</div>
			  </div>
			  <div className="w-[90%] mx-auto">
				<input
				  type="text"
				  onInput={(e) => setCatName(e.target.value)}
				  className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mb-1 mt-7 "
				  placeholder="Yeni altkateqorinin adı..."
				/>
				{/* <input
				  type="text"
				  onInput={(e) => setSubcatName(e.target.value)}
				  placeholder="Subkateqori adı..."
				  className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mb-7 mt-2 "
				/> */}
			  </div>

			  <div className="my-3 mx-7 ">
				<label
				  htmlFor=""
				  className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
				>
				  Resim ekle!
				</label>
				<div className="space-y-2 text-center">
				  <div
					{...getRootProps({
					  className:
						"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer",
					})}
				  >
					<input {...getInputProps()} />
					<div className="text-center">
					  <svg
						className="mx-auto h-12 w-12 text-gray-300"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					  >
						<path
						  fillRule="evenodd"
						  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
						  clipRule="evenodd"
						/>
					  </svg>
					  <div className="mt-4 flex text-sm leading-6 text-gray-600">
						<p>Resim eklemek için tıkla ve ya sürükle</p>
					  </div>
					  <p className="text-xs leading-5 text-gray-600">
						PNG, JPG, GIF up to 10MB <br />
						maksimum 5 tane
					  </p>
					</div>
				  </div>
				</div>
				<div className="py-3">
				  {catImg &&
					catImg.map((item, i) => (
					  <img
						key={i}
						className="w-[100px] h-[100px] object-cover"
						src={item}
					  />
					))}
				</div>
				<div className="flex my-2 gap-1">
				  {/* {img?.map(item => <img onClick={() => { setImgSrc(item); setDelModal(true) }} className="w-[100px] object-cover" src={item} />)} */}
				</div>
			  </div>
			  <div className="bg-gray-50 gap-3 px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  data-autofocus
				  onClick={addCategory}
				  className="mt-3 inline-flex w-full bg-[#278D9B] justify-center rounded-[5px]  px-7 py-2 text-[.9em] font-semibold text-white shadow-sm  sm:w-auto"
				>
				  Ekle
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>

	  {/* Edit Category modal */}
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
				<div className="sm:flex border-b py-5 sm:items-center">
				  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#278e9b40] sm:mx-0 sm:h-10 sm:w-10">
					<FaQuestion
					  aria-hidden="true"
					  className="h-6 w-6 text-[#278D9B]"
					/>
				  </div>
				  <div className="mt-3 flex justify-between w-full items-center text-center sm:ml-4 sm:mt-0 sm:text-left">
					<DialogTitle
					  as="h3"
					  className="text-[1.4em] font-semibold leading-6 text-gray-900"
					>
					  Kateqoriyi düzenle
					</DialogTitle>
					<FaXmark
					  className="text-[1.3em] cursor-pointer"
					  onClick={() => setEditOpen(false)}
					/>
				  </div>
				</div>
			  </div>
			  <div className="w-[90%] mx-auto">
				<input
				  type="text"
				  value={catName || category.find(item => item.id == catId)?.name }
				  onInput={(e) => setCatName(e.target.value)}
				  className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mb-1 mt-7 "
				  placeholder="Yeni altkateqorinin adı..."
				/>
			  </div>

			  <div className="my-3 mx-7 ">
				<label
				  htmlFor=""
				  className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
				>
				  Resim ekle!
				</label>
				<div className="space-y-2 text-center">
				  <div
					{...getRootProps({
					  className:
						"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer",
					})}
				  >
					<input {...getInputProps()} />
					<div className="text-center">
					  <svg
						className="mx-auto h-12 w-12 text-gray-300"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					  >
						<path
						  fillRule="evenodd"
						  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
						  clipRule="evenodd"
						/>
					  </svg>
					  <div className="mt-4 flex text-sm leading-6 text-gray-600">
						<p>Resim eklemek için tıkla ve ya sürükle</p>
					  </div>
					  <p className="text-xs leading-5 text-gray-600">
						PNG, JPG, GIF up to 10MB <br />
						maksimum 5 tane
					  </p>
					</div>
				  </div>
				</div>
				<div className="py-3">
				  {catImg &&
					catImg.map((item, i) => (
					  <img
						key={i}
						className="w-[100px] h-[100px] object-cover"
						src={item}
					  />
					))}
				</div>
				<div className="flex my-2 gap-1">
				</div>
			  </div>
			  <div className="bg-gray-50 gap-3 px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
				<button
				  type="button"
				  data-autofocus
				  onClick={editCategories}
				  className="mt-3 inline-flex w-full bg-[#278D9B] justify-center rounded-[5px]  px-7 py-2 text-[.9em] font-semibold text-white shadow-sm  sm:w-auto"
				>
				  Düzenle
				</button>
			  </div>
			</DialogPanel>
		  </div>
		</div>
	  </Dialog>
	</>
  );
}

export default Category;
