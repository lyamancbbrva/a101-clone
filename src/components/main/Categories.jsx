import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

function Categories() {
  return (
    <div>
      <div className="mobileCat flex justify-between">
       <div className=' max-w-[140px] overflow-scroll'>
       {new Array(10).fill(null).map((_,index) =>   <div className='p-2'>
          <img className='rounded-xl m-3' src="./src/assets/img/Elektronik.jpeg" alt="" />
          <h5 className='text-center text-sm'>Elektronik</h5>
        </div>)}
       </div>
      
        <div>
          <div>
            <img className='rounded-xl m-3' src="./src/assets/img/Elektronik.jpeg" alt="" />
          </div>
          <ul>
            {

              new Array(10).fill(null).map((_, index) => <Link><li className='flex justify-between p-3 items-center'>xezer emi bize data <FaChevronRight /></li></Link>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Categories