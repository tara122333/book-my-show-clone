import React from "react";
import MovieHeroCard from "../components/MovieHero/movieHero.component";
import {FaCcVisa, FaCcApplePay} from 'react-icons/fa'

const MoviePage = ()=>{
    return(
        <>
            <MovieHeroCard />
            <div className="container px-4 my-5 lg:w-2/3 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                    <h3 className="text-2xl font-bold text-gray-700">
                    About the movie
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum voluptate dicta exercitationem, distinctio doloremque ipsam reprehenderit mollitia, modi consequuntur ea perferendis repellat iure dolorum.
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h3 className="text-gray-700 text-xl font-bold mb-4">Application offer</h3>
                    <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex gap-3 bg-yellow-100 items-start p-2 border-dashed border-4 border-yellow-300">
                        <div className="w-8 h-8">

                        <FaCcVisa className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold">Rupay Stream Offer</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illo!</p>
                        </div>
                    </div>
                    <div className="flex gap-3 bg-yellow-100 items-start p-2 border-dashed border-4 border-yellow-300">
                        <div className="w-8 h-8">

                        <FaCcApplePay className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold">Rupay Stream Offer</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illo!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default MoviePage;