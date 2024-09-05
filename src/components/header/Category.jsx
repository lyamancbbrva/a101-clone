import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronForward } from "react-icons/io5";


function Category() {

  return (
    <div className='height-full border-b border-t'>
        <ul className='hidden relative wrapper lg:flex gap-7 justify-center'>
            <li className='border-r px-4  lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit hover-menu'>
                Elektronik
                <div className='mega-menu bg-white hidden absolute gap-1 top-[100%] w-[100%] border right-0 max-h-[55vh] z-[99999999999]'>
                    <div className=' scroll overflow-y-scroll  min-w-[380px]'>                        
                        <ul className='p-4'>
                           <Link to={''}><li className=' flex justify-between p-1 font-[600] capitalize'>Eysu <IoChevronForward /></li></Link> 
                           <Link to={''}><li className=' flex justify-between p-1 font-normal'>Eysu <IoChevronForward /></li></Link> 
                           <Link to={''}><li className=' flex justify-between p-1 font-normal'>Eysu <IoChevronForward /></li></Link> 
                           <Link to={''}><li className=' flex justify-between p-1 font-normal'>Salam men Zay Aysu <IoChevronForward /></li></Link> 
                           <Link to={''}><li className=' flex justify-between p-1 font-normal'>Salam aysu <IoChevronForward /></li></Link> 
                           <Link to={''}><li className=' flex justify-between p-1 font-normal'>aaaa ozune nie zay deyirsen nc nc nc <IoChevronForward /></li></Link> 
                        </ul>
                    </div>
                    <div className='scroll overflow-y-scroll min-w-[350px]'>
                        <ul className=' p-3'>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>Ay maama</li></Link>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>zirt</li></Link>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>zirt</li></Link>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>zirt</li></Link>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>zirt</li></Link>
                            <Link to={''} ><li className='p-1 font-[500] capitalize'>lasdkfjgh</li></Link>
                        </ul>
                    </div>
                    <div className='p-3'>
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
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik 
                   </li>
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            <li className='border-r px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            <li className='         px-4 lg:font-semibold text-[.675rem] cursor-pointer py-2 lg:text-[.876rem] border-t border-t-transparent border-l border-l-transparent hover:border-l-inherit hover:border-t-inherit  hover-menu'>Elektronik </li>
            </ul>
        </div>
  )
}

export default Category