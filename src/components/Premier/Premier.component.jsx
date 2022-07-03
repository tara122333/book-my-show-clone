import React from "react";
import Poster from "../Poster/Poster.component";

const PremierCard = ()=>{ 

    // arr of object
    const PremierArray =[
        {
            // obj1
        },
        {
            // obj2
        },
        {
            // obj3
        },
        {
            // obj4
        }
    ];

    return (
        <>
            <Poster {...PremierArray}/>
        </>
    );
}

export default PremierCard;