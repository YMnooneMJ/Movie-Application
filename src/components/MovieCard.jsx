import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.posterURL} alt={movie.title} className="w-full h-100 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
      <p className="text-sm mt-1">Rating: ⭐ {movie.rating}</p>
    </Link>
  </div>
);

export default MovieCard;
