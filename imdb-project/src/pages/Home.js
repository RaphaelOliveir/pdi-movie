import { useState, useEffect } from 'react';

import Tmdb from '../Tmdb';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css';

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getMovieList();
      setMovies(list);
    }

    loadAll();
  }, [])


  return (
    <div className="container">
      <h2 className="title">Filmes:</h2>
      <div className="movies-container-list-area">
        <div className="movies-container-list">
          {movies.length === 0 && <p>Loading...</p>}
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.items.results[0].id} movie={movie.items.results} />)}
        </div>
      </div>
    </div>
  )
}

export default Home