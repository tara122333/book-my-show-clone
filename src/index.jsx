import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MovieProvider from './context/movie.context';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
      <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
