import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props)=>{
    return (
        <>
            <div className="w-full h-48 px-2">
                <img src={props.src} alt="Entertainment image" className="w-full h-full rounded-xl"/>
            </div>
        </>
    );
}

const EntertainmentCardSlider = ()=>{
    // settings of react-slider and responsive break points
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
              breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
              breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                    infinite: true,
                }
            },
            {
              breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                    infinite: true,
                }
            },
          ],
};

    const EntertainmentsImages = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202011150107.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/cooking-collection-202007222211.png"

    ];
    return (
        <>
            <Slider {...settings}>
                {
                   EntertainmentsImages.map((image)=>(
                        <EntertainmentCard src={image} />
                   ))
                }
            </Slider>
        </>
    );
}

export default EntertainmentCardSlider;