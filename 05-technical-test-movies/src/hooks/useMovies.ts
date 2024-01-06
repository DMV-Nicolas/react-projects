import { useState, useEffect } from "react"
import { DEFAULT_MOVIES, PREFIX_URL, API_KEY } from "../constants"
import { MovieAPIResponse, Movie } from "../types"

export function useMovies(title: string): Movie[] {
    const [movies, setMovies] = useState(DEFAULT_MOVIES)

    useEffect(() => {
        const fetchMoviesData = async () => {
            const res = await fetch(`${PREFIX_URL}?apikey=${API_KEY}&s=${title}`)
            const data: MovieAPIResponse = await res.json()
            if (data.Response === "True") {
                const movies = data.Search
                const mappedMovies = movies.map((m): Movie => {
                    const year = parseInt(m.Year)
                    return {
                        id: m.imdbID,
                        poster: m.Poster,
                        title: m.Title,
                        type: m.Type, year
                    }
                })
                setMovies(mappedMovies)
            } else {
                setMovies([])
            }
        }

        fetchMoviesData()
    }, [title])

    return movies
}