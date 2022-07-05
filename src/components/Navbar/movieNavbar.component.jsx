import React from "react";
import {BiSearch,BiChevronDown,BiMenu} from 'react-icons/bi';

const MovieNavbarLG = ()=>{
    return(
        <>
            <div className="container mx-auto px-4 flex justify-between text-white">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">

                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="flex justify-center items-center bg-white py-2 px-3 w-full gap-3 rounded-md">

                        <BiSearch className="text-tara-700 text-lg"/>
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
                    {/* menu react icon */}
                </div>
            </div>
        </>
    );
}

const MovieNavbarMd = ()=>{
    return(
        <>
        </>
    );
}


const MovieNavbar = ()=>{
    return(
        <>
        <nav>
            <div className="lg:hidden">
                <MovieNavbarMd />
            </div>
            <div className="lg:hidden">
                <MovieNavbarMd />
            </div>
            <div className="hidden lg:flex w-full bg-tara-700 p-4">
                <MovieNavbarLG />
            </div>
        </nav>
        </>
    );
}

export default MovieNavbar;