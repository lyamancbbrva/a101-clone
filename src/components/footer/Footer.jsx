import facebook from "../../assets/img/facebook.webp";
import instagram from "../../assets/img/instagram.webp";
import twitter from "../../assets/img/twitter.webp";
import tiktok from "../../assets/img/tiktok.webp";
import youtube from "../../assets/img/youtube.webp";
import linkedin from "../../assets/img/linkedin.webp";
import applemarket from "../../assets/img/apple-market-logo.png";
import androidmarket from "../../assets/img/android-market-logo.png";
import { Link } from "react-router-dom";
import qrcode from "../../assets/img/a101_qr_icon.jpeg";
import trgo from "../../assets/img/tr_go.jpeg";
import etbis from "../../assets/img/etbis.jpeg";

function Footer() {

    return (

        <footer className="lg:w-[95%] mx-auto">
            
            <div className='md:hidden hs-accordion-group px-4 border-b py-1'>
                <div
                    className='hs-accordion'
                    id='hs-basic-with-title-and-arrow-stretched-heading-1'
                >
                    <button
                        className='hs-accordion-toggle text-sm text-[#00BAD3] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none'
                        aria-expanded='false'
                        aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-1'
                    >
                        Site Haritası
                        <svg
                            className='hs-accordion-active:hidden block size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M14 8L10 11.5L6 8'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                        <svg
                            className='hs-accordion-active:block hidden size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6 11.5L10 8L14 11.5'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                    </button>
                    <div
                        id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                        className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                        role='region'
                        aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                        style={{ height: 0 }}
                    >
                        <ul>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Ana Sayfa</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kampanyalar</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Hakkımızda</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Bilgi Toplumu Hizmetleri</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kişisel Verilerin Korunması</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>İletişim</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>İşlem Rehberi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden hs-accordion-group px-4 border-b py-1'>
                <div
                    className='hs-accordion'
                    id='hs-basic-with-title-and-arrow-stretched-heading-2'
                >
                    <button
                        className='hs-accordion-toggle text-sm text-[#00BAD3] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none'
                        aria-expanded='false'
                        aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-2'
                    >
                        Özel Sayfalar
                        <svg
                            className='hs-accordion-active:hidden block size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M14 8L10 11.5L6 8'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                        <svg
                            className='hs-accordion-active:block hidden size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6 11.5L10 8L14 11.5'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                    </button>
                    <div
                        id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                        className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                        role='region'
                        aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                        style={{ height: 0 }}

                    >
                        <ul>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Aldın Aldın</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Haftanın Yıldızları</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Çok al az öde</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Ucuzun da Ucuzu Fiyatlar</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kişisel Verilerin Korunması</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden hs-accordion-group px-4 border-b py-1'>
                <div
                    className='hs-accordion'
                    id='hs-basic-with-title-and-arrow-stretched-heading-3'
                >
                    <button
                        className='hs-accordion-toggle text-sm text-[#00BAD3] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none'
                        aria-expanded='false'
                        aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-3'
                    >
                        Aldın Aldın
                        <svg
                            className='hs-accordion-active:hidden block size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M14 8L10 11.5L6 8'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                        <svg
                            className='hs-accordion-active:block hidden size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6 11.5L10 8L14 11.5'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                    </button>
                    <div
                        id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                        className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                        role='region'
                        aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                        style={{ height: 0 }}

                    >
                        <ul>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Elektronik</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Ev & Yaşam</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Anne & Bebek & Oyuncak</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kozmetik & Kişisel Bakım</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Oto Bahçe & Yapı</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Giyim & Aksesuar</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kitap & Kırtasiye</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden hs-accordion-group px-4 border-b py-1'>
                <div
                    className='hs-accordion'
                    id='hs-basic-with-title-and-arrow-stretched-heading-4'
                >
                    <button
                        className='hs-accordion-toggle text-sm text-[#00BAD3] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none'
                        aria-expanded='false'
                        aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-4'
                    >
                        En Çok Satılanlar
                        <svg
                            className='hs-accordion-active:hidden block size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M14 8L10 11.5L6 8'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                        <svg
                            className='hs-accordion-active:block hidden size-4'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6 11.5L10 8L14 11.5'
                                stroke='#333333'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                    </button>
                    <div
                        id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                        className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                        role='region'
                        aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                        style={{ height: 0 }}

                    >
                        <ul>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Televizyon</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Cep Telefonu</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Bebek Bezi</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kozmetik & Kişisel Bakım</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Oto Bahçe & Yapı</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Giyim & Aksesuar</a>
                            </li>
                            <li className='p-1 leading-[1.5em] text-[1em] text-[#333]'>
                                <a href=''>Kitap & Kırtasiye</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-b">
                <div className="hidden md:block wrapper">
                    <div className="flex items-start justify-between my-2 mt-8">
                    <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Site Haritası</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ana Sayfa Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Hakkımızda</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Bilgi Toplumu Hizmetlerir</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kişisel Verilerin Korunması</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İletişim</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İşlem Rehberi</li></Link>
                        </ul>
                        <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Özel Sayfalar</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Aldın Aldın </li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Haftanın Yıldızları</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Çok Al Az öde</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ucuzun Da Ucuzu Fiyatlar</li></Link>
                        </ul>
                        <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Aldın Aldın</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Elektronik</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Hakkımızda</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Bilgi Toplumu Hizmetlerir</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kişisel Verilerin Korunması</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İletişim</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İşlem Rehberi</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-start justify-between my-2">
                    <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Site Haritası</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ana Sayfa Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Hakkımızda</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Bilgi Toplumu Hizmetlerir</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kişisel Verilerin Korunması</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İletişim</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İşlem Rehberi</li></Link>
                        </ul>
                        <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Özel Sayfalar</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Aldın Aldın </li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Haftanın Yıldızları</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Çok Al Az öde</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ucuzun Da Ucuzu Fiyatlar</li></Link>
                        </ul>
                        <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Aldın Aldın</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Elektronik</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Hakkımızda</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Bilgi Toplumu Hizmetlerir</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kişisel Verilerin Korunması</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İletişim</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İşlem Rehberi</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-start justify-between my-2">
                    <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Site Haritası</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ana Sayfa Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kampanyalar</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Hakkımızda</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Bilgi Toplumu Hizmetlerir</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Kişisel Verilerin Korunması</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İletişim</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">İşlem Rehberi</li></Link>
                        </ul>
                        <ul>
                            <li className="text-[1em] text-[#00BAD3] py-1 inline-flex items-center justify-between gap-x-3 w-full  text-start rounded-lg ">Özel Sayfalar</li>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Aldın Aldın </li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Haftanın Yıldızları</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Çok Al Az öde</li></Link>
                            <Link><li className="text-[.875rem] py-1 leading-[1.25rem]">Ucuzun Da Ucuzu Fiyatlar</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='icons border-b p-2'>
              <div className="md:flex justify-between wrapper">
                  <div className=' flex justify-center items-center gap-3'>
                      <a href=''>
                          <img src={facebook} alt='facebook logo' />
                      </a>
                      <a href=''>
                          <img src={instagram} alt='instagram logo' />
                      </a>
                      <a href=''>
                          <img src={twitter} alt='twitter logo' />
                      </a>
                      <a href=''>
                          <img src={tiktok} alt='tiktok logo' />
                      </a>
                      <a href=''>
                          <img src={youtube} alt='youtube logo' />
                      </a>
                      <a href=''>
                          <img src={linkedin} alt='linkedin logo' />
                      </a>
                  </div>
                <div className="flex gap-2">
                      <div className='flex my-3 justify-center mx-auto items-center gap-3 md:flex-col'>
                          <img
                              className='w-[100px] cursor-pointer'
                              src={applemarket}
                              alt='apple market logo'
                          />
                          <img
                              className='w-[100px] cursor-pointer'
                              src={androidmarket}
                              alt='android market logo'
                          />
                      </div>
                      <div className="md:flex gap-2 hidden">
                        <img className="w-[90px] object-contain " src={qrcode} alt="a101 qr" />
                        <img className="w-[80px] object-contain " src={trgo} alt="tr go" />
                        <img className="w-[70px] object-contain " src={etbis} alt="etbis" />
                      </div>
                </div>
              </div>
            </div>
            <div className='border-b py-4 text-center'>© 2024 A101 Ekstra</div>
        </footer>
    );
}

export default Footer;
