import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoChevronRight, GoShareAndroid } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { PiArrowsDownUpLight } from "react-icons/pi";
import Cart from "./Cart";
import { FaChevronDown } from "react-icons/fa6";
import { getCategories } from "../../api/api";



function Categories() {

    const mainCategory = [
        {
          name: "Elektronik",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/j-4GhgugfQ_1024x1024.png",
        },
        {
          name: "Ev & Yaşam",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/oZ4CLG763L_1024x1024.png",
        },
        {
          name: "Giyim & Aksesuar",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/K7Dojvagto_1024x1024.png",
        },
        {
          name: "Oto & Bahçe & Yapı",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/NY0jC-lxUV_1024x1024.png",
        },
        {
          name: "Anne & Bebek & Oyuncak",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/HypCfDo2sq_1024x1024.png",
        },
        {
          name: "Kozmetik & Kişisel Bakım",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/lgXbpkYp1d_1024x1024.png",
        },
        {
          name: "Kitap & Kırtasiye",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/aLjegjIe3Q_1024x1024.png",
        },
        {
          name: "Market",
          img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/BRNpLVW214_1024x1024.png",
        },
      ];
    

    const [onerilen, setOnerilen] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [category, setCategory] = useState([])
    const [catId, setCatid] = useState(0)
    const [productHidden, setProductHidden] = useState(false)

    useEffect(() => {
        getCategories().then(resp => setCategory(resp))
    }, [])
    

    function getProductsBySubcat() {
        setProductHidden(true)
        
    }
    
    return (

        <div className="bg-[#F3F6FA]">
            <div className={` lg:hidden  mobileCat fixed bg-[white] w-full flex gap-4`}>
                <div className={`scroll ${hidden ? '' : 'hidden'} max-w-[100px]  md:max-w-[150px] max-h-[100vh] overflow-y-scroll`} >
                    {mainCategory && mainCategory.map((item, index) => (
                        <div className="p-2 cursor-pointer " key={index}>
                            <img
                                className="rounded-xl w-[95%]"
                                src={item.img}
                                alt={item.name}
                            />
                            <h5 className="text-center text-sm mt-2">{item.name}</h5>
                        </div>
                    ))}
                </div>

                <div className={`w-full  scroll overflow-y-scroll max-h-[100vh]`}>
                    <div className={`${hidden ? 'block' : 'hidden'}`}>
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper mobileCatSlider"
                        >
                            {new Array(5).fill(null).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <Link>
                                        <img
                                            className="w-[95%] my-3 mx-auto rounded-3xl"
                                            src="https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/s96TUn5iDo_1024x1024.png"
                                            alt=""
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    
                    <ul className={ ` ${hidden ? 'block' : 'hidden'} w-full`}>
                            <li onClick={() => setHidden(false)} className="flex cursor-pointer justify-between text-[#333] border-b py-4 w-full text-sm px-3 items-center">
                                    Tümünü gör
                                    <FaChevronRight className="text-[.8em] text-[#333] " />
                            </li>
                        { category && category.map((item, index) => (
                            <li onClick={() =>{setHidden(false); setCatid(item.id)}} key={index} className="flex cursor-pointer justify-between text-[#333] border-b py-4 w-full text-sm px-3 items-center">
                                    {item.name}
                                    <FaChevronRight className="text-[.8em] text-[#333] " />
                            </li>
                        ))}
                    </ul>
                    <ul className={`${productHidden ? 'hidden' : 'inline-block'} w-full min-h-[80vh]`}>
                            <li onClick={() => setHidden(false)} className="flex cursor-pointer justify-between text-[#333] border-b py-4 w-full text-sm px-3 items-center">
                                    Tümünü gör
                                    <FaChevronRight className="text-[.8em] text-[#333] " />
                            </li>
                        { category && category.find(elem => elem.id == catId)?.subcategory?.map((item, index) => (
                            <li onClick={getProductsBySubcat}  key={index} className="flex cursor-pointer justify-between text-[#333] border-b py-4 w-full text-sm px-3 items-center">
                                    {item.name}
                                    <FaChevronRight className="text-[.8em] text-[#333] " />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mobilCat block lg:hidden">
                <div className="bg-white flex w-full">
                    <button className="flex items-center gap-2 p-3 border w-full justify-center">
                        <PiArrowsDownUpLight className=" text-[1.4em]" />
                        Sırala
                    </button>
                    <button className="flex items-center gap-2 p-3 border w-full justify-center">
                        <HiOutlineAdjustmentsHorizontal className=" text-[1.4em]" />
                        Filtrele
                    </button>
                </div>
                <div className={`wrapper px-3 bg-[#F3F6FA] ${productHidden ? 'block' : 'hidden'}`}>
                    <h2 className="py-4">"Elektronik" için <span className="font-semibold">891 ürün</span> bulundu.</h2>
                    <div className="flex justify-between pb-6 pt-2">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 bg-white border border-gray-200 rounded-[5px] peer-checked:bg-[#00BAD3] peer-checked:border-[#00BAD3] transition-colors"><FaCheck className="text-white text-[.9em] m-[2px]" /></div>
                            <input type="checkbox"  className="hidden peer" /> Stoksuz ürünleri gösterme
                        </div>
                        <p className="flex items-center gap-2 cursor-pointer">
                            <GoShareAndroid className=" text-[1.4em]" />
                            Paylaş
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 pb-5">
                        {
                            new Array(25).fill(null).map((_, index) => <div key={index} className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]"><Cart /></div>)
                        }
                    </div>
                </div>
            </div>
            <div className="hidden lg:block desktopCat wrapper">
                <div className="flex gap-1 py-3 text-[#333] cursor-pointer font-thin lg:text-sm text-xs items-center">
                    <Link to="/">Ana Sayfa</Link>
                    <GoChevronRight className="text-[#788089]" />
                    <Link>Acam</Link>
                </div>
        <div className="flex py-6 text-[#333] w-full justify-between gap-[20px] items-start">
          <div className="min-w-[15vw]">
            <div className="kategoriler border-b">
              <h3 className="text-lg font-medium pb-4">Katergoriler</h3>
              <div className="hs-accordion-group px-4 py-1">
                <div
                  className="hs-accordion"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="true"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    Xezer
                    <svg
                      className="hs-accordion-active:hidden hidden size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8L10 11.5L6 8"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block block size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.5L10 8L14 11.5"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    style={{ height: "auto" }}
                  >
                    <ul>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">zay</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">emi</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">emimiz</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">ama patisin dayisi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" hs-accordion-group px-4 py-1">
                <div
                  className="hs-accordion"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    Xezer
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8L10 11.5L6 8"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.5L10 8L14 11.5"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    style={{ height: 0 }}
                  >
                    <ul>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">zay</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">emi</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">emimiz</a>
                      </li>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <a href="">ama patisin dayisi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="filtrler">
              <h3 className="text-lg font-medium py-4">Filtreler</h3>
              <div className="hs-accordion-group px-4 py-1">
                <div
                  className="hs-accordion"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-[600] text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="true"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    Xezerin rengi
                    <svg
                      className="hs-accordion-active:hidden hidden size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8L10 11.5L6 8"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block block size-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.5L10 8L14 11.5"
                        stroke="#333333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    style={{ height: "auto" }}
                  >
                    <ul>
                      <li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="hidden peer" />
                          <div className="w-5 h-5 bg-white border border-gray-200 rounded-[5px] peer-checked:bg-[#00BAD3] peer-checked:border-[#00BAD3] transition-colors">
                            <FaCheck className="text-white text-[.9em] m-[2px]" />
                          </div>
                          <span className="ml-2 text-sm text-[#333]">
                            yasil
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-normal my-5 text-base break-all text-md">"Telefon & Aksesuar" için <span className="font-semibold">223 ürün</span> bulundu.</h2>
            <div>
              <div className="flex justify-between py-5 items center">
                <div>
                <div onClick={() => setOnerilen(!onerilen)} className={`false outline-2 ${onerilen ? 'border-[#00BAD3]' : ''}  flex justify-between cursor-pointer accent-brand-blue-primary min-w-[20vw] bg-white items-center p-4 rounded-full border-brand-gray-border border px-4 py-2`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0026 6.71838C10.7727 6.93277 10.4023 6.93277 10.1724 6.71838C9.94255 6.504 9.94255 6.15859 10.1724 5.9442L13.9183 2.38345C14.1482 2.16906 14.5185 2.16906 14.7484 2.38345L18.4943 5.9442C18.7242 6.15859 18.7242 6.504 18.4943 6.71838C18.3793 6.82558 18.2261 6.87322 18.0856 6.87322C17.9451 6.87322 17.7918 6.82558 17.6769 6.71838L14.9145 4.08665V17.2303C14.9145 17.5281 14.659 17.7782 14.327 17.7782C13.9949 17.7782 13.7395 17.54 13.7395 17.2303V4.08665L11.0026 6.71838Z"
                      fill="#333333"
                    ></path>
                    <path
                      d="M1.49488 13.2863C1.72515 13.0718 2.09614 13.0718 2.32641 13.2863L5.07902 15.919V2.77088C5.07902 2.47293 5.33487 2.22266 5.66748 2.22266C6.0001 2.22266 6.25595 2.46101 6.25595 2.77088V15.919L8.99577 13.2863C9.22604 13.0718 9.59703 13.0718 9.8273 13.2863C10.0576 13.5008 10.0576 13.8464 9.8273 14.0609L6.07685 17.6233C5.96172 17.7305 5.8082 17.7782 5.66748 17.7782C5.52676 17.7782 5.37325 17.7305 5.25811 17.6233L1.50767 14.0609C1.2774 13.8464 1.2774 13.5008 1.49488 13.2863Z"
                      fill="#333333"
                    ></path>
                  </svg>
                  <span className="text-[#333] inline-block mr-[50px] text-[15px]">Önerilenler</span>
                  <FaChevronDown className="text-[#333]" />
                </div>
                </div>
                <div className="flex">
                <label className="inline-flex text-nowrap border-r  px-5 items-center">
                    <input type="checkbox" className="hidden peer" />
                        <div className="w-5 h-5 bg-white border border-gray-200 rounded-[5px] peer-checked:bg-[#00BAD3] peer-checked:border-[#00BAD3] transition-colors">
                            <FaCheck className="text-white text-[.9em] m-[2px]" />
                        </div>
                        <span className="ml-2 text-sm text-[#333]">
                            Stoksuz Ürünleri Gösterme
                        </span>
                </label>
                <div className="flex px-2 items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.45457 14.6363C7.9608 14.6363 9.18184 13.4153 9.18184 11.909C9.18184 10.4028 7.9608 9.18176 6.45457 9.18176C4.94834 9.18176 3.72729 10.4028 3.72729 11.909C3.72729 13.4153 4.94834 14.6363 6.45457 14.6363Z" stroke="#333333" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 20.7728C17.5062 20.7728 18.7273 19.5517 18.7273 18.0455C18.7273 16.5393 17.5062 15.3182 16 15.3182C14.4937 15.3182 13.2727 16.5393 13.2727 18.0455C13.2727 19.5517 14.4937 20.7728 16 20.7728Z" stroke="#333333" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 8.49996C17.5062 8.49996 18.7273 7.27891 18.7273 5.77268C18.7273 4.26645 17.5062 3.04541 16 3.04541C14.4937 3.04541 13.2727 4.26645 13.2727 5.77268C13.2727 7.27891 14.4937 8.49996 16 8.49996Z" stroke="#333333" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.7063 7.24817L8.74854 10.4353" stroke="#333333" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.74854 13.3846L13.7063 16.5718" stroke="#333333" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>Paylaş</span>
                </div>
                </div>
              </div>
              <div className={`${onerilen ? 'block' : 'hidden'} absolute max-h-[40vh] min-w-[20vw] overflow-auto bg-white py-3 mb-3 px-4 rounded-xl text-md shadow z-50`}>
                 <ul>
                    <Link className="text-[#00BAD3]"><li className="flex items-center justify-between">Önerilen <FaCheck /></li></Link>
                    <Link><li className="text-[.95em] py-2 ">Fiyatl Yüksekten Düşüğe</li></Link>
                    <Link><li className="text-[.95em] py-2 ">Fiyatı Düşükten Yükseğe</li></Link>
                    <Link><li className="text-[.95em] py-2 ">Yeni Gelene Göre</li></Link>
                    <Link><li className="text-[.95em] py-2 ">En İndirimli Ürünler</li></Link>
                 </ul>
              </div>
            </div>
            <div className="flex flex-wrap  justify-start gap-4">
              {new Array(25).fill(null).map((_, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]"
                >
                  <Cart />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
// 				<div className="flex py-6 w-full justify-between gap-[20px] items-start">
// 					<div className="min-w-[15vw]">
// 						<div className="kategoriler border-b">
// 							<h3 className="text-lg font-medium pb-4">Katergoriler</h3>
// 							<div className="hs-accordion-group px-4 py-1">
// 								<div
// 									className="hs-accordion"
// 									id="hs-basic-with-title-and-arrow-stretched-heading-one"
// 								>
// 									<button
// 										className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
// 										aria-expanded="true"
// 										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 									>
// 										Xezer
// 										<svg
// 											className="hs-accordion-active:hidden hidden size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M14 8L10 11.5L6 8"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 										<svg
// 											className="hs-accordion-active:block block size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M6 11.5L10 8L14 11.5"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 									</button>
// 									<div
// 										id="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
// 										role="region"
// 										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
// 										style={{ height: "auto" }}
// 									>
// 										<ul>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">zay</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">emi</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">emimiz</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">ama patisin dayisi</a>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 							<div className=" hs-accordion-group px-4 py-1">
// 								<div
// 									className="hs-accordion"
// 									id="hs-basic-with-title-and-arrow-stretched-heading-one"
// 								>
// 									<button
// 										className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
// 										aria-expanded="false"
// 										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 									>
// 										Xezer
// 										<svg
// 											className="hs-accordion-active:hidden block size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M14 8L10 11.5L6 8"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 										<svg
// 											className="hs-accordion-active:block hidden size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M6 11.5L10 8L14 11.5"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 									</button>
// 									<div
// 										id="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
// 										role="region"
// 										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
// 										style={{ height: 0 }}
// 									>
// 										<ul>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">zay</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">emi</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">emimiz</a>
// 											</li>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<a href="">ama patisin dayisi</a>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="filtrler">
// 							<h3 className="text-lg font-medium py-4">Filtreler</h3>
// 							<div className="hs-accordion-group px-4 py-1">
// 								<div
// 									className="hs-accordion"
// 									id="hs-basic-with-title-and-arrow-stretched-heading-one"
// 								>
// 									<button
// 										className="hs-accordion-toggle text-sm text-[#333] py-3 inline-flex items-center justify-between gap-x-3 w-full font-[600] text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none"
// 										aria-expanded="true"
// 										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 									>
// 										Xezerin rengi
// 										<svg
// 											className="hs-accordion-active:hidden hidden size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M14 8L10 11.5L6 8"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 										<svg
// 											className="hs-accordion-active:block block size-4"
// 											width="20"
// 											height="20"
// 											viewBox="0 0 20 20"
// 											fill="none"
// 											xmlns="http://www.w3.org/2000/svg"
// 										>
// 											<path
// 												d="M6 11.5L10 8L14 11.5"
// 												stroke="#333333"
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 											></path>
// 										</svg>
// 									</button>
// 									<div
// 										id="hs-basic-with-title-and-arrow-stretched-collapse-one"
// 										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
// 										role="region"
// 										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
// 										style={{ height: "auto" }}
// 									>
// 										<ul>
// 											<li className="p-1 leading-[1.5em] text-[1em] text-[#333]">
// 												<label className="inline-flex items-center">
// 													<input type="checkbox" className="hidden peer" />
// 													<div className="w-5 h-5 bg-white border border-gray-200 rounded-[5px] peer-checked:bg-[#00BAD3] peer-checked:border-[#00BAD3] transition-colors"><FaCheck className="text-white text-[.9em] m-[2px]" /></div>
// 													<span className="ml-2 text-sm text-[#333]">
// 														yasil
// 													</span>
// 												</label>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex flex-wrap  justify-start gap-4">
// 						{
// 							new Array(25).fill(null).map((_, index) => <div key={index} className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]"><Cart /></div>)
// 						}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// >>>>>>> 67a5a0ff908f615282a2f703e24f2ffe7662234a
}

export default Categories;
