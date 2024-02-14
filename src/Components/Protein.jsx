import React from 'react'
import { RxDividerHorizontal } from 'react-icons/rx';
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Protein() {
    return (
        <div className=' Bg h-full'>
            <h1 className=' text-center text-3xl font-semibold text-red-700 pt-7 pb-2'>PROTEIN</h1>
            <div className="content mx-5">
                <p className='text-lg py-1 flex justify-between'>Turkey <span className='text-white text-4xl ml-20 my-auto'><RxDividerHorizontal /></span> 3500</p>
                <p className='text-lg py-1 flex justify-between'>Chicken <span className='text-white text-4xl ml-[20%] my-auto'><RxDividerHorizontal /></span> 2500</p>
                <p className='text-lg py-1 flex justify-between'>Chicken Lap <span className='text-white text-4xl ml-[9%] my-auto'><RxDividerHorizontal /></span> 3500</p>
                <p className='text-lg py-1 flex justify-between'>Goat Meat <span className='text-white text-4xl ml-11 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Big Cow Head <span className='text-white text-4xl ml-2 my-auto'><RxDividerHorizontal /></span> 2000</p>
                <p className='text-lg py-1 flex justify-between'>Beef <span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Dry Fish <span className='text-white text-4xl ml-14 my-auto'><RxDividerHorizontal /></span> 1700</p>
                <p className='text-lg py-1 flex justify-between'>Small Dry Fish <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Small Turkey <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 3000</p>
                <p className='text-lg py-1 flex justify-between'>Small Cow Head <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Goat Meat Pepper Soup <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 2000</p>
            </div>
            <button className=' text-center block mx-auto my-10'>
                <Link to="/Menu" className='text-xl flex text-red-600 '><span className='mr-2 text-white my-auto'><FaArrowLeftLong /></span> Back to Menu</Link>
            </button>
        </div>
    )
}

export default Protein