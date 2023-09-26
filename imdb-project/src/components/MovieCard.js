import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

 const imageURL = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movie, showLink = true }) => {
  console.log('movie ', movie);
  console.log('aq ', movie.map((item) => item.poster_path));
  return (
    <div className="movie-card" style={{ display: 'inline-block' }}>
      <img
        src={imageURL + movie.poster_path}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />{movie[0].vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard