import React from 'react'
import { FaChevronCircleDown } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";


const Sidebar = () => {
  return (
    <>
      <div className='w-1/4 h-full bg-white shadow sticky left-0 top-0  hidden lg:block md:block'>
        <div className='flex  items-center bg-bluess-700 rounded-lg text-center px-6 py-2 m-6 gap-6 text-white  '>
          <PiFilesFill size={30} className='md:block'/>
          <h1 className='md:text-3xl md:font-bold'>Notes</h1>
        </div>
      </div>
    </>
  )
}


export default Sidebar
