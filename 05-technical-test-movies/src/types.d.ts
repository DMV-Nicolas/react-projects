export type Movie = {
    title: string,
    year: number,
    id: string,
    type: string,
    poster: string
}

export type MovieAPIResponse = {
    Search: MovieAPISearch[]
    totalResults: string
    Response: string
}

export type MovieAPISearch = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}