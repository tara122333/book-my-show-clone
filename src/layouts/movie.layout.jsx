import React from 'react';
import MovieNavbar from '../components/Navbar/movieNavbar.component';
import MoviePage from '../Pages/movie.page';

const MovieLayout = (props) =>{
    return <div>
        <MovieNavbar />
        <MoviePage />
        {props.children}
    </div>
};

export default MovieLayout;