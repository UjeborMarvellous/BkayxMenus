import React from 'react'
import { RxDividerHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Snacks() {
    return (
        <div className=' Snacks'>
            <h1 className=' text-center text-3xl font-semibold text-red-700 pt-7 pb-2'>Snacks</h1>
            <div className="content mx-5">
                <p className='text-lg py-1 flex justify-between'>Meat Pie <span className='text-white text-4xl ml-20 my-auto'><RxDividerHorizontal /></span> 600</p>
                <p className='text-lg py-1 flex justify-between'>Chicken Pie <span className='text-white text-4xl ml-[20%] my-auto'><RxDividerHorizontal /></span> 800</p>
                <p className='text-lg py-1 flex justify-between'>Cookies <span className='text-white text-4xl ml-[9%] my-auto'><RxDividerHorizontal /></span> 550</p>
                <p className='text-lg py-1 flex justify-between'>Burger <span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Chicken Bread <span className='text-white text-4xl ml-14 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Chicken Burger <span className='text-white text-4xl ml-14 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Coconut Bread <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Deutch<span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 550</p>
                <p className='text-lg py-1 flex justify-between'>Fish Pie <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 800</p>
                <p className='text-lg py-1 flex justify-between'>Fish Roll <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Bkays Special Roll <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 900</p>
                <p className='text-lg py-1 flex justify-between'>Super Roll <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 900</p>
                <p className='text-lg py-1 flex justify-between'>Zeero <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 400</p>
                <p className='text-lg py-1 flex justify-between'>BeeroLL<span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 400</p>
                <p className='text-lg py-1 flex justify-between'>Cake Bread <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Chichen Fantacy <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1000</p>
                <p className='text-lg py-1 flex justify-between'>Doughnut <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 550</p>
                <p className='text-lg py-1 flex justify-between'>Pizza Delight <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1300</p>
                <p className='text-lg py-1 flex justify-between'>Small Sandwich <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1500</p>
            </div>
            <button className=' text-center block mx-auto my-10'>
                <Link to="/Menu" className='text-xl flex text-red-600 '><span className='mr-2 text-white my-auto'><FaArrowLeftLong /></span> Back to Menu</Link>
            </button>
        </div>
    )
}

export default Snacks
