import React from "react";

const Poster = (props)=>{
    return(
        <>
            <div>
                {/* image */}
                <div>
                    {
                        <img src={props.src} alt={props.subtitle}/>
                    }
                </div>
                {/* Title */}
                <h3>
                    {props.title}
                </h3>

                {/* SubTitle */}
                <p>
                    {props.subtitle}
                </p>
            </div>
        </>

    );
}

export default Poster;