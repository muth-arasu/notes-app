import React from 'react'
import { FaChevronCircleDown } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";


const Sidebar = () => {
  return (
    <>
      <div className='w-1/4 h-full bg-white shadow'>
        <div className='md:flex  md:items-center md:bg-bluess-700 md:rounded-lg md:text-center md:px-6 md:py-2 md:m-6 md:gap-6 md:text-white hidden '>
          <PiFilesFill size={30} className='md:block'/>
          <h1 className='md:text-3xl md:font-bold'>Notes</h1>
        </div>
      </div>
    </>
  )
}


export default Sidebar
