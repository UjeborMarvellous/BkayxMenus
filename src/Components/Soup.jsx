import React from 'react'
import { RxDividerHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Soup() {
    return (
        <div className=' Bg h-full'>
            <h1 className=' text-center text-3xl font-semibold text-red-700 pt-7 pb-2'>Soup</h1>
            <div className="content mx-5">
                <p className='text-lg py-1 flex justify-between'>Egusi Soup <span className='text-white text-4xl ml-20 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Ogbono Soup <span className='text-white text-4xl ml-[20%] my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Oha Soup <span className='text-white text-4xl ml-[9%] my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Banga Soup <span className='text-white text-4xl ml-11 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Bitter Leaf Soup <span className='text-white text-4xl ml-2 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Vegetable Soup <span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 800</p>
            </div>
            <button className=' text-center block mx-auto my-10'>
                <Link to="/Menu" className='text-xl flex text-red-600 '><span className='mr-2 text-white my-auto'><FaArrowLeftLong /></span> Back to Menu</Link>
            </button>
        </div>
    )
}

export default Soup