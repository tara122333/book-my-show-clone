import React from "react";
import HeroSlider from "react-slick";

import axios from "axios";

import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../Arrows/Arrows.component";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlaying = async () => {
      const getImages = await axios.get("/movie/now_playing");
      console.log(getImages);
      setImages(getImages.data.results);
    };
    requestNowPlaying();
  }, []);

  const settings = {
    Arrows: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settingsLG = {
    arrows: true,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "200px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="h-68 w-full py-1 md:py-2 md:h-80">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="heroimage"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="h-[30rem] w-full px-4 py-2">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="heroimage"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
