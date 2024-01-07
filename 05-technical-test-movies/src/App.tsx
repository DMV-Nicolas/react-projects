import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'

function App() {
  const [query, handleSubmit, handleChange, error] = useQuery()
  const movies = useMovies(query, error === "")

  return (
    <div className="page">
      <header>
        <h1>Movie Search Engine</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "crimson" : "transparent",
            }}
            name="movieTitle" value={query} type="text"
            placeholder="Avengers, Star Wars, Baki..." onChange={handleChange} />
          <button>Search</button>
        </form>
        <span className="error">{error && error}</span>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
