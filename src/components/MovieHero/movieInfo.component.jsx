import React from "react";

const MovieInfo = ()=>{
    return(
    <>
    <div>
        <div className="flex items-center gap-3 md:px-4">
            <div className="w-40 h-8">
                <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="streaming" className="w-full h-full"/>
            </div>
            <span className="bg-tara-700 p-1 text-xs text-white rounded-md">
                Streaming Now
            </span>
        </div>
        <h1 className="text-white px-5 py-2 font-bold">Morbuis</h1>
        <div className="flex flex-col-reverse lg:flex-col gap-5">
        <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; English &bull; Language</h4>
            <h4> 1h 50m &bull; Action  &bull; Advanture &bull; 13+
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
            <button
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹149
            </button>
            <button
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹599
            </button>
          </div>
        </div>
    </div>
    </>
    );
}

export default MovieInfo;