import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [filter, setFilter] = useState("All");

  // Add Movie
  function handleAddMovie(e) {
    e.preventDefault();
    if (!title) return;

    const newMovie = {
      id: Date.now().toString(),
      title,
      genre,
      watched: false,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setGenre("Action");
  }

  // Toggle watched
  function toggleWatched(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  // Delete movie
  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  // Filtered movies
  const filteredMovies = movies.filter((movie) => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  // Derived state
  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalMovies - watchedCount;

  // Styles
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
  };

  const badgeStyle = (watched) => ({
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    backgroundColor: watched ? "green" : "red",
    fontWeight: "bold",
    marginLeft: "10px",
  });

  const formStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const filterStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "bold",
  };

  const summaryStyle = {
    textAlign: "center",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Movie Watchlist
      </h1>

      {/* Form */}
      <form onSubmit={handleAddMovie} style={formStyle}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: "1 1 150px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Romantic">Romantic</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Add Movie
        </button>
      </form>

      {/* Filter buttons */}
      <div style={filterStyle}>
        <button style={buttonStyle} onClick={() => setFilter("All")}>
          All
        </button>
        <button style={buttonStyle} onClick={() => setFilter("Watched")}>
          Watched
        </button>
        <button style={buttonStyle} onClick={() => setFilter("Unwatched")}>
          Unwatched
        </button>
      </div>

      {/* Conditional message */}
      {filteredMovies.length === 0 && <p style={{ textAlign: "center" }}>No movies found. Add one!</p>}

      {/* Summary */}
      <div style={summaryStyle}>
        <p>Total: {totalMovies}</p>
        <p>Watched: {watchedCount}</p>
        <p>Unwatched: {unwatchedCount}</p>
      </div>

      {/* Movie list */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredMovies.map((movie) => (
          <li key={movie.id} style={cardStyle}>
            <div>
              <strong>{movie.title}</strong> - {movie.genre}
              <span style={badgeStyle(movie.watched)}>
                {movie.watched ? "Watched" : "Not Watched"}
              </span>
            </div>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <button style={buttonStyle} onClick={() => toggleWatched(movie.id)}>
                Toggle
              </button>
              <button style={{ ...buttonStyle, backgroundColor: "red" }} onClick={() => deleteMovie(movie.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
