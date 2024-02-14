import React from 'react'
import { RxDividerHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Drinks() {
    return (
        <div className=' Snacks'>
            <h1 className=' text-center text-3xl font-semibold text-red-700 pt-7 pb-2'>Drinks</h1>
            <div className="content mx-5">
                <p className='text-lg py-1 flex justify-between'>Small Bottle Water <span className='text-white text-4xl ml-20 my-auto'><RxDividerHorizontal /></span> 200</p>
                <p className='text-lg py-1 flex justify-between'>Aquafina Bottle water <span className='text-white text-4xl ml-[20%] my-auto'><RxDividerHorizontal /></span> 350</p>
                <p className='text-lg py-1 flex justify-between'>Predator <span className='text-white text-4xl ml-[9%] my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Fearless <span className='text-white text-4xl ml-11 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Pet Plastic Drink <span className='text-white text-4xl ml-2 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Beta Malta Can <span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Amstel malt<span className='text-white text-4xl ml-24 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Chi exotic(Small)  <span className='text-white text-4xl ml-14 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Schwepps Can <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Monster Can <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Fayrous (Plastics) <span className='text-white text-4xl ml-1 my-auto'><RxDividerHorizontal /></span> 500</p>
                <p className='text-lg py-1 flex justify-between'>Fayrous (Can) <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Sprite <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Fanta <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Coke <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 700</p>
                <p className='text-lg py-1 flex justify-between'>Vitamilk <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>5 Alive (Big) <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Chi exotic (Big) <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1500</p>
                <p className='text-lg py-1 flex justify-between'>Hollandia(Big) <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 1700</p>
                <p className='text-lg py-1 flex justify-between'>Eva Water <span className='text-white text-4xl ml-4 my-auto'><RxDividerHorizontal /></span> 350</p>
            </div>
            <button className=' text-center block mx-auto my-10'>
                <Link to="/Menu" className='text-xl flex text-red-600 '><span className='mr-2 text-white my-auto'><FaArrowLeftLong /></span> Back to Menu</Link>
            </button>
        </div>
    )
}

export default Drinks