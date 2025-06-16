const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="flex gap-4 p-4 justify-center">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border rounded p-2 w-1/3"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        className="border rounded p-2 w-1/4"
      />
    </div>
  );
};

export default Filter;
