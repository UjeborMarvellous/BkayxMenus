import React from 'react'
import { RxDividerHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Cake() {
    return (
        <div className=' Bg h-full'>
            <h1 className=' text-center text-3xl font-semibold text-red-700 pt-7 pb-2'>Cake</h1>
            <div className="content mx-5">
                <p className='text-lg py-1 flex justify-between'>Uniced Wrapped Cake <span className='text-white text-4xl ml-20 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Iced Cup Cake <span className='text-white text-4xl ml-[20%] my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>White Forest Cake <span className='text-white text-4xl ml-[9%] my-auto'><RxDividerHorizontal /></span> 1600</p>
                <p className='text-lg py-1 flex justify-between'>Chocolate Friut Slice Cake <span className='text-white text-4xl ml-11 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Plain Cake <span className='text-white text-4xl ml-2 my-auto'><RxDividerHorizontal /></span> 1200</p>
                <p className='text-lg py-1 flex justify-between'>9 inch Cake <span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 16000</p>
                <p className='text-lg py-1 flex justify-between'>6 inch Cake <span className='text-white text-4xl ml-14 my-auto'><RxDividerHorizontal /></span> 7500</p>
                <p className='text-lg py-1 flex justify-between'>7 inch Cake <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 9500</p>
                <p className='text-lg py-1 flex justify-between'>8.5 inch Cake <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 14000</p>
                <p className='text-lg py-1 flex justify-between'>8 inch Cake <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 12000</p>
            </div>
            <button className=' text-center block mx-auto my-10'>
                <Link to="/Menu" className='text-xl flex text-red-600 '><span className='mr-2 text-white my-auto'><FaArrowLeftLong /></span> Back to Menu</Link>
            </button>
        </div>
    )
}

export default Cake