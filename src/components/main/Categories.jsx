import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoChevronRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import Cart from "./Cart";

function Categories() {
  return (
    <div className="bg-[#F3F6FA]">
      <div
        className={` lg:hidden  mobileCat fixed bg-[white] w-full flex gap-4`}
      >
        <div className="scroll min-w-[100px]  md:min-w-[150px] max-h-[100vh] overflow-y-scroll">
          {new Array(10).fill(null).map((_, index) => (
            <div className="p-2" key={index}>
              <img
                className="rounded-xl w-[95%]"
                src="./src/assets/img/Elektronik.jpeg"
                alt=""
              />
              <h5 className="text-center text-sm">Elektronik</h5>
            </div>
          ))}
        </div>

        <div className="w-full scroll overflow-y-scroll max-h-[100vh]">
          <div>
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
          <ul className="inline-block w-full">
            {new Array(15).fill(null).map((_, index) => (
              <Link key={index}>
                <li className="flex justify-between text-[#333] border-b py-4 w-full text-sm px-3 items-center">
                  xezer emi bize data{" "}
                  <FaChevronRight className="text-[.8em] text-[#333] " />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block desktopCat wrapper">
        <div className="flex gap-1 py-3 text-[#333] cursor-pointer font-thin lg:text-sm text-xs items-center">
          <Link to="/">Ana Sayfa</Link>
          <GoChevronRight className="text-[#788089]" />
          <Link>Acam</Link>
        </div>

       <div className="flex py-6 w-full justify-between gap-[20px] items-start">
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
							<div className="w-5 h-5 bg-white border border-gray-200 rounded-[5px] peer-checked:bg-[#00BAD3] peer-checked:border-[#00BAD3] transition-colors"><FaCheck className="text-white text-[.9em] m-[2px]"/></div>
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
			<div className="flex flex-wrap  justify-start gap-4">
				{
					new Array(25).fill(null).map((_,index) => <div key={index} className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]"><Cart/></div> )
				}
			</div>
	   </div>
      </div>
    </div>
  );
}

export default Categories;
