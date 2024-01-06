import { Movie } from "../types"

type MoviePosterParams = {
    movie: Movie
}

export function MoviePoster({ movie }: MoviePosterParams) {
    return (
        <article className="movie" key={movie.imdbID}>
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
    )
}