import React from "react";
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";

const HomePageCard = ()=>{
    return(
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 w-full">
                <h1 className="text-2xl font-bold text-gray-800 my-3 px-2">The best of Entertainment</h1>
                <EntertainmentCard />
            </div>
        </div>
            
        </>
    );
}

export default HomePageCard;