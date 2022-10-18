import React, { useContext } from "react";
import {BiSearch,BiChevronDown,BiMenu,BiChevronLeft,BiShareAlt} from 'react-icons/bi';
import { MovieContext } from "../../context/movie.context";

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
    const { movie } = useContext(MovieContext);
    return(
        <>
            <div className="flex justify-between items-center text-white">
                <div className="flex gap-3 justify-center items-center">
                    <BiChevronLeft className="text-2xl md:text-3xl"/>
                    <h3 className="text-lg md:text-xl font-bold">{movie.original_title}</h3>
                </div>
                    <BiShareAlt className="text-2xl md:text-3xl"/>
            </div>
        </>
    );
}


const MovieNavbar = ()=>{
    return(
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-tara-700 p-4">
            <div className="md:hidden">
                <MovieNavbarMd />
            </div>
            <div className="hidden md:block lg:hidden">
                <MovieNavbarMd />
            </div>
            <div className="hidden lg:flex w-full">
                <MovieNavbarLG />
            </div>
        </nav>
        </>
    );
}

export default MovieNavbar;