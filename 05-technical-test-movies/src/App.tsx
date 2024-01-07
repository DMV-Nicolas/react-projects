import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import './App.css'

function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, debouncedGetMovies, loading } = useMovies(sort)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getMovies(query)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    debouncedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }


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
          <input type="checkbox" onClick={handleSort} />
          <button>Search</button>
        </form>
        <span className="error">{error && error}</span>
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
