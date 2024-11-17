import React from "react";
import axios from "axios";
import MovieHOC from "./HOC/MovieHOC";
import PlaysHOC from "./HOC/Plays.HOC";
import DefaultHOC from "./HOC/Default.HOC";
import HomePageCard from "./Pages/Home.page";
import MoviePage from "./Pages/MoviePage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plays from "./Pages/Plays.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <div>
        <DefaultHOC path="/" exact element={HomePageCard} />
        <MovieHOC path="/movie/:id" exact element={MoviePage} />
        <PlaysHOC path="/plays" exact element={Plays} />
      </div>
    </>
  );
}

export default App;
