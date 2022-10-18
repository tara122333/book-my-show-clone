import React from "react";
import MovieHeroCard from "../components/MovieHero/movieHero.component";
import {FaCcVisa, FaCcApplePay} from 'react-icons/fa'
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlide/PosterSlide.component";

import Slider from "react-slick";


const MoviePage = ()=>{

    
    

    //  settings

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h3 className="text-gray-700 text-xl font-bold mb-4">Cast & Crew</h3>
                    <div className="flex flex-wrap gap-4">
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/scarlett-johansson-2067-22-12-2017-09-56-57.jpg" castName="Henry Cavil" role="Superman" />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/scarlett-johansson-2067-22-12-2017-09-56-57.jpg" castName="Henry Cavil" role="Superman" />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/scarlett-johansson-2067-22-12-2017-09-56-57.jpg" castName="Henry Cavil" role="Superman" />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/scarlett-johansson-2067-22-12-2017-09-56-57.jpg" castName="Henry Cavil" role="Superman" />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider 
                        config={settings}
                        images="this"
                        title="You Might Also Like"
                        isDark={false}
                    />
                </div>

                <div className="my-8">
                    <hr />
                </div>
                
                <div className="my-8">
                    <PosterSlider 
                        config={settings}
                        images="this"
                        title="You Might Also Like"
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
}
export default MoviePage;