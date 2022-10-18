import React,{useState,useEffect} from "react";
import axios from "axios";
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlide/PosterSlide.component";
const HomePageCard = ()=>{

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(()=>{
        const requestPopularMovies = async()=>{
            const getPopularMovies = await axios.get("/movie/now_playing");
            console.log(getPopularMovies);
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[])


    return(
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 w-full">
                <h1 className="text-2xl font-bold text-gray-800 my-3 px-2">The best of Entertainment</h1>
                <EntertainmentCard />
            </div>
            <div className="bg-tara-700 py-12">
                <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    {/* <h1 className="text-2xl font-bold text-gray-800 my-3 px-2">Premiers</h1> */}
                    <div className="hidden md:flex px-2">
                        <img src=" https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt=" Premier image" className="w-full"/>
                    </div>
                    <PosterSlider 
                        images={popularMovies}
                        title="Premieres"
                        subtitle="Brand new relases every friday"
                        isDark
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    <PosterSlider 
                        images={popularMovies}
                        title="Event Happining for you"
                    />
            </div>
            <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    <PosterSlider 
                        images={popularMovies}
                        title="Online Streaming Events"
                    />
            </div>
            <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    <PosterSlider 
                        images={popularMovies}
                        title="Outdoor Events"
                    />
            </div>
            <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    <PosterSlider 
                        images={popularMovies}
                        title="Popular Events"
                    />
            </div>
            <div className="container mx-auto px-4 w-full flex flex-col gap-3">
                    <PosterSlider 
                        images={popularMovies}
                        title="The Latest Plays"
                        subtitle="Brand new relases every friday"
                    />
            </div>
            
        </div>
            
        </>
    );
}

export default HomePageCard;