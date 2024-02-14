import React from 'react'
import Background from "./Images/Bg2.jpg"
import Food from "./Images/Food.png"

import { Link } from "react-router-dom";


function WelcomeScreen() {
    return (
        <div>
            <img src={Background} alt="" className=' w-full h-screen absolute object-cover' />
            <div className="relative">
                <div className="text">
                    <h1 className='text-red-600 text-center text-xl font-semibold pt-10'>Bkay's Resturant And Lounge</h1>
                    <h1 className='text-white text-8xl text-center font-bold font-sans'>MENU</h1>
                </div>
                <div className="img -mt-10">
                    <img src={Food} alt="" className='transform -scale-y-100 -ml-10 mx-auto block w-full my-10' />
                    <Link to='/Menu'>
                        <button className=' bg-red-900 py-3 px-10 text-[16px] uppercase font-semibold -mt-10 block ml-[20%] rounded-md'>Continue To Menu</button>
                    </Link>
                </div>
                <div className="openingHours text-sm px-6 text-center mt-10 font-semibold">
                    <p>OPEN 8 AM - 10 PM</p>
                    <p className='pb-4'>Along Owa Road, Opposite Owa Model Primary School Boji Boji Owa Agbor Delta state </p>
                    <p className=' text-red-600 text-lg'>www.bkaysresturantandlounge.com</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen