import React from "react";

const Cast = (props) => {
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <div className="h-32 w-32 md:h-40 md:w-40">
        <img
          src={props.image}
          alt="crew man"
          className="h-full w-full rounded-full"
        />
      </div>
      <h1 className="text-xl  text-gray-700">{props.castName}</h1>
      <h5 className="text-md text-gray-500">{props.role}</h5>
    </div>
  );
};
export default Cast;
