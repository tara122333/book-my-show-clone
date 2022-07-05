import React from "react";
import MovieInfo from "./movieInfo.component";

const MovieHeroCard = ()=>{
    return(
    <>
        <div>
            <div className="relative md:hidden w-full" style={{ height: "calc(94vh)" }}>
                <div className="absolute z-20 bottom-4 left-4">
                <MovieInfo />
            </div>
            <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/morbius-et00078838-17-06-2022-12-24-13.jpg" 
                    alt="Movieimage" className="w-full h-full rounded-md"/>
            </div>






            <div className="hidden md:block w-full relative lg:hidden">
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <div className="absolute z-20 bottom-4">
                        <MovieInfo />
                    </div>
                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/morbius-et00078838-17-06-2022-12-24-13.jpg" alt="Movieimage" className="w-full h-full rounded-lg"/>
            </div>








            <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className=" w-64 h-96 ">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/morbius-et00078838-17-06-2022-12-24-13.jpg" alt="Movieimage" className="w-full h-full rounded-xl"/>
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/morbius-et00078838-17-06-2022-12-24-13.jpg" alt="Movieimage" className="w-full h-full"/>
        </div>
        </div>
    </>
    );
}

export default MovieHeroCard;