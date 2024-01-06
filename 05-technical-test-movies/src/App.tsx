import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useTitle } from './hooks/useTitle'

function App() {
  const [title, handleSubmit, handleChange] = useTitle()
  const movies = useMovies(title)

  return (
    <div className="page">
      <header>
        <h1>Movie Search Engine</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Avengers, Star Wars, Baki..." onChange={handleChange} />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
