import { useState } from "react"
import { searchMovies } from "../services/movie"
import { Movie } from "../types"

const DEFAULT_MOVIES: Movie[] = []

export function useMovies(query: string, consult: boolean): Movie[] {
    const [movies, setMovies] = useState(DEFAULT_MOVIES)
    if (!consult) return []
    const getMovies = async () => {
        const newMovies = await searchMovies(query)
        setMovies(newMovies)
    }

    getMovies()

    return movies
}