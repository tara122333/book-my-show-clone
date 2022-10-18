import React,{useEffect,useState} from "react";
import Slider from "react-slick";
import MovieHeroCard from "../components/MovieHero/movieHero.component";
import {FaCcVisa, FaCcApplePay} from 'react-icons/fa'
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlide/PosterSlide.component";
import axios from "axios";
import { MovieContext } from "../context/movie.context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NextArrow,PrevArrow } from "../components/Arrows/Arrows.component";


const MoviePage = ()=>{
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
      const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
      };
      requestCast();
    }, [id]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("/movie/top_rated");
          setTopRatedMovies(getTopRatedMovies.data.results);
        };
    
        requestTopRatedMovies();
      }, []);
    
      useEffect(() => {
        const requestUpcomingMovies = async () => {
          const getUpcomingMovies = await axios.get("/movie/upcoming");
          setUpcomingMovies(getUpcomingMovies.data.results);
        };
    
        requestUpcomingMovies();
      }, []);



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
  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
                    <p className="font-semibold">
                        {
                          movie.overview
                        }
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
                        
                        {/* {
                          cast.map((castdata)=>(
                            <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} 
                            castName={castdata.original_name}
                            role={castdata.character} />
                          ))
                        } */}

                        <Slider {...settingsCast}>
                        {
                          cast.map((castdata)=>(
                            <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} 
                            castName={castdata.original_name}
                            role={castdata.character} />
                          ))
                        }
                        </Slider>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider 
                        config={settings}
                        images={topRatedMovies}
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
                        images={upcomingMovies}
                        title="You Might Also Like"
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
}
export default MoviePage;