import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

 function fetchMoviesHandler() {
  fetch('https://swapi.dev/api/films').then(response => {
    // pass our response to a function that calls the json()
    // function that turns the response into json format
      return response.json();
  }).then(data => {
    // we now transform our json data into data useable by the 
    // application due to props
    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
        openingText: movieData.opening_crawl
      }
    })
    // now our transformed json data is passed into the
    // function for the next then block
    setMovies(transformedMovies);
  })
 }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>  
    </React.Fragment>
  );
}

export default App;
