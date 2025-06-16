import { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (movie.title && movie.rating) {
      onAdd({ ...movie, id: Date.now(), rating: Number(movie.rating) });
      setMovie({ title: "", description: "", posterURL: "", rating: "" });
      setIsOpen(false);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➕ Add Movie
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>

            <input
              name="title"
              value={movie.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700"
            />
            <input
              name="description"
              value={movie.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700"
            />
            <input
              name="posterURL"
              value={movie.posterURL}
              onChange={handleChange}
              placeholder="Poster URL"
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700"
            />
            <input
              name="rating"
              type="number"
              value={movie.rating}
              onChange={handleChange}
              placeholder="Rating (1-10)"
              className="w-full p-2 mb-4 border rounded dark:bg-gray-700"
            />

            <div className="flex justify-between">
              <button
                onClick={handleAdd}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMovie;
