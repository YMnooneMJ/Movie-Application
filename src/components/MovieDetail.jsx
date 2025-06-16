import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-center text-xl">Movie not found</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-4">{movie.description}</p>

      <div className="aspect-video w-full max-w-3xl mx-auto">
        <iframe
          className="w-full h-full"
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
