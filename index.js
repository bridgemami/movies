import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieDetails from './App';
import reportWebVitals from './reportWebVitals';
// import {getMovieDetailsByName} from './utils.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieDetails />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
