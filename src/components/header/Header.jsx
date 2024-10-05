import { Link } from "react-router-dom";
import extralogo from '../../assets/img/extra-logo.webp'
import { IoChevronForward } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { getCategories, searchProduct } from '../../api/api';
import axios from "axios";
import { TbMapX } from "react-icons/tb";

function Header({ mainCategory, basket }) {

    const [activeTab, setActiveTab] = useState(1)
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState(null)
    const [inpValue, setInpValue] = useState('')
    const [status, setStatus] = useState(false)
    const [catId, setCatId] = useState(2)





    useEffect(() => {
        getCategories().then(resp => setCategory(resp))
    }, [])

    useEffect(() => {
        if (inpValue.trim().length >= 2) {
            searchProduct(inpValue.toLowerCase()).then(resp => setProduct(resp.products))
        }
    }, [inpValue])

    const hoveredMenu = [
        {
            min: 0 ,
            max: 9
        },
        {
            min: 10 ,
            max:17
        },
        {
            min: 18 ,
            max: 29
        },
        {
            min: 0 ,
            max: 9
        },
        {
            min: 0 ,
            max: 9
        },
        {
            min: 0 ,
            max: 9
        },
    ]
    return (
        <header onClick={() => setStatus(false)} className='sticky top-0 z-[9] bg-white shadow-gray-100 shadow-sm'>
            <div className='bg-[#40D3E7] p-2'>
                <div className='wrapper lg:w-[95%] flex items-center justify-between'>
                    <div className='logos flex items-center justify-start gap-[5px] '>
                        <div className='rounded-[5px] relative w-[7.8em] lg:w-[160px] px-4 py-2 bg-[#F3F6FA] lg:bg-[#fff]'>
                            <Link to={'/'} >
                                <img
                                    className='bg-[#DAFBFF] w-full '
                                    src={extralogo}
                                    alt='extra logo'
                                />
                                <div className='absolute bottom-[-10px] left-[-1rem] lg:bottom-[-13px]'>
                                    <svg
                                        className='w-[0%] xs:w-[110%] lg:hidden'
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='14'
                                        fill='none'
                                    >
                                        <path
                                            d='M151 14L0 14L2 14C5.72256 14 7.58384 14 9.09017 13.5106C12.1345 12.5214 14.5214 10.1345 15.5106 7.09017C16 5.58384 16 3.72256 16 0V0L141 0V4C141 9.52285 145.477 14 151 14V14Z'
                                            fill='#f3f6fa'
                                        ></path>
                                    </svg>
                                    <svg
                                        className='hidden lg:inline-block'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='186'
                                        height='14'
                                        viewBox='0 0 186 14'
                                        fill='none'
                                    >
                                        <path
                                            d='M186 14L0 14H2C5.72256 14 7.58384 14 9.09017 13.5106C12.1345 12.5214 14.5214 10.1345 15.5106 7.09017C16 5.58384 16 3.72256 16 0V0L176 0V4C176 9.52285 180.477 14 186 14V14Z'
                                            fill='white'
                                        ></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden gap-2 lg:flex'>
                        <Link to='/kampanyalar' className='bg-[#F3F6FA] text-[#00BAD3] flex gap-1 font-medium text-sm  items-center px-6 py-4 w-auto rounded-full '>
                            <svg
                                width='17'
                                height='18'
                                viewBox='0 0 17 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M0.249268 7.20081V15.3183C0.249268 16.5213 1.22809 17.5002 2.43086 17.5002H13.8853C15.0884 17.5002 16.0672 16.5213 16.0672 15.3183V7.20081C16.0672 5.99775 15.0884 5.01892 13.8853 5.01892L11.6758 5.01906C11.9356 4.86076 12.1473 4.69535 12.2778 4.52635C13.0521 3.52573 12.8689 2.08692 11.8683 1.31265C11.4511 0.989786 10.9574 0.833496 10.4678 0.833496C9.78305 0.833496 9.10601 1.13899 8.65444 1.72223C8.42397 2.02004 8.26651 2.55616 8.15805 3.16145C8.04972 2.55602 7.89213 2.01976 7.66166 1.72223C7.21038 1.139 6.53334 0.833496 5.84861 0.833496C5.35904 0.833496 4.86538 0.989804 4.44825 1.31294C3.44763 2.08721 3.26443 3.52602 4.0387 4.52664C4.16938 4.69548 4.38121 4.86075 4.64074 5.01935L2.43079 5.01921C1.22802 5.01907 0.249268 5.99778 0.249268 7.20081ZM1.34016 15.3183V9.92821H7.61275V16.4094H2.4309C1.82959 16.4094 1.34016 15.92 1.34016 15.3183ZM14.9765 15.3183C14.9765 15.9197 14.487 16.4092 13.8856 16.4092H8.70371V9.92836H14.9763L14.9765 15.3183ZM13.8857 6.11006C14.4872 6.11006 14.9766 6.5995 14.9766 7.20095V8.83732L8.70401 8.83718V6.11007L13.8857 6.11006ZM9.51727 2.38995C9.74618 2.09399 10.0928 1.92432 10.4679 1.92432C10.7351 1.92432 10.9884 2.01101 11.2006 2.17529C11.4542 2.37145 11.6159 2.65473 11.6566 2.97248C11.6972 3.29051 11.6115 3.6051 11.4153 3.85838C11.2036 4.12373 10.2149 4.56731 9.05346 4.94898C9.13161 3.72999 9.31326 2.662 9.51727 2.38995ZM4.66013 2.9726C4.7007 2.65458 4.86256 2.37158 5.1161 2.17541C5.32836 2.01113 5.58174 1.92444 5.84894 1.92444C6.2239 1.92444 6.57041 2.09427 6.79916 2.38981C7.00287 2.66129 7.18422 3.72983 7.26268 4.94965C6.10204 4.56842 5.11366 4.12469 4.90171 3.85876C4.70512 3.60523 4.61941 3.29061 4.66013 2.9726ZM7.61275 6.10999V8.8374L1.34016 8.83725V7.20074C1.34016 6.59928 1.82959 6.10985 2.43105 6.10985L7.61275 6.10999Z'
                                    fill='#00BAD3'
                                ></path>
                            </svg>
                            Kampanyalar
                        </Link>
                        <Link to={'/giris'} className='bg-[#F3F6FA] text-[#00BAD3] flex gap-1 font-medium text-sm  items-center px-6 py-4 w-auto rounded-full '>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <circle
                                    cx='10.0001'
                                    cy='6.24984'
                                    r='3.90833'
                                    stroke='#00BAD3'
                                    strokeWidth='1.35'
                                ></circle>
                                <path
                                    d='M1.925 16.2779C1.925 14.1961 3.61264 12.5085 5.69445 12.5085H14.3056C16.3874 12.5085 18.075 14.1961 18.075 16.2779C18.075 17.1324 17.3823 17.8252 16.5278 17.8252H3.47222C2.61771 17.8252 1.925 17.1324 1.925 16.2779Z'
                                    stroke='#00BAD3'
                                    strokeWidth='1.35'
                                ></path>
                            </svg>
                            Giriş yap
                        </Link>
                    </div>
                </div>
            </div>
            <div className='wrapper flex items-center relative'>
                <fieldset className='w-full border-b lg:border-b-0 flex py-1 justify-center sm:px-[5px] px-[2vw] dark:text-gray-800'>
                    <div className='relative w-[100%] lg:w-full '>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <button
                                type='button'
                                title='search'
                                className='p-1 focus:outline-none focus:ring'
                            >
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
                                        stroke='#333333'
                                        strokeWidth='1.25'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    ></path>
                                    <path
                                        d='M16.4434 16.4434L20.9997 20.9997'
                                        stroke='#333333'
                                        strokeWidth='1.25'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    ></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            onChange={(e) => { setInpValue(e.target.value); setStatus(true) }}
                            type='search'
                            name='Search'
                            placeholder='Aramak istediğin ürünü yaz...'
                            className='search outline-none w-[100%] lg:w-full text-center my-[8px] rounded-full p-2 pl-10 border-[1px] border-[#e5e7e9] text-sm dark:text-gray-800 sm:p-[10px] '
                        />
                    </div>
                    <div className={`${status ? 'block' : 'hidden'} max-h-[350px] sm:max-h-[450px] overflow-y-auto absolute top-[70px] right-[0%] z-[1000] rounded-b-md scroll shadow-md w-[100%]`}>
                        {
                            product ?
                                (
                                    product?.map((item, i) => (
                                        <Link
                                            to={`/product/${item.id}`}
                                            key={i}
                                            className="flex gap-5 items-center p-3 border-b w-full bg-white hover:bg-gray-200 transition-all"
                                        >
                                            <img
                                                src={item.imageUrl}
                                                className="w-16 h-16 object-cover rounded-md"
                                                alt={item.name}
                                            />
                                            <div>
                                                <h3 className="text-sm hover:text-[#00BAD3] capitalize text-md transition-all">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm font-bold italic py-1 text-[#00BAD3]">{item.price} TL</p>
                                                <p className="text-xs">{item.description}</p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="p-4 bg-white">Ürün bulunamadı...</div>
                                )
                        }
                    </div>
                </fieldset>
                {basket.length > 1 ?
                    <Link to={'/sepet'} className='bg-[#00BAD3] lg:flex hidden p-1 rounded-full w-[165px] gap-4 h-11 items-center'>
                        <div className='bg-white p-1.5 rounded-full relative'>
                            <svg
                                width='25'
                                height='24'
                                viewBox='0 0 25 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M16.2194 17.5283C14.9849 17.5283 13.9839 18.529 13.9839 19.7636C13.9839 20.9984 14.9845 21.9993 16.2191 21.9993C17.454 21.9993 18.4547 20.9984 18.4547 19.7639C18.4536 18.5296 17.4534 17.5296 16.2194 17.5283ZM16.2194 20.9983C15.5374 20.9983 14.9849 20.4456 14.9849 19.7639C14.9849 19.082 15.5374 18.5293 16.2191 18.5293C16.9011 18.529 17.4537 19.082 17.4537 19.7636C17.4529 20.4451 16.9008 20.9972 16.2194 20.9983Z'
                                    fill='#000'
                                    stroke='#000'
                                    strokeWidth='0.4'
                                ></path>
                                <path
                                    d='M22.1961 5.15308H4.43665L4.12428 3.88234C3.85451 2.7738 2.85933 1.99532 1.7187 2.00002H1.50041C1.22406 2.00002 1 2.22408 1 2.50058C1 2.77694 1.22406 3.00099 1.50041 3.00099H1.7187C2.39744 2.99551 2.99101 3.45771 3.15228 4.1172L5.58229 14.0409C5.85347 15.1473 6.84943 15.9223 7.98834 15.9135H18.3829C19.5378 15.9228 20.5428 15.126 20.7974 13.9998L22.6841 5.75323C22.7182 5.60668 22.6827 5.45261 22.5877 5.33565C22.492 5.21806 22.3478 5.15074 22.1961 5.15308ZM19.8218 13.7798C19.6693 14.4494 19.0698 14.9215 18.3829 14.9126H7.98834C7.31054 14.9199 6.71666 14.4598 6.55476 13.8015L4.68152 6.15405H21.5681L19.8218 13.7798Z'
                                    fill='#000'
                                    stroke='#000'
                                    strokeWidth='0.4'
                                ></path>
                                <path
                                    d='M9.44941 17.5283C8.21484 17.5283 7.21387 18.529 7.21387 19.7636C7.21387 20.9984 8.21468 21.9993 9.44926 21.9993C10.684 21.9993 11.6848 20.9984 11.6848 19.7639C11.6837 18.5296 10.6835 17.5296 9.44941 17.5283ZM9.44941 20.9983C8.76754 20.9983 8.21484 20.4456 8.21484 19.7639C8.21484 19.082 8.76754 18.5293 9.44926 18.5293C10.1311 18.529 10.6838 19.082 10.6838 19.7636C10.6831 20.4451 10.1308 20.9972 9.44941 20.9983Z'
                                    fill='#000'
                                    stroke='#000'
                                    strokeWidth='0.4'
                                ></path>
                            </svg>
                            <span className='top-1 right-[5px] absolute w-[15px] h-[16px] rounded-full text-[.72em] text-center text-white bg-[#00BAD3]'>
                                {basket.length}
                            </span>
                        </div>
                        <p className='text-white font-medium'>₺{basket?.reduce((total, item) => total + item?.price * item?.count, 0).toFixed(2)}</p>
                    </Link>
                    : null}
            </div>
            <nav>
                <div className='height-full border-b border-t'>
                    <ul className='hidden relative wrapper lg:flex gap-7 justify-center'>
                        {
                            mainCategory && mainCategory.map((item, i) => <li key={i} className='border-r px-2 text-nowrap  xl:font-medium  text-[.67rem] cursor-pointer py-2 xl:text-[.8rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit hover-menu'>
                                <Link to={'/kateqoriler'}>{item.name}</Link>
                                <div className='mega-menu bg-white hidden absolute gap-1 top-[100%]  w-[100%] border right-0 max-h-[55vh] z-[99999999999]'>
                                    <div className=' scroll overflow-y-scroll  min-w-[380px]'>
                                        <ul className='p-4'>
                                            {
                                                category && category?.map((elem, i) => <li onMouseEnter={() => setCatId(elem.id)
                                                } key={i} className='cursor-pointer hover:text-[#2CCBE0] flex justify-between text-[1.2em] p-2.5 capitalize'>{elem.name} <IoChevronForward /></li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className='scroll overflow-y-scroll min-w-[250px] xl:min-w-[400px]'>
                                        <ul className=' p-3'>
                                            {
                                                category && category?.find(elem => elem.id == catId)?.subcategory?.map((item, i) => <Link to={`/${item.slug}`} key={i} ><li className='p-2.5 hover:text-[#2CCBE0] text-wrap text-[1.2em] font-[500] capitalize'>{item.name}</li></Link>)
                                            }

                                        </ul>
                                    </div>
                                    <div className='p-3 overflow-y-hidden flex items-start flex-wrap'>
                                        {
                                            category && category.map(item => item.img).splice(0, 4).map((src, i) => <img key={i} className='rounded-xl max-w-[150px] inline-block m-1' src={src} alt={src} />)
                                        }

                                    </div>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='icons flex lg:hidden md:px-8 justify-between px-3 fixed w-full bottom-0 bg-white pt-2.5'>
                    <Link to={'/'} className={`icon  flex flex-col items-center`}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='#000'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M5.35508 21.3C4.47061 21.3 3.7 20.5395 3.7 19.5434V10.2754C3.7 9.88426 3.87608 9.51394 4.17943 9.26707L11.1794 3.57032C11.6573 3.18138 12.3426 3.18138 12.8206 3.57032L19.8206 9.2671C20.1239 9.51397 20.3 9.88429 20.3 10.2754V19.5434C20.3 20.5395 19.5294 21.3 18.6449 21.3H5.35508Z'
                                stroke='#000'
                                fill='#000'
                                strokeWidth='1.4'
                            ></path>
                            <path
                                d='M15.0187 14.0654C14.9404 14.0262 14.8557 14.0041 14.7695 14.0005C14.6833 13.9969 14.5972 14.0118 14.5163 14.0444C14.4355 14.077 14.3613 14.1266 14.298 14.1903C14.2348 14.2541 14.1838 14.3308 14.1479 14.416C13.9767 14.8207 13.7021 15.1636 13.3569 15.404C13.0116 15.6444 12.6102 15.7722 12.2001 15.7722C11.79 15.7722 11.3885 15.6444 11.0433 15.404C10.698 15.1636 10.4235 14.8207 10.2523 14.416C10.216 14.331 10.1646 14.2547 10.1012 14.1912C10.0377 14.1278 9.96335 14.0786 9.88238 14.0464C9.8014 14.0142 9.71538 13.9997 9.62923 14.0036C9.54307 14.0075 9.45847 14.0298 9.38025 14.0692C9.30203 14.1086 9.23172 14.1644 9.17335 14.2333C9.11497 14.3023 9.06967 14.383 9.04002 14.471C9.01038 14.5589 8.99697 14.6524 9.00057 14.746C9.00417 14.8396 9.0247 14.9314 9.061 15.0164C9.33726 15.6682 9.77974 16.2203 10.336 16.6073C10.8923 16.9943 11.539 17.2 12.1996 17.2C12.8602 17.2 13.5069 16.9943 14.0632 16.6073C14.6195 16.2203 15.062 15.6682 15.3382 15.0164C15.3749 14.9313 15.3957 14.8392 15.3994 14.7454C15.4031 14.6515 15.3897 14.5578 15.36 14.4696C15.3303 14.3814 15.2848 14.3005 15.2261 14.2315C15.1675 14.1624 15.0968 14.1067 15.0183 14.0674L15.0187 14.0654Z'
                                fill='#000'
                            ></path>
                        </svg>
                        <h5 className='text-[#00BAD3]  py-1 text-[.5em]' >
                            Ana sayfa
                        </h5>
                    </Link>
                    <Link to={'/categories'} className={`icon  flex flex-col items-center`}>
                        <svg
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                cx='16'
                                cy='9'
                                r='4.8'
                                stroke='#8D939C'
                                strokeWidth='1.4'
                            ></circle>
                            <path
                                d='M19.8203 13.1787L23.4997 16.8581'
                                stroke='#8D939C'
                                strokeWidth='1.4'
                                strokeLinecap='round'
                            ></path>
                            <path
                                d='M7.97511 12.877L7.97519 12.8768C8.00852 12.8175 8.00851 12.7426 7.9752 12.6834L7.97511 12.6832C7.9425 12.6252 7.88702 12.5963 7.83445 12.5963L1.1659 12.5963C1.12617 12.5963 1.08537 12.6123 1.05313 12.6455L7.97511 12.877ZM7.97511 12.877C7.9425 12.935 7.88701 12.9639 7.83445 12.9639L1.1659 12.9639C1.12616 12.9639 1.08537 12.9478 1.05313 12.9147C1.02067 12.8814 1 12.8332 1 12.7801M7.97511 12.877L1 12.7801M1 12.7801C1 12.727 1.02066 12.6788 1.05313 12.6455L1 12.7801Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                            ></path>
                            <path
                                d='M6.97511 6.11329L6.97519 6.11315C7.00852 6.05388 7.00851 5.97893 6.9752 5.91968L6.97511 5.91953C6.9425 5.86149 6.88702 5.83263 6.83445 5.83263L1.1659 5.83263C1.12617 5.83263 1.08537 5.84868 1.05313 5.88178L6.97511 6.11329ZM6.97511 6.11329C6.9425 6.17133 6.88701 6.2002 6.83445 6.2002L1.1659 6.2002C1.12616 6.2002 1.08537 6.18414 1.05313 6.15104C1.02067 6.11771 1 6.06953 1 6.01641M6.97511 6.11329L1 6.01641M1 6.01641C1 5.96329 1.02066 5.91512 1.05313 5.88179L1 6.01641Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                            ></path>
                            <path
                                d='M15.9752 19.6133L15.9753 19.6131C16.0086 19.5539 16.0086 19.4789 15.9753 19.4197L15.9752 19.4195C15.9426 19.3615 15.8871 19.3326 15.8345 19.3326L1.1659 19.3326C1.12617 19.3326 1.08537 19.3487 1.05313 19.3818L15.9752 19.6133ZM15.9752 19.6133C15.9426 19.6713 15.8871 19.7002 15.8345 19.7002L1.1659 19.7002C1.12616 19.7002 1.08537 19.6841 1.05313 19.651C1.02067 19.6177 1 19.5695 1 19.5164M15.9752 19.6133L1 19.5164M1 19.5164C1 19.4633 1.02066 19.4151 1.05313 19.3818L1 19.5164Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                            ></path>
                        </svg>
                        <h5 className='focus:text-[#00BAD3] py-1 text-[.5em]'>
                            Kategoriler
                        </h5>
                    </Link>
                    <Link to={'basket'} className={`icon  flex flex-col items-center`}>
                        <svg
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M16.2194 17.5283C14.9849 17.5283 13.9839 18.529 13.9839 19.7636C13.9839 20.9984 14.9845 21.9993 16.2191 21.9993C17.454 21.9993 18.4547 20.9984 18.4547 19.7639C18.4536 18.5296 17.4534 17.5296 16.2194 17.5283ZM16.2194 20.9983C15.5374 20.9983 14.9849 20.4456 14.9849 19.7639C14.9849 19.082 15.5374 18.5293 16.2191 18.5293C16.9011 18.529 17.4537 19.082 17.4537 19.7636C17.4529 20.4451 16.9008 20.9972 16.2194 20.9983Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                                strokeWidth='0.4'
                            ></path>
                            <path
                                d='M22.1961 5.15308H4.43665L4.12428 3.88234C3.85451 2.7738 2.85933 1.99532 1.7187 2.00002H1.50041C1.22406 2.00002 1 2.22408 1 2.50058C1 2.77694 1.22406 3.00099 1.50041 3.00099H1.7187C2.39744 2.99551 2.99101 3.45771 3.15228 4.1172L5.58229 14.0409C5.85347 15.1473 6.84943 15.9223 7.98834 15.9135H18.3829C19.5378 15.9228 20.5428 15.126 20.7974 13.9998L22.6841 5.75323C22.7182 5.60668 22.6827 5.45261 22.5877 5.33565C22.492 5.21806 22.3478 5.15074 22.1961 5.15308ZM19.8218 13.7798C19.6693 14.4494 19.0698 14.9215 18.3829 14.9126H7.98834C7.31054 14.9199 6.71666 14.4598 6.55476 13.8015L4.68152 6.15405H21.5681L19.8218 13.7798Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                                strokeWidth='0.4'
                            ></path>
                            <path
                                d='M9.44941 17.5283C8.21484 17.5283 7.21387 18.529 7.21387 19.7636C7.21387 20.9984 8.21468 21.9993 9.44926 21.9993C10.684 21.9993 11.6848 20.9984 11.6848 19.7639C11.6837 18.5296 10.6835 17.5296 9.44941 17.5283ZM9.44941 20.9983C8.76754 20.9983 8.21484 20.4456 8.21484 19.7639C8.21484 19.082 8.76754 18.5293 9.44926 18.5293C10.1311 18.529 10.6838 19.082 10.6838 19.7636C10.6831 20.4451 10.1308 20.9972 9.44941 20.9983Z'
                                fill='#8D939C'
                                stroke='#8D939C'
                                strokeWidth='0.4'
                            ></path>
                        </svg>
                        <h5 className='focus:text-[#00BAD3] py-1 text-[.5em]'>
                            Sepetim
                        </h5>
                    </Link>
                    <Link to={'/kampanyalar'} className={`icon  flex flex-col items-center`}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.69922 9.84097V19.5819C2.69922 21.0256 3.87381 22.2002 5.31714 22.2002H19.0625C20.5061 22.2002 21.6807 21.0256 21.6807 19.5819V9.84097C21.6807 8.3973 20.5061 7.22271 19.0625 7.22271L16.4111 7.22288C16.7228 7.03291 16.9769 6.83442 17.1335 6.63162C18.0626 5.43088 17.8428 3.70431 16.642 2.77518C16.1414 2.38774 15.5489 2.2002 14.9614 2.2002C14.1398 2.2002 13.3273 2.56679 12.7854 3.26668C12.5089 3.62405 12.3199 4.2674 12.1898 4.99374C12.0598 4.26722 11.8707 3.62371 11.5941 3.26668C11.0526 2.5668 10.2401 2.2002 9.41843 2.2002C8.83094 2.2002 8.23855 2.38777 7.738 2.77553C6.53725 3.70466 6.31741 5.43123 7.24654 6.63197C7.40336 6.83457 7.65755 7.03291 7.96899 7.22323L5.31705 7.22306C3.87372 7.22288 2.69922 8.39734 2.69922 9.84097ZM4.00829 19.5819V13.1139H11.5354V20.8913H5.31718C4.5956 20.8913 4.00829 20.304 4.00829 19.5819ZM20.3718 19.5819C20.3718 20.3037 19.7845 20.891 19.0628 20.891H12.8446V13.114H20.3717L20.3718 19.5819ZM19.063 8.53208C19.7847 8.53208 20.372 9.1194 20.372 9.84115V11.8048L12.8449 11.8046V8.53208L19.063 8.53208ZM13.8208 4.06794C14.0955 3.71279 14.5115 3.50918 14.9616 3.50918C15.2823 3.50918 15.5861 3.61321 15.8408 3.81035C16.1451 4.04575 16.3392 4.38568 16.388 4.76698C16.4367 5.14861 16.3339 5.52612 16.0985 5.83005C15.8444 6.14847 14.658 6.68077 13.2642 7.13877C13.358 5.67599 13.576 4.3944 13.8208 4.06794ZM7.99225 4.76712C8.04094 4.38549 8.23517 4.0459 8.53942 3.81049C8.79413 3.61336 9.09819 3.50932 9.41883 3.50932C9.86878 3.50932 10.2846 3.71312 10.5591 4.06778C10.8035 4.39354 11.0212 5.6758 11.1153 7.13959C9.72254 6.68211 8.53649 6.14963 8.28215 5.83052C8.04624 5.52628 7.9434 5.14873 7.99225 4.76712ZM11.5354 8.53199V11.8049L4.00829 11.8047V9.84089C4.00829 9.11914 4.5956 8.53182 5.31735 8.53182L11.5354 8.53199Z'
                                fill='#8D939C'
                            ></path>
                        </svg>
                        <h5 className='focus:text-[#00BAD3] py-1 text-[.5em]'>
                            Kampanyalar
                        </h5>
                    </Link>
                    <div className='icon flex flex-col items-center'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                cx='12'
                                cy='7.5'
                                r='4.825'
                                stroke='#8D939C'
                                strokeWidth='1.35'
                            ></circle>
                            <path
                                d='M2.175 19.5335C2.175 16.9608 4.26061 14.8752 6.83333 14.8752H17.1667C19.7394 14.8752 21.825 16.9608 21.825 19.5335C21.825 20.6335 20.9333 21.5252 19.8333 21.5252H4.16667C3.0667 21.5252 2.175 20.6335 2.175 19.5335Z'
                                stroke='#8D939C'
                                strokeWidth='1.35'
                            ></path>
                        </svg>
                        <h5 className='focus:text-[#00BAD3] py-1 text-[.5em]'>
                            Hesabım
                        </h5>
                    </div>
                    <ul className='hidden relative wrapper lg:flex gap-7 justify-center'>
                        {
                            category && category.map((item, i) =>

                                <li key={i} className='border-r px-4  lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit hover-menu'>
                                    {item.name}
                                    <div className='mega-menu bg-white  absolute gap-1 top-[100%] w-[100%] border right-0 max-h-[55vh] z-[99999999999]'>
                                        <div className=' scroll overflow-y-scroll  min-w-[380px]'>
                                            <ul className='p-4'>
                                                {
                                                    item.subcategory?.map((elem, j) => <Link key={j} to={''}><li className=' flex justify-between p-1 font-[600] capitalize'>{elem.name} <IoChevronForward /></li></Link>)
                                                }
                                            </ul>
                                        </div>
                                        <div className='scroll overflow-y-scroll min-w-[350px]'>
                                            <ul className=' p-3'>
                                                {
                                                    item.subcategory?.map((elem, i) => <Link key={i} to={''}><li className=' flex justify-between p-1 font-[600] capitalize'>{elem.name} <IoChevronForward /></li></Link>)
                                                }
                                            </ul>
                                        </div>
                                        <div className='p-3 overflow-y-hidden'>
                                            <div>
                                                <img className='rounded-xl max-w-[210px] inline-block m-1' src="./src/assets/img/cehiz.jpg" alt="" />
                                                <img className='rounded-xl max-w-[210px] inline-block m-1' src="./src/assets/img/cehiz.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className='rounded-xl max-w-[210px] inline-block m-1' src="./src/assets/img/cehiz.jpg" alt="" />
                                                <img className='rounded-xl max-w-[210px] inline-block m-1' src="./src/assets/img/cehiz.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik
                        </li>

                    </ul>
                </div>
                <div className='icons flex lg:hidden justify-between px-3 fixed w-full bottom-0 bg-white pt-2.5'>
                    <Link to={'/'} onClick={() => setActiveTab(1)} className='icon flex flex-col items-center'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M5.35508 21.3C4.47061 21.3 3.7 20.5395 3.7 19.5434V10.2754C3.7 9.88426 3.87608 9.51394 4.17943 9.26707L11.1794 3.57032C11.6573 3.18138 12.3426 3.18138 12.8206 3.57032L19.8206 9.2671C20.1239 9.51397 20.3 9.88429 20.3 10.2754V19.5434C20.3 20.5395 19.5294 21.3 18.6449 21.3H5.35508Z'
                                stroke={activeTab == 1 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='1.4'
                            ></path>
                            <path
                                d='M15.0187 14.0654C14.9404 14.0262 14.8557 14.0041 14.7695 14.0005C14.6833 13.9969 14.5972 14.0118 14.5163 14.0444C14.4355 14.077 14.3613 14.1266 14.298 14.1903C14.2348 14.2541 14.1838 14.3308 14.1479 14.416C13.9767 14.8207 13.7021 15.1636 13.3569 15.404C13.0116 15.6444 12.6102 15.7722 12.2001 15.7722C11.79 15.7722 11.3885 15.6444 11.0433 15.404C10.698 15.1636 10.4235 14.8207 10.2523 14.416C10.216 14.331 10.1646 14.2547 10.1012 14.1912C10.0377 14.1278 9.96335 14.0786 9.88238 14.0464C9.8014 14.0142 9.71538 13.9997 9.62923 14.0036C9.54307 14.0075 9.45847 14.0298 9.38025 14.0692C9.30203 14.1086 9.23172 14.1644 9.17335 14.2333C9.11497 14.3023 9.06967 14.383 9.04002 14.471C9.01038 14.5589 8.99697 14.6524 9.00057 14.746C9.00417 14.8396 9.0247 14.9314 9.061 15.0164C9.33726 15.6682 9.77974 16.2203 10.336 16.6073C10.8923 16.9943 11.539 17.2 12.1996 17.2C12.8602 17.2 13.5069 16.9943 14.0632 16.6073C14.6195 16.2203 15.062 15.6682 15.3382 15.0164C15.3749 14.9313 15.3957 14.8392 15.3994 14.7454C15.4031 14.6515 15.3897 14.5578 15.36 14.4696C15.3303 14.3814 15.2848 14.3005 15.2261 14.2315C15.1675 14.1624 15.0968 14.1067 15.0183 14.0674L15.0187 14.0654Z'
                                fill={activeTab == 1 ? '#00BAD3' : '#8D939C'}
                            ></path>
                        </svg>
                        <h5 className={`${activeTab == 1 ? 'text-[#00BAD3]' : 'text-[#8D939C]'} focus:bg-black py-1 text-[.5em]`}>
                            Ana sayfa
                        </h5>
                    </Link>
                    <Link to={'/kateqoriler'} onClick={() => setActiveTab(2)} className='icon flex flex-col items-center'>
                        <svg
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                cx='16'
                                cy='9'
                                r='4.8'
                                stroke={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='1.4'
                            ></circle>
                            <path
                                d='M19.8203 13.1787L23.4997 16.8581'
                                stroke={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='1.4'
                                strokeLinecap='round'
                            ></path>
                            <path
                                d='M7.97511 12.877L7.97519 12.8768C8.00852 12.8175 8.00851 12.7426 7.9752 12.6834L7.97511 12.6832C7.9425 12.6252 7.88702 12.5963 7.83445 12.5963L1.1659 12.5963C1.12617 12.5963 1.08537 12.6123 1.05313 12.6455L7.97511 12.877ZM7.97511 12.877C7.9425 12.935 7.88701 12.9639 7.83445 12.9639L1.1659 12.9639C1.12616 12.9639 1.08537 12.9478 1.05313 12.9147C1.02067 12.8814 1 12.8332 1 12.7801M7.97511 12.877L1 12.7801M1 12.7801C1 12.727 1.02066 12.6788 1.05313 12.6455L1 12.7801Z'
                                fill={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                            ></path>
                            <path
                                d='M6.97511 6.11329L6.97519 6.11315C7.00852 6.05388 7.00851 5.97893 6.9752 5.91968L6.97511 5.91953C6.9425 5.86149 6.88702 5.83263 6.83445 5.83263L1.1659 5.83263C1.12617 5.83263 1.08537 5.84868 1.05313 5.88178L6.97511 6.11329ZM6.97511 6.11329C6.9425 6.17133 6.88701 6.2002 6.83445 6.2002L1.1659 6.2002C1.12616 6.2002 1.08537 6.18414 1.05313 6.15104C1.02067 6.11771 1 6.06953 1 6.01641M6.97511 6.11329L1 6.01641M1 6.01641C1 5.96329 1.02066 5.91512 1.05313 5.88179L1 6.01641Z'
                                fill={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                            ></path>
                            <path
                                d='M15.9752 19.6133L15.9753 19.6131C16.0086 19.5539 16.0086 19.4789 15.9753 19.4197L15.9752 19.4195C15.9426 19.3615 15.8871 19.3326 15.8345 19.3326L1.1659 19.3326C1.12617 19.3326 1.08537 19.3487 1.05313 19.3818L15.9752 19.6133ZM15.9752 19.6133C15.9426 19.6713 15.8871 19.7002 15.8345 19.7002L1.1659 19.7002C1.12616 19.7002 1.08537 19.6841 1.05313 19.651C1.02067 19.6177 1 19.5695 1 19.5164M15.9752 19.6133L1 19.5164M1 19.5164C1 19.4633 1.02066 19.4151 1.05313 19.3818L1 19.5164Z'
                                fill={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 2 ? '#00BAD3' : '#8D939C'}
                            ></path>
                        </svg>
                        <h5 className={`${activeTab == 2 ? 'text-[#00BAD3]' : 'text-[#8D939C]'} focus:bg-black py-1 text-[.5em]`}>
                            Kategoriler
                        </h5>
                    </Link>
                    <Link to={'/sepet'} onClick={() => setActiveTab(3)} className='icon relative flex flex-col items-center'>
                        <svg
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M16.2194 17.5283C14.9849 17.5283 13.9839 18.529 13.9839 19.7636C13.9839 20.9984 14.9845 21.9993 16.2191 21.9993C17.454 21.9993 18.4547 20.9984 18.4547 19.7639C18.4536 18.5296 17.4534 17.5296 16.2194 17.5283ZM16.2194 20.9983C15.5374 20.9983 14.9849 20.4456 14.9849 19.7639C14.9849 19.082 15.5374 18.5293 16.2191 18.5293C16.9011 18.529 17.4537 19.082 17.4537 19.7636C17.4529 20.4451 16.9008 20.9972 16.2194 20.9983Z'
                                fill={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='0.4'
                            ></path>
                            <path
                                d='M22.1961 5.15308H4.43665L4.12428 3.88234C3.85451 2.7738 2.85933 1.99532 1.7187 2.00002H1.50041C1.22406 2.00002 1 2.22408 1 2.50058C1 2.77694 1.22406 3.00099 1.50041 3.00099H1.7187C2.39744 2.99551 2.99101 3.45771 3.15228 4.1172L5.58229 14.0409C5.85347 15.1473 6.84943 15.9223 7.98834 15.9135H18.3829C19.5378 15.9228 20.5428 15.126 20.7974 13.9998L22.6841 5.75323C22.7182 5.60668 22.6827 5.45261 22.5877 5.33565C22.492 5.21806 22.3478 5.15074 22.1961 5.15308ZM19.8218 13.7798C19.6693 14.4494 19.0698 14.9215 18.3829 14.9126H7.98834C7.31054 14.9199 6.71666 14.4598 6.55476 13.8015L4.68152 6.15405H21.5681L19.8218 13.7798Z'
                                fill={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='0.4'
                            ></path>
                            <path
                                d='M9.44941 17.5283C8.21484 17.5283 7.21387 18.529 7.21387 19.7636C7.21387 20.9984 8.21468 21.9993 9.44926 21.9993C10.684 21.9993 11.6848 20.9984 11.6848 19.7639C11.6837 18.5296 10.6835 17.5296 9.44941 17.5283ZM9.44941 20.9983C8.76754 20.9983 8.21484 20.4456 8.21484 19.7639C8.21484 19.082 8.76754 18.5293 9.44926 18.5293C10.1311 18.529 10.6838 19.082 10.6838 19.7636C10.6831 20.4451 10.1308 20.9972 9.44941 20.9983Z'
                                fill={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                stroke={activeTab == 3 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='0.4'
                            ></path>
                        </svg>
                        <div className={`bg-[#00BAD3] ${basket.length > 0 ? 'block' : 'hidden'} rounded-full w-[12px] h-[12px] text-white text-[.5em] px-1  absolute right-0 `}>{basket.length}</div>
                        <h5 className={`${activeTab == 3 ? 'text-[#00BAD3]' : basket.length == 0 ? 'text-[#8D939C]' : ''}   ${basket.length > 0 ? 'w-[45px] px-2 rounded-2xl text-white bg-[#00BAD3] text-center text-[.6em] h-[15px] my-1' : 'py-1 text-[.5em]'} `}>
                            {basket.length > 0 ? 't' + basket?.reduce((total, item) => total + item?.price * item?.count, 0).toFixed(0) : 'Sepetim'}
                        </h5>
                    </Link>
                    <Link to={'/kampanyalar'} onClick={() => setActiveTab(4)} className='icon flex flex-col items-center'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.69922 9.84097V19.5819C2.69922 21.0256 3.87381 22.2002 5.31714 22.2002H19.0625C20.5061 22.2002 21.6807 21.0256 21.6807 19.5819V9.84097C21.6807 8.3973 20.5061 7.22271 19.0625 7.22271L16.4111 7.22288C16.7228 7.03291 16.9769 6.83442 17.1335 6.63162C18.0626 5.43088 17.8428 3.70431 16.642 2.77518C16.1414 2.38774 15.5489 2.2002 14.9614 2.2002C14.1398 2.2002 13.3273 2.56679 12.7854 3.26668C12.5089 3.62405 12.3199 4.2674 12.1898 4.99374C12.0598 4.26722 11.8707 3.62371 11.5941 3.26668C11.0526 2.5668 10.2401 2.2002 9.41843 2.2002C8.83094 2.2002 8.23855 2.38777 7.738 2.77553C6.53725 3.70466 6.31741 5.43123 7.24654 6.63197C7.40336 6.83457 7.65755 7.03291 7.96899 7.22323L5.31705 7.22306C3.87372 7.22288 2.69922 8.39734 2.69922 9.84097ZM4.00829 19.5819V13.1139H11.5354V20.8913H5.31718C4.5956 20.8913 4.00829 20.304 4.00829 19.5819ZM20.3718 19.5819C20.3718 20.3037 19.7845 20.891 19.0628 20.891H12.8446V13.114H20.3717L20.3718 19.5819ZM19.063 8.53208C19.7847 8.53208 20.372 9.1194 20.372 9.84115V11.8048L12.8449 11.8046V8.53208L19.063 8.53208ZM13.8208 4.06794C14.0955 3.71279 14.5115 3.50918 14.9616 3.50918C15.2823 3.50918 15.5861 3.61321 15.8408 3.81035C16.1451 4.04575 16.3392 4.38568 16.388 4.76698C16.4367 5.14861 16.3339 5.52612 16.0985 5.83005C15.8444 6.14847 14.658 6.68077 13.2642 7.13877C13.358 5.67599 13.576 4.3944 13.8208 4.06794ZM7.99225 4.76712C8.04094 4.38549 8.23517 4.0459 8.53942 3.81049C8.79413 3.61336 9.09819 3.50932 9.41883 3.50932C9.86878 3.50932 10.2846 3.71312 10.5591 4.06778C10.8035 4.39354 11.0212 5.6758 11.1153 7.13959C9.72254 6.68211 8.53649 6.14963 8.28215 5.83052C8.04624 5.52628 7.9434 5.14873 7.99225 4.76712ZM11.5354 8.53199V11.8049L4.00829 11.8047V9.84089C4.00829 9.11914 4.5956 8.53182 5.31735 8.53182L11.5354 8.53199Z'
                                fill={activeTab == 4 ? '#00BAD3' : '#8D939C'}
                            ></path>
                        </svg>
                        <h5 className={`${activeTab == 4 ? 'text-[#00BAD3]' : 'text-[#8D939C]'} focus:bg-black py-1 text-[.5em]`}>
                            Kampanyalar
                        </h5>
                    </Link>
                    <Link to={'/giris'} onClick={() => setActiveTab(5)} className='icon flex flex-col items-center'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                cx='12'
                                cy='7.5'
                                r='4.825'
                                stroke={activeTab == 5 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='1.35'
                            ></circle>
                            <path
                                d='M2.175 19.5335C2.175 16.9608 4.26061 14.8752 6.83333 14.8752H17.1667C19.7394 14.8752 21.825 16.9608 21.825 19.5335C21.825 20.6335 20.9333 21.5252 19.8333 21.5252H4.16667C3.0667 21.5252 2.175 20.6335 2.175 19.5335Z'
                                stroke={activeTab == 5 ? '#00BAD3' : '#8D939C'}
                                strokeWidth='1.35'
                            ></path>
                        </svg>
                        <h5 className={`${activeTab == 5 ? 'text-[#00BAD3]' : 'text-[#8D939C]'} focus:bg-black py-1 text-[.5em]`}>
                            Hesabım
                        </h5>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
