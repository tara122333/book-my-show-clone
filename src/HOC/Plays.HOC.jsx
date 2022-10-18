import React from 'react';
import { Route, Routes } from "react-router-dom";
import PlaysLayout from '../layouts/Plays.layout';


// Layout

const PlaysHOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<PlaysLayout> <Component {...props} /> </PlaysLayout>);
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

export default PlaysHOC;