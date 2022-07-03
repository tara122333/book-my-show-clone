import React from "react";

const Poster = (props)=>{
    return(
        <>
            <div>
                <div>
                    {
                        <img src={props.src} alt={props.subtitle}/>
                    }
                </div>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.subtitle}
                </p>
            </div>
        </>

    );
}

export default Poster;