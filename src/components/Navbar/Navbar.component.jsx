import React from "react";
import {BiChevronRight,BiSearch,BiChevronDown,BiMenu} from 'react-icons/bi';

const NavSm = ()=>{
    return(
        <>
            <div className="text-white flex items-center justify-between">
                <div className="">
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">Bangaluru  <BiChevronRight /></span>
                    
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <div className="bg-red-500 px-3 py-3 h-8 flex justify-center items-center rounded-lg">
                        <button className="text-sm">Use App</button>
                    </div>
                    
                    <div className="w-7 h-7">
                        <BiSearch className="w-full h-full cursor-pointer"/>
                    </div>
                </div>
                
            </div>
        </>
    );
};
const NavMd = ()=>{
    return(
        <>
            <div className="flex justify-center items-center bg-white py-2 px-3 w-full gap-3 rounded-md">
            {/* search react icon */}
                <BiSearch />
                <input type="search" placeholder="Search for movies, events, Plays, Sports and Activities." className="w-full bg-transparent border-none focus:outline-none"/>
            </div>
        </>
    );
};
const NavLg = () =>{
    return(
        <>
            <div className="container mx-auto px-4 flex justify-between text-white">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">

                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="flex justify-center items-center bg-white py-2 px-3 w-full gap-3 rounded-md">

                        <BiSearch className="text-tara-700 text-xl"/>
                        <input type="search" placeholder="Search for movies, events, Plays, Sports and Activities." className="w-full bg-transparent border-none focus:outline-none"/>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="flex cursor-pointer justify-center items-center text-gray-200 hover:text-white">
                        <span>Bangaluru</span>
                        <BiChevronDown />
                    </div>

                    <div>
                    </div>

                    <div className="bg-red-500 px-3 py-3 h-8 flex justify-center items-center rounded-lg ">
                        <button className="text-xs font-bold">Sign In</button>
                    </div>
                    <div className="w-8 h-8">
                        <BiMenu className="w-full h-full"/>

                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () =>{
    return (
        <>
            <nav className="bg-tara-700 p-4"> 
                <div className="md:hidden">
                    {/* Mobile */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Tablet */}
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    {/* Laptop and PC */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
}

export default Navbar;