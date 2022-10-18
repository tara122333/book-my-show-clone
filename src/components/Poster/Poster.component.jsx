import React from "react";

const Poster = (props)=>{
    return(
        <>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-60 w-full lg:h-96">
                    {
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.alt} className="h-full w-full rounded-lg"/>
                    }
                </div>
                <h3 className={`font-bold text-xl ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.original_title
}
                </h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.subtitle}
                </p>
            </div>
        </>

    );
}

export default Poster;