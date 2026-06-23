function Filtres({ movies, category, setCategory }) {
  const categories = [
    ...new Set(
      movies.flatMap((movie) =>
        movie.Genre.split(",").map((g) => g.trim())
      )
    ),
  ];

  return (
    <div className="category-container">
      <button onClick={() => setCategory("")}>All</button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filtres;