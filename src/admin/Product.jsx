import React, { Fragment, useEffect, useRef, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, } from "@headlessui/react";
import { ExclamationTriangleIcon, XMarkIcon, } from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";
import { Editor } from "@tinymce/tinymce-react";
import configObj from "../config/config";
import { createImage, createProduct, deleteImage, deleteProduct, editProduct, getCategories, getProducts, } from "../api/api";
import toast from "react-hot-toast";

function Product() {
	const formdata = new FormData();

	const initialObj = {
		name: "",
		isTopSelling: false,
		isStok: false,
		isCheaps: false,
		price: 0,
		discount: 0,
		imageUrl: [],
		sizes: [],
		categoryId: 0,
		subcategoryId: 0,
		description: "",
		metadata: "",
	};
	const [mehsul, setMehsul] = useState(initialObj);
	const [product, setProduct] = useState([]);
	const [addOpen, setAddOpen] = useState(false);
	const [imgDelOpen, setImgDelOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [category, setCategory] = useState([]);
	const [catId, setCatId] = useState(0);
	const [productId, setProductId] = useState(0);
	const [img, setImg] = useState([]);
	const [imgSrc, setImgSrc] = useState("");

	useEffect(() => {
		getCategories().then((resp) => setCategory(resp));
		getProducts().then((resp) => setProduct(resp.products));
	}, []);

	const handleEditorChange = (newContent) => {
		const elem = document.createElement("div");
		elem.innerHTML = newContent;
		const text = newContent.textContent || elem.innerText || "";
		setMehsul({ ...mehsul, description: text });
	};


	async function addProduct() {

		console.log(mehsul);
		const newProduct = await createProduct(mehsul);
		if (newProduct.status == true) {
			if (newProduct.status == true) setProduct([...product, newProduct]);
		} else toast.error("Product yarannamadi");
		setAddOpen(!addOpen);
		setMehsul(initialObj)
	}

	function deleteImg() {
		
		const url = imgSrc.split("/").at(-1);
		deleteImage(url).then((res) => console.log(res));
		console.log(url);
		
	}

	function editProducts() {
		console.log(mehsul);
		editProduct(productId, { ...mehsul }).then((res) => {
			setProduct(product.map(item => item.id == productId ? res : item))
			setAddOpen(false)
			setEditOpen(false)
			setMehsul(initialObj)
			toast.success('Ürün yenilendi!');
		})
	}

	async function handleDelete() {
		await deleteProduct(productId);
		setProduct(product.filter((item) => item.id !== productId));
		toast.success("Ürünü sildün!");
	}

	const onDrop = async (acceptedFiles) => {
		formdata.append("img", acceptedFiles[0]);
		const newImg = await createImage(formdata);
		setImg([...img, newImg.img_url])
		setMehsul({ ...mehsul, imageUrl: [newImg.img_url] });
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 5 });

	return (
		<>
			<div className="mx-auto pt-[30px] mt-[30px] text-center">
				<h1 className="text-4xl py-5 mt-[30px] font-bold leading-none sm:text-5xl">
					Yeni ürün ekle
				</h1>
			</div>
			<div className="my-5 w-[85%] lg:w-[70%] mx-auto p-5">
				<div className="flex items-center">
					<button
						onClick={() => { setEditOpen(false); setAddOpen(true) }}
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
																item?.imageUrl?.length > 0 ? item?.imageUrl[0] : item?.imageUrl
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
															setImgDelOpen(false);
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
											{imgDelOpen
												? "Resimi Silmek Istedigine eminmisin?"
												: "Ürünü silmek istediğine emin misin ?"}
										</DialogTitle>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									onClick={() => {
										setDeleteOpen(false);
										imgDelOpen ? deleteImg() : handleDelete();
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
											value={editOpen ? (mehsul.name || product.find(item => item.id == productId).name) : mehsul.name}
											onInput={(e) =>
												setMehsul({ ...mehsul, name: e.target.value })
											}
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
											value={editOpen ? (mehsul.categoryId || product.find(item => item.id == productId).categoryId) : mehsul.categoryId}
											onChange={(e) => {
												setCatId(e.target.value);
												setMehsul({ ...mehsul, categoryId: e.target.value });
											}}
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
											onChange={(e) => setMehsul({ ...mehsul, subcategoryId: e.target.value })}
											value={editOpen ? (product.find(item => item.id == productId).subcategoryId || mehsul.subcategoryId) : mehsul.subcategoryId}
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
											value={editOpen ? (mehsul.discount || product.find(item => item.id == productId).discount) : mehsul.discount}
											onInput={(e) =>setMehsul({ ...mehsul, discount: e.target.value })}
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
											value={editOpen ? (mehsul.price || product.find(item => item.id == productId).price) : mehsul.price}
											onInput={(e) => setMehsul({ ...mehsul, price: e.target.value })}
											type="number"
											placeholder="123"
											className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 border outline-indigo-600 shadow-sm"
										/>
										<div className="py-5">
											<label className="block" htmlFor="">
												<input
													value={editOpen ? (mehsul.isTopSelling || product.find(item => item.id == productId).isTopSelling) : mehsul.isTopSelling}
													onInput={(e) => setMehsul({ ...mehsul, isTopSelling: e.target.checked })}
													className="inline-block mr-2"
													type="checkbox"
												/>
												isTopSelling
											</label>
											<label className="block" htmlFor="">
												<input
													value={editOpen ? (mehsul.isStok || product.find(item => item.id == productId).isStok) : mehsul.isStok}
													onInput={(e) => setMehsul({ ...mehsul, isStok: e.target.checked })}
													className="inline-block mr-2"
													type="checkbox"
												/>
												isStok
											</label>
											<label className="block" htmlFor="">
												<input
													value={editOpen ? (mehsul.isCheaps || product.find(item => item.id == productId).isCheaps) : mehsul.isCheaps}
													onInput={(e) => setMehsul({ ...mehsul, isCheaps: e.target.checked })}
													className="inline-block mr-2"
													type="checkbox"
												/>
												isCheaps
											</label>
										</div>
									</div>
									<div className="my-3">
										<label
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
												<input value={imgSrc} {...getInputProps()} />
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
														<div
															key={url}
															className="cursor-pointer"
															onClick={() => {
																setDeleteOpen(true);
																setImgSrc(url);
																setImgDelOpen(true);
															}}
														>
															<img className="w-[100px]" src={url} />
														</div>
													))
												:
												img &&
												img?.map((item, i) => (
													<img
														key={i}
														onClick={() => setImgSrc(item)}
														className="w-[100px] object-cover"
														src={item}
													/>
												))}
										</div>
									</div>
									<div className="my-3">
										<label
											htmlFor=""
											className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
										>
											Məhsul haqqında məlumat
										</label>
										<Editor
											apiKey={configObj.editorKey}
											onEditorChange={handleEditorChange}
											init={{
												height: 300,
												menubar: true,
												branding: false,
												plugins: ["anchor", "autolink", "charmap", "codesample", "emoticons", "image", "link", "lists", "media", "searchreplace", "table", "visualblocks", "wordcount", "checklist", "mediaembed", "casechange", "export", "formatpainter", "pageembed", "a11ychecker", "tinymcespellchecker", "permanentpen", "powerpaste", "advtable", "advcode", "editimage", "advtemplate", "ai", "mentions", "tinycomments", "tableofcontents", "footnotes", "mergetags", "autocorrect", "typography", "inlinecss", "markdown",],
												toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
												tinycomments_mode: "embedded",
												tinycomments_author: "Author name",
												mergetags_list: [
													{ value: "First.Name", title: "First Name" },
													{ value: "Email", title: "Email" },
												],
												ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
											}}
											initialValue="Say something!"
										/>
									</div>
									<div className="mb-3 border-b border-gray-400 py-3">
										<label
											htmlFor=""
											className="block text-[12px] py-2 font-bold text-gray-700 uppercase"
										>
											Meta bilgi
										</label>
										<textarea
											value={editOpen ? (mehsul.metadata || product.find(item => item.id == productId).metadata) : mehsul.metadata}
											onInput={(e) => setMehsul({ ...mehsul, metadata: e.target.value })}
											className="text-sm block w-full rounded-md h-24 border-gray-400 p-2 border outline-indigo-600 shadow-sm"
											placeholder="Meta bilgileri ekleyiniz..."
										></textarea>
									</div>
									<button
										onClick={() => { !editOpen ? addProduct() : editProducts(); }}
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
