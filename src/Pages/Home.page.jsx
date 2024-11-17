import React, { useState, useEffect } from "react";
import axios from "axios";
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlide/PosterSlide.component";
const HomePageCard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/now_playing");
      console.log(getPopularMovies);
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

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

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);
    };

    requestNowPlayingMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 w-full">
          <h1 className="text-2xl font-bold text-gray-800 my-3 px-2">
            The best of Entertainment
          </h1>
          <EntertainmentCard />
        </div>
        <div className="bg-tara-700 py-12">
          <div className="container mx-auto px-4 w-full flex flex-col gap-3">
            <div className="hidden md:flex px-2">
              <img
                src=" https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                alt=" Premier"
                className="w-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>
        </div>
        <div className="container mx-auto px-4 w-full flex flex-col gap-3">
          <PosterSlider
            images={topRatedMovies}
            title="Event Happining for you"
          />
        </div>
        <div className="container mx-auto px-4 w-full flex flex-col gap-3">
          <PosterSlider
            images={upcomingMovies}
            title="Online Streaming Events"
          />
        </div>
        <div className="container mx-auto px-4 w-full flex flex-col gap-3">
          <PosterSlider images={nowPlayingMovies} title="Outdoor Events" />
        </div>
        <div className="container mx-auto px-4 w-full flex flex-col gap-3">
          <PosterSlider images={topRatedMovies} title="Popular Events" />
        </div>
        <div className="container mx-auto px-4 w-full flex flex-col gap-3">
          <PosterSlider
            images={popularMovies}
            title="The Latest Plays"
            subtitle="Brand new relases every friday"
          />
        </div>
      </div>
    </>
  );
};

export default HomePageCard;
