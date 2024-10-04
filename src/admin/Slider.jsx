import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";
import { createImage, createSlider, deleteSlider, getCategories, getSlider } from "../api/api";
import toast from "react-hot-toast";

function Slider() {
  const formdata = new FormData();

  const initialObj = {
  img: "",
  categoryId: 0,
  subcategoryId: 0
  }
  const [addOpen, setAddOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [slider, setSlider] = useState(initialObj)
  const [category, setCategory] = useState([]);
  const [allSliders, setAllSliders] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    getCategories().then((resp) => setCategory(resp));
    getSlider().then(resp => setAllSliders(resp))
  }, []);
  

  function addSlider() {
    
    createSlider(slider).then((res) => setAllSliders([...allSliders, res]));
    setAddOpen(false);
    setSlider(initialObj)
  }

  function delSlider() {

    deleteSlider(id)
    setAllSliders(allSliders.filter(item => item.id !== id))
    setDeleteOpen(false)
    
  }

  const onDrop = async (acceptedFiles) => {


    formdata.append("img", acceptedFiles[0]);
    const newSlide = await createImage(formdata);
    setSlider({...slider, img: newSlide.img_url})

  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <>
      <div className="mx-auto pt-[30px] mt-[30px] text-center">
        <h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
          Yeni Slide Resmi ekle
        </h1>
      </div>
      <div className="my-5 w-[85%] lg:w-[70%] mx-auto py-5">
        <div className="flex items-center">
          <button
            onClick={() => {
              setAddOpen(true);
            }}
            className="bg-[#278D9B] text-nowrap text-[1em] inline-block py-[.8rem] my-5 px-5 text-white rounded-[5px]"
          >
            Yeni slide resmi ekle
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
                  slide resmi
                </th>
                <th
                  scope="col"
                  colSpan={1}
                  className="text-[1.6em] p-5 text-white "
                >
                  Kateqori ismi
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
              {
                allSliders.length > 0 ? allSliders.map((item, i) => <tr key={i} className=" border">
                    <td scope="row" className="px-6 py-4 font-medium">
                      <img
                        className="w-[50px] h-[50px] rounded-full object-cover "
                        src={item.img}
                        alt={item.img}
                      />
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium">
                      {category.find(elem => elem.id == item.categoryId).name}
                    </td>
                    <td
                      scope="row"
                      className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
                    >
                      <FaRegTrashAlt
                        className="cursor-pointer"
                        onClick={() => {setDeleteOpen(true); setId(item.id)}}
                      />
                    </td>
                  </tr>
                  )
                  :
                  <tr className=" border">
                <td scope="row" className="px-6 py-4 font-medium">
                 Slider yok
                </td>
                <td
                  scope="row"
                  className="px-6 flex gap-2 justify-center items-center py-4 font-medium"
                >
                  <FaRegTrashAlt
                    className="cursor-pointer"
                    onClick={() => setDeleteOpen(true)}
                  />
                </td>
              </tr>
              }
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
                      Slide resmini silmek istediğine emin misin ?
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() =>delSlider()}
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

      <Transition.Root show={addOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setAddOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl sm:p-11">
                  <div className="flex justify-between pb-4 border-b border-gray-500">
                    <p className="font-bold text-xl">Yeni slide resmi ekle</p>

                    <XMarkIcon
                      onClick={() => setAddOpen(false)}
                      className="text-gray-400 w-6 cursor-pointer hover:text-red-600"
                    />
                  </div>
                  <div>
                    <select
                      onChange={(e) => setSlider({...slider, categoryId: e.target.value})}
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
                    <select
                      onChange={(e) => setSlider({...slider, subcategoryId: e.target.value})}
                      className="w-full outline-none text-[1em] border rounded-[5px] inline-block py-3 px-4 mt-7 mb-2 "
                    >
                      <option>Kateqori seç</option>
                      {category &&
                        category
                          .find((item) => item.id == slider.categoryId)
                          ?.subcategory?.map((elem, i) => (
                            <option value={elem.id} key={i}>{elem.name}</option>
                          ))}
                    </select>
                  </div>
                  <div className="my-3">
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
                            maksimum 1 tane
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-2 gap-1">
                      { 
                        <img
                        //   onClick={() => {
                        //     setImgSrc(item);
                        //     setDelModal(true);
                        //   }}
                          className="w-[150px] h-[70px] object-contain"
                          src={slider.img}
                        />
                      }
                    </div>
                  </div>

                  <button
                    onClick={addSlider}
                    className="bg-[#278D9B] w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold"
                  >
                    Ekle
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Slider;
