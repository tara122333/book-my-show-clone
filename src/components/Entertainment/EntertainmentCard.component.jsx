import React from "react";

const EntertainmentCard = ()=>{
    // settings of react-slider and responsive break points

    const EntertainmentsImages = [
        // img1
        // img2
        // img3
        // img4
        // img5
        // img6

    ];
    return (
        <>
            <div>
                {
                    EntertainmentsImages.map((image)=>{
                        <img src={image} />
                    })
                }
            </div>
        </>
    );
}

export default EntertainmentCard;