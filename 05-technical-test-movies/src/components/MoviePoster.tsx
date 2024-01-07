import { Movie } from "../types"

type MoviePosterParams = {
    movie: Movie
}

export function MoviePoster({ movie }: MoviePosterParams) {
    return (
        <article className="movie">
            <header className="movieHeader">
                <span className="movieYear">{movie.year}</span>
            </header>
            <div className="movieBody">
                <img className="moviePoster" src={movie.poster} alt={`${movie.title} poster image`} />
            </div>
            <footer className="movieFooter">
                <span className="movieType">{movie.type}</span>
                <p className="movieTitle">{movie.title}</p>
            </footer>
        </article>
    )
}