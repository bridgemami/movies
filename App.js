
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {getMoviesByName} from './utils'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

getMoviesByName();
// const moviePoster= ()
function MovieDetails() {
  return (
   <div className="App">
      <h1>Welcome to the Movies</h1>
      <p>Let's have some fun</p>
      <div id='movieBox'>
        <h2 id='title'></h2>
        <div className='container'>
          <div className='row'>
            <section className='col-6'>
        <img id ="posters"/>
        </section>
        <section className='col-6'>
        <button id="type" />
        <p className='text-primary fw-bold d-flex' id="rating"></p>
        <button id ='rated' />
        <button id='length' />
        <button id ='genre' />
        <h4>Plot:</h4>
        <p id='plot'></p>
        <h4>Cast:</h4>
        <p id='cast'></p>
        </section>
        </div>
        </div>
    </div>
    </div>
  );
}

export default MovieDetails;
