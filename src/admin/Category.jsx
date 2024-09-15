import React, { useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FaQuestion } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

function Category() {

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [catName, setCatName] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);



  return (

    <>

      <div className="mx-auto pt-[30px] mt-[30px] text-center">
        <h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
          Kateqori ekle
        </h1>
      </div>
      <div className="my-5 container mx-auto py-5">
        <div className="flex items-center">
          <input
            type="text"
            onInput={(e) => setCatName(e.target.value)}
            className="w-[85%] outline-none text-[1em] border rounded-tl-[5px] rounded-bl-[5px] inline-block py-3 px-4 my-5 "
            placeholder="Yeni kateqorinin adı..."
          />
          <button
            onClick={() => {
			  catName.trim().length <= 3 || catName.trim() == '' ? toast.error('Kateqori ismini düz yazda.') : setCatOpen(true)
            }}
            className="bg-[#278D9B] text-[1em] inline-block py-[1px] my-5 lg:py-[.8rem] px-5 text-white rounded-br-[5px] rounded-tr-[5px]"
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
                  Kateqori adı
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
              <tr className=" border">
                <td scope="row" className="px-6 py-4 font-medium">
                  {catName}
                </td>
                <td
                  scope="row"
                  className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
                >
                  <GrFormEdit
				  onClick={() => setEditOpen(true)}
				  className="text-[1.45em] cursor-pointer" />
                  <FaRegTrashAlt
                    className="cursor-pointer"
                    onClick={() => setDeleteOpen(true)}
                  />
                </td>
              </tr>
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
					onClick={() => setDeleteOpen(false)}
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
		<Dialog open={catOpen} onClose={setCatOpen} className="relative z-10">
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
						<FaQuestion
						aria-hidden="true"
						className="h-6 w-6 text-[#278D9B]"
						/>
					</div>
					<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
						<DialogTitle
						as="h3"
						className="text-base font-semibold leading-6 text-gray-900"
						>
						Kateqori eklensin mi ?
						</DialogTitle>
					</div>
					</div>
				</div>
				<div className="bg-gray-50 gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<button
					type="button"
					data-autofocus
					onClick={() => setCatOpen(false)}
					className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
					>
					Evet
					</button>
					<button
					type="button"
					onClick={() => setCatOpen(false)}
					className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
					>
					Hayır
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
						Kateqori ismini değişmek istediğine emin misin ?
						</DialogTitle>
					</div>
					</div>
					<input type="text" placeholder="kateqori ismi" className="border ml-14 outline-none border-[#278e9baa] rounded-[5px] py-1 px-4  inline-block my-3"/>
				</div>
				<div className=" gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<button
					type="button"
					data-autofocus
					onClick={() => setEditOpen(false)}
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

export default Category;
