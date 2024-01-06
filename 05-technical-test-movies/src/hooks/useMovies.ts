import { useState, useEffect } from "react"
import { DEFAULT_MOVIES, PREFIX_URL, API_KEY } from "../constants"
import { Movie } from "../types"

export const useMovies = (title: string): Movie[] => {
    const [movies, setMovies] = useState(DEFAULT_MOVIES)

    useEffect(() => {
        if (title === "") return
        const fetchMoviesData = async () => {
            const res = await fetch(`${PREFIX_URL}?apikey=${API_KEY}&s=${title}`)
            const data = await res.json()
            const movies: Movie[] = data.Search
            setMovies(movies)
        }
        fetchMoviesData()
    }, [title])

    return movies
}