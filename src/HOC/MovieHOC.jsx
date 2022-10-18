import React from 'react';
import { Route,Routes } from 'react-router-dom';
import MovieLayout from '../layouts/movie.layout';

// Layout

const MovieHOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<MovieLayout> <Component {...props} /> </MovieLayout>);
    }
    return(
        <>
            <Routes>
                {/* <Route {...rest} element={fun(rest)}/> */}
                <Route {...rest} element={fun(rest)}/>
            </Routes>
        </>
    );
}

export default MovieHOC;