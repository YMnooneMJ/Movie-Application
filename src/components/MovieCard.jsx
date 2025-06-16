const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg z-1000 rounded-b-2xl overflow-hidden w-72">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="h-100 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{movie.title}</h3>
        <p className="text-gray-600">{movie.description}</p>
        <p className="text-yellow-500 mt-2 font-semibold">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
