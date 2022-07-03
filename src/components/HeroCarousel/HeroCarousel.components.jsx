import React from "react";
import HeroSlider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../Arrows/Arrows.component";

const HeroCarousel = ()=>{
    // react-slider use here
    const settings ={
            Arrows: true,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
    };

    const settingsLG={
        arrows: true,
            dots: true,
            autoplay: true,
            centerMode:true,
            centerPadding:"200px",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
    }
    const images = [
        "https://images.unsplash.com/photo-1656848922730-d29aad606524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1656574443785_token_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1653978566411_restaurantweb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1656675914477_ssp_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1656574443785_token_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1653978566411_restaurantweb.jpg",
    ];

    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image)=>(
                            <div className="h-52 w-full py-1 md:py-2 md:h-80">
                                <img 
                                src={image} 
                                alt="heroimage" 
                                className="w-full h-full" />
                            </div>
                        ))                       
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                    {
                        images.map((image)=>(
                            <div className="h-96 w-full">
                                <img 
                                src={image} 
                                alt="heroimage" 
                                className="w-full h-full" />
                            </div>
                        ))                       
                    }
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousel;