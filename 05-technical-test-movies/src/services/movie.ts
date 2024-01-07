import { Movie, MovieAPIResponse } from "../types"

const API_KEY = "4287ad07"
const PREFIX_URL = "http://www.omdbapi.com/"

export async function searchMovies(query: string): Promise<Movie[]> {
    try {
        const res = await fetch(`${PREFIX_URL}?apikey=${API_KEY}&s=${query}`)
        const data: MovieAPIResponse = await res.json()
        if (data.Response !== "True") return []

        return data.Search.map((m): Movie => {
            const year = parseInt(m.Year)
            return {
                id: m.imdbID,
                poster: m.Poster,
                title: m.Title,
                type: m.Type, year
            }
        })
    } catch (err) {
        throw new Error("Error searching movies")
    }
} 