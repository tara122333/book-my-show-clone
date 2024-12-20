import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";
import Navbar from "../components/Navbar/Navbar.component";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
