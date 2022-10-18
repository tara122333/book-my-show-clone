import React from "react";
import axios from "axios";
import MovieHOC from "./HOC/MovieHOC";
import PlaysHOC from "./HOC/Plays.HOC";
import HomePageCard from "./Pages/Home.page";
import DefaultHOC from './HOC/Default.HOC';


// axios

 axios.defaults.baseURL = "https://api.themoviedb.org/3";
 axios.defaults.params = {}; //empty object important without this got error
 axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; //error bcoz params is used to empty object so,

function App() {
  return (
  <>
    <div>
          <DefaultHOC path="/" exact element={HomePageCard} />
          {/* <Route path="/movie/:id" element={<MovieHOC />} />
          <Route path="/plays" element={<PlaysHOC />} /> */}
    </div>
  </>
  );
}

export default App;
