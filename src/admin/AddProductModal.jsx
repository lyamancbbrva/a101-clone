// import React, { useEffect, useRef, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { useDropzone } from "react-dropzone";
// import { Editor } from "@tinymce/tinymce-react";
// import configObj from "../config/config";
// import { createImage, createProduct, getCategories } from "../api/api";
// import toast from "react-hot-toast";

// export default function AddProductModal() {
//     const formdata = new FormData()
// 	const apiKey = configObj.editorKey
// 	const editorRef = useRef(null)
// 	const [addOpen, setAddOpen] = useState(false)
// 	const [deleteOpen, setDeleteOpen] = useState(false)
// 	const [category, setCategory] = useState([])
// 	const [product, setProduct] = useState([])
// 	const [id, setId] = useState(0)
// 	const [img, setImg] = useState([])
// 	const [imgSrc, setImgSrc] = useState('')
// 	const [name, setName] = useState('')
// 	const [metaData, setMetaData] = useState('')
// 	const [discount, setDiscount] = useState(0)
// 	const [price, setPrice] = useState(0)

// 	useEffect(() => {
// 		getCategories().then(resp => setCategory(resp))
// 	}, [])

// 	const onDrop = async (acceptedFiles) => {
// 		formdata.append('img', acceptedFiles)
// 		const newImg = await createImage(formdata)
// 		setImg([...img, newImg.img_url])
// 	};

// 	const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 5 });

// 	function addProduct() {
// 		const obj = {
// 			name: name,
// 			isTopSelling: true,
// 			isStok: true,
// 			isCheaps: true,
// 			price: Number(price),
// 			discount: Number(discount),
// 			imageUrl: img,
// 			// sizes: size,
// 			categoryId: Number(id),
// 			subcategoryId: Number(id),
// 			description: editorRef.current.getContent(),
// 			metadata: metaData
// 		}
// 		createProduct(obj).then(res => setProduct([...product, res]))
// 		setAddOpen(!addOpen)
// 		toast.success('Ürün eklendi!')
// 	}

//     return (
//         <>
//             <Transition.Root show={addOpen} as={Fragment}>
//                 <Dialog as="div" className="relative z-10"
//                     onClose={setAddOpen}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                     </Transition.Child>
//                     <div className="fixed inset-0 z-10 overflow-y-auto">
//                         <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                             >
//                                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl sm:p-11">
//                                     <div className="flex justify-between pb-4 border-b border-gray-500">
//                                         <p className='font-bold text-xl'>
//                                             {true ? "Ürünü düzenle" : 'Yeni ürün ekle'}
//                                         </p>
//                                         <XMarkIcon onClick={() => setAddOpen(false)} className='text-gray-400 w-6 cursor-pointer hover:text-red-600' />
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Ürün ismi</label>
//                                         <input
//                                             onInput={(e) => setName(e.target.value)}
//                                             type="text"
//                                             className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
//                                             placeholder="Ürün ismi"
//                                         />
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Kateqoriya seçin:</label>
//                                         <select
//                                             onChange={(e) => setId(e.target.value)}
//                                             className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
//                                             <option>Kateqori seçin:</option>
//                                             {
//                                                 category && category.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
//                                             }
//                                         </select>
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Subkateqoriya:</label>
//                                         <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm">
//                                             <option>alt kateqori seçin</option>
//                                             {
//                                                 category?.filter(item => item.id == id)[0]?.subcategory?.map((item, i) => <option key={i}>{item.name}</option>)
//                                             }
//                                         </select>
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">İndirim Oranı (%):</label>
//                                         <input
//                                             onInput={(e) => { setDiscount(e.target.value) }}
//                                             type="number"
//                                             placeholder='0'
//                                             className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
//                                         />
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Ürün fiyatı:</label>
//                                         <input
//                                             onInput={(e) => setPrice(e.target.value)}
//                                             type="number"
//                                             placeholder='123'
//                                             className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
//                                         />
//                                     </div>
//                                     <div className="my-3">
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Resim ekle!</label>
//                                         <div className="space-y-2 text-center">
//                                             <div
//                                                 {...getRootProps({
//                                                     className: 'mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer',
//                                                 })}
//                                             >
//                                                 <input {...getInputProps()} />
//                                                 <div className="text-center">
//                                                     <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                                                         <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
//                                                     </svg>
//                                                     <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                                                         <p>Resim eklemek için tıkla ve ya sürükle</p>
//                                                     </div>
//                                                     <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB <br />
//                                                         maksimum 5 tane
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex my-2 gap-1">
//                                             {img?.map(item => <img onClick={() => { setImgSrc(item); }} className="w-[100px] object-cover" src={item} />)}
//                                         </div>
//                                     </div>
//                                     <div className='my-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Ürün hakkında bilgi</label>
//                                         <Editor
//                                             apiKey={apiKey}
//                                             onInit={(_, editor) => editorRef.current = editor}
//                                             initialValue={"Ürün hakkında bilgi yazınız..."}
//                                             init={{
//                                                 height: 300,
//                                                 menubar: true,
//                                                 branding: false,
//                                                 plugins: [
//                                                     'advlist autolink lists link image charmap print preview anchor',
//                                                     'searchreplace visualblocks code fullscreen',
//                                                     'insertdatetime media table paste code help wordcount'
//                                                 ],
//                                                 toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
//                                             }}
//                                             textareaName="description"
//                                         />
//                                     </div>
//                                     <div className='mb-3 border-b border-gray-400 py-3'>
//                                         <label htmlFor="" className="block text-[12px] py-2 font-bold text-gray-700 uppercase">Meta bilgi</label>
//                                         <textarea
//                                             onInput={(e) => setMetaData(e.target.value)}
//                                             name="" id="" className='text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm' placeholder='Meta bilgileri ekleyiniz...'></textarea>
//                                     </div>
//                                     <button
//                                         onClick={() => { addProduct() }}
//                                         // onClick={() => { product ? updateProduct() : addProduct() }}
//                                         className='bg-[#278D9B] w-full sm:w-32 text-white rounded-md p-2 px-3 font-semibold'>
//                                         {true ? 'Düzenle' : 'Ekle'}
//                                     </button>
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition.Root >
//         </>
//     )
// }
