import React, { Fragment, useEffect, useRef, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
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
import { Editor } from "@tinymce/tinymce-react";
import configObj from "../config/config";
import {
  createImage,
  createProduct,
  deleteProduct,
  editProduct,
  getCategories,
  getProducts,
} from "../api/api";
import toast from "react-hot-toast";

function Product() {
  const formdata = new FormData();
  const apiKey = configObj.editorKey;
  const editorRef = useRef(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [catId, setCatId] = useState(0);
  const [subcatId, setSubcatId] = useState(0);
  const [productId, setProductId] = useState(0);
  const [img, setImg] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");
  const [metaData, setMetaData] = useState("");
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getCategories().then((resp) => setCategory(resp));
    getProducts().then((resp) => setProduct(resp));
  }, []);

  async function addProduct() {
    const obj = {
      name: name,
      isTopSelling: true,
      isStok: true,
      isCheaps: true,
      price: price,
      discount: discount,
      imageUrl: img,
      sizes: ["salam", "necesen"],
      categoryId: catId,
      subcategoryId: subcatId,
      description: "zaysu",
      metadata: metaData,
    };

    const newProduct = await createProduct(obj);
    setImg("");
    if (newProduct.status == true) {
      setProduct([...product, newProduct]);
    } else toast.error("Product yarannamadi");

    setAddOpen(!addOpen);
    console.log(metaData);
  }

  console.log(product);
  new Array(product?.find((item) => item.id == productId)?.imageUrl?.length)
    .fill(product?.find((item) => item.id == productId)?.imageUrl)
    .map((item) => (
      <div>
        <img
          className="w-[100px]"
          src={product.find((item) => item.id == productId)?.imageUrl}
          alt=""
        />
      </div>
    ));

  // function editProd() {
  // 	console.log('zatna nehlet bunu cixaranin');
  // 	setAddOpen(!addOpen)
  // 	// editProduct(obj)
  // }

  async function handleDelete() {
    await deleteProduct(productId);
    setProduct(product.filter((item) => item.id !== productId));
    toast.success("Ürünü sildün!");
  }

  const onDrop = async (acceptedFiles) => {
    formdata.append("img", acceptedFiles[0]);
    const newImg = await createImage(formdata);
    setImg([...img, newImg.img_url]);
    console.log(imgSrc);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 5 });

  return (
    <>
      <div className="mx-auto pt-[30px] mt-[30px] text-center">
        <h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
          Yeni ürün ekle
        </h1>
      </div>
      <div className="my-5 w-[85%] lg:w-[70%] mx-auto py-5">
        <div className="flex items-center">
          <button
            onClick={() => setAddOpen(true)}
            className="bg-[#278D9B] text-nowrap text-[1em] inline-block py-[.8rem] my-5 px-5 text-white rounded-[5px]"
          >
            Yeni ürün ekle
          </button>
        </div>
        <div className="relative mx-auto rounded-[5px] overflow-x-auto">
          <table className="text-sm text-left  w-full ">
            <thead className="text-xs bg-[#278d9b]">
              <tr>
                <th
                  scope="col"
                  colSpan={1}
                  className="text-[1.2em] p-5 text-white "
                >
                  Resim, Ürün adı
                </th>
                <th
                  scope="col"
                  colSpan={1}
                  className="text-[1.2em] p-5 text-white "
                >
                  Indirim
                </th>
                <th
                  scope="col"
                  colSpan={1}
                  className="text-[1.2em] p-5 text-white "
                >
                  Fiyat
                </th>
                <th
                  scope="col"
                  colSpan={1}
                  className="text-[1.2em] text-center p-5 text-white "
                >
                  Sil ve ya düzenle
                </th>
              </tr>
            </thead>
            <tbody className="text-black text-[1.2em]">
              {product.length > 0 ? (
                product.map((item, i) => {
                  const { name, discount, price } = item;

                  return (
                    <tr key={i} className="hover:bg-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={
                                item?.imageUrl?.length > 0
                                  ? item.imageUrl[0]
                                  : item.imageUrl
                              }
                              alt={name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <div className="text-red-600 font-semibold">
                          {discount} %
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex px-2">{price} TL</span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center justify-center gap-2">
                          <GrFormEdit
                            onClick={() => {
                              setProductId(item.id);
                              setEditOpen(true);
                              setAddOpen(true);
                            }}
                            className="text-[1.8em] cursor-pointer hover:text-blue-500"
                          />
                          <FaRegTrashAlt
                            onClick={() => {
                              setDeleteOpen(true);
                              setProductId(item.id);
                            }}
                            className="text-[1.2em] cursor-pointer hover:text-red-700"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    Henüz ürün bulunmamaktadır...
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
                      Ürünü silmek istediğine emin misin ?
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => {
                    setDeleteOpen(false);
                    handleDelete();
                  }}
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
                    <p className="font-bold text-xl">
                      {!editOpen ? "Yeni ürün ekle" : "Ürünü düzenle"}
                    </p>
                    <XMarkIcon
                      onClick={() => setAddOpen(false)}
                      className="text-gray-400 w-6 cursor-pointer hover:text-red-600"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      Ürün ismi
                    </label>
                    <input
                      value={
                        editOpen
                          ? name ||
                            product?.find((item) => item.id == productId)?.name
                          : name
                      }
                      onInput={(e) => setName(e.target.value)}
                      type="text"
                      className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                      placeholder="Ürün ismi"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      Kateqoriya seçin:
                    </label>
                    <select
                      onChange={(e) => setCatId(e.target.value)}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                    >
                      <option>Kateqori seçin:</option>
                      {category &&
                        category.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      Subkateqoriya:
                    </label>
                    <select
                      onClick={(e) => setSubcatId(e.target.value)}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                    >
                      <option>alt kateqori seçin</option>
                      {category
                        ?.filter((item) => item.id == catId)[0]
                        ?.subcategory?.map((item, i) => (
                          <option key={i} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      İndirim Oranı (%):
                    </label>
                    <input
                      value={
                        editOpen
                          ? discount ||
                            product?.find((item) => item.id == productId)
                              ?.discount
                          : discount
                      }
                      onInput={(e) => setDiscount(e.target.value)}
                      type="number"
                      placeholder="0"
                      className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      Ürün fiyatı:
                    </label>
                    <input
                      value={
                        editOpen
                          ? price ||
                            product.find((item) => item.id == productId).price
                          : price
                      }
                      onInput={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="123"
                      className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
                    />
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
                            maksimum 5 tane
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-2 gap-1">
                      {editOpen
                        ? product
                            ?.find((item) => item.id == productId)
                            ?.imageUrl?.map((url) => (
                              <div key={url}>
                                <img className="w-[100px]" src={url} />
                              </div>
                            ))
                        : img.map((item, i) => (
                            <img
                              key={i}
                              onClick={() => setImgSrc(item)}
                              className="w-[100px] object-cover"
                              src={item}
                            />
                          ))}
                    </div>
                  </div>
                  {/* <div className='my-3'>
										<label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Ürün hakkında bilgi</label>
										<Editor
											apiKey={apiKey}
											onInit={(_, editor) => editorRef.current = editor}
											initialValue={"Ürün hakkında bilgi yazınız..."}
											init={{
												height: 300,
												menubar: true,
												branding: false,
												plugins: [
													'advlist autolink lists link image charmap print preview anchor',
													'searchreplace visualblocks code fullscreen',
													'insertdatetime media table paste code help wordcount'
												],
												toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
											}}
											textareaName="description"
										/>
					</div> */}
                  <div className="mb-3 border-b border-gray-400 py-3">
                    <label
                      htmlFor=""
                      className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
                    >
                      Meta bilgi
                    </label>
                    <textarea
                      value={
                        editOpen
                          ? metaData ||
                            product.find((item) => item.id == productId)
                              ?.metadata
                          : metaData
                      }
                      onInput={(e) => setMetaData(e.target.value)}
                      className="text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm"
                      placeholder="Meta bilgileri ekleyiniz..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => {
                      addProduct();
                    }}
                    className="bg-[#278D9B] w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold"
                  >
                    {!editOpen ? "Ekle" : "Düzenle"}
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

export default Product;
