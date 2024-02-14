import React from 'react'
import Background from  './Images/Bg.jpg' ;
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className='All text-center'>
            <img src={Background} alt="" className='absolute w-full h-[120%] ' />
            <div className="content relative">
                <p className="Menu-list text-4xl text-white py-5 font-semibold">Menu List</p>
                <div className="grid grid-cols-2 gap-4 py-5 mx-3">
                    <Link to="/Protein" className='py-9 Protein font-bold text-xl text-white px-10 bg-black'>PROTEIN</Link>
                    <Link to="/Rice" className='py-9 font-bold text-xl text-black Rice px-10 bg-black'>RICE</Link>
                    <Link to="/Soup" className='py-9 font-bold text-xl text-black Soup px-10 bg-black'>SOUP</Link>
                    <Link to="/Swallow" className='py-9 font-bold text-xl text-black Swallow px-10 bg-black'>SWALLOW</Link>
                    <Link to="/Snacks" className='py-9 font-bold text-xl text-black Snack px-10 bg-black'>SNACKS</Link>
                    <Link to="/Cakes" className='py-9 font-bold text-xl text-black Cake px-10 bg-black'>CAKES</Link>
                    <Link to="/Ice-Cream" className='py-9 font-bold text-xl text-black Ice-cream px-10 bg-black'>ICE CREAM</Link>
                    <Link to="/Drinks" className='py-9 font-bold text-xl text-white Drinks px-10 bg-black'>DRINKS</Link>
                    <Link to="/Toppings" className='py-9 font-bold text-xl text-black Toppings px-10 bg-black'>FOOD TOPPINGS</Link>

                </div>
            </div>
        </div>
    )
}

export default Menu