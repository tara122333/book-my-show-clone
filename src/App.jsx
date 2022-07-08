import React from "react";
import axios from "axios";
import DefaultHOC from "./HOC/Default.HOC";
import { Routes,Route } from "react-router-dom";
import MovieHOC from "./HOC/MovieHOC";
import PlaysHOC from "./HOC/Plays.HOC";

// axios

 axios.defaults.baseURL = "https://api.themoviedb.org/3";
 axios.defaults.params = {}; //empty object important without this got error
 axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; //error bcoz params is used to empty object so,

function App() {
  return (
  <>
    <div>
      <Routes>
          <Route path="/" element={<DefaultHOC />} />
          <Route path="/movie/:id" element={<MovieHOC />} />
          <Route path="/plays" element={<PlaysHOC />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
