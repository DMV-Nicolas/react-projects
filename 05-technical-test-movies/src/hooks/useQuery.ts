import { useState, useEffect, useRef } from "react"
import { validQuery } from "../services/query"

export function useQuery(): { query: string, setQuery: React.Dispatch<React.SetStateAction<string>>, error: string } {
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")
    const isFirstInput = useRef(true)

    // check valid query
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = query === ""
            return
        }

        const error = validQuery(query)
        setError(error)
    }, [query])

    return { query, setQuery, error }
}