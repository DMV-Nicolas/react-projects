import { Movie } from "../types";
import { MoviePoster } from "./MoviePoster";

type ListOfMoviesParams = {
  movies: Movie[]
}

function ListOfMovies({ movies }: ListOfMoviesParams) {
  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => (
          <MoviePoster movie={movie} />
        ))
      }
    </ul>
  )
}

function NoMoviesResult() {
  return (
    <p>No movies were found for this search</p>
  )
}

type MoviesParams = {
  movies: Movie[]
}

export function Movies({ movies }: MoviesParams) {
  const hasMovies = movies.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}