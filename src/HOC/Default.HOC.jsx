import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Component, ...rest }) => {
  const fun = (props) => {
    return (
      <DefaultLayout>
        <Component {...props} />{" "}
      </DefaultLayout>
    );
  };
  return (
    <>
      <Routes>
        <Route {...rest} element={fun(rest)} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
