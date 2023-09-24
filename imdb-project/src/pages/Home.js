import { useState, useEffect } from 'react';

import Tmdb from '../Tmdb';

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
    <div className='container'>
      <h2>Filmes:</h2>
      <div className='movies-container'>
      {movies && movies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  )
}

export default Home