import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
  <>
    <div>
      <Routes>
          <Route path="/" element={<DefaultHOC />} />
      </Routes>
      {/* <DefaultHOC /> */}
    </div>
  </>
  );
}

export default App;
