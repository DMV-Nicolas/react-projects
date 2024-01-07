import { useState, useEffect, useRef } from "react"

export function useQuery(): [string, (e: React.FormEvent<HTMLFormElement>) => void, (e: React.ChangeEvent<HTMLInputElement>) => void, string] {
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")
    const isFirstInput = useRef(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.target instanceof HTMLFormElement) {
            const fields = new window.FormData(e.target)
            const newQuery = fields.get("movieTitle")
            if (typeof newQuery?.toString() === "string") {
                setQuery(newQuery.toString())
            }
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            const newQuery = e.target.value
            setQuery(newQuery)
        }
    }

    // check valid query
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = query === ""
            return
        }

        if (query === "") {
            setError("you can't search for an empty movie")
            return
        }

        if (query.match(/^\d+$/)) {
            setError("You can't search for a movie with a number")
            return
        }

        if (query.length < 3) {
            setError("The search must be at least 3 characters")
            return
        }

        setError("")
    }, [query])

    return [query, handleSubmit, handleChange, error]
}