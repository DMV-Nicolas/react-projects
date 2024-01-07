import { useCallback, useMemo, useRef, useState } from "react"
import { searchMovies } from "../services/movie"
import { Movie } from "../types"

const DEFAULT_MOVIES: Movie[] = []

export function useMovies(sort: boolean): { movies: Movie[], getMovies: (query: string) => void, resetMovies: () => void, loading: boolean } {
    const [movies, setMovies] = useState(DEFAULT_MOVIES)
    const [loading, setLoading] = useState(false)
    const [, setError] = useState("")
    const previusSearch = useRef("")

    const getMovies = useCallback(async (query: string) => {
        try {
            if (query === previusSearch.current) return
            setLoading(true)
            setError("")
            previusSearch.current = query
            const newMovies = await searchMovies(query)
            setMovies(newMovies)
        } catch (err) {
            if (err instanceof Error) setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const resetMovies = () => {
        setMovies([])
    }

    const sortedMovies = useMemo(() => {
        console.log("calc")
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])



    return { movies: sortedMovies, getMovies, resetMovies, loading }
}