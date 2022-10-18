import React,{useEffect,useState} from "react";
import axios from "axios";
import Slider from "react-slick";
import PremierImages from "../../Config/TempPoster.config";
import settings from "../../Config/PosterCarousel.config";
import Poster from "../Poster/Poster.component";


const PosterSlider = (props) => {

    const sliderConfig = props.config ? props.config : settings;

    return (
        <>
            <div>
                <h3 className={` text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
                    {props.title}
                </h3>
                <p className={` text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>
                    {props.subtitle}
                </p>
            </div>
            <Slider {...sliderConfig}>
                {
                    props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark} />
                    ))
                }
            </Slider>
        </>
    );
}

export default PosterSlider;