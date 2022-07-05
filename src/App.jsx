import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import { Routes,Route } from "react-router-dom";
import MovieHOC from "./HOC/MovieHOC";


function App() {
  return (
  <>
    <div>
      <Routes>
          <Route path="/" element={<DefaultHOC />} />
          <Route path="/movie:id" element={<MovieHOC />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
