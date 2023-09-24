import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

 const imageURL = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie, showLink = true }) => {
  console.log('aqui', movie);

  return (
    <div className="MovieCard">
      <img
        src={imageURL + movie.items.poster_path}
        alt={movie.items.title}
      />
      <h2>{movie.items.title}</h2>
      <p>
        <FaStar />{movie.items.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.items.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard