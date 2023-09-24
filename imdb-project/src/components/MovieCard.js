import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

 const imageURL = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movie, showLink = true }) => {
  console.log('aqui', movie);

  return (
    <div className="MovieCard">
      <img
        src={imageURL + movie.items.results[0].poster_path}
        alt={movie.items.results[0].title}
      />
      <h2>{movie.items.results[0].title}</h2>
      <p>
        <FaStar />{movie.items.results[0].vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.items.results[0].id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard