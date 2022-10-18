import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.components';
import Navbar from '../components/Navbar/Navbar.component';
import Plays from '../Pages/Plays.page';


const PlaysLayout = (props) =>{
    return <div>
        <Navbar />
        <HeroCarousel />
        <Plays />
        {props.children}
    </div>
};

export default PlaysLayout;