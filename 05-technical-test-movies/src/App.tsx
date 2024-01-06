import './App.css'
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
        {movies &&
          movies.map((movie) => (
            <article className="movie">
              <header className="movieHeader">
                <span className="movieYear">{movie.Year}</span>
              </header>
              <div className="movieBody">
                <img className="moviePoster" src={movie.Poster} alt={`${movie.Title} poster image`} />
              </div>
              <footer className="movieFooter">
                <span className="movieType">{movie.Type}</span>
                <p className="movieTitle">{movie.Title}</p>
              </footer>
            </article>
          ))
        }
      </main>
    </div>
  )
}

export default App
