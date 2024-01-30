import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatfact() {
    const [fact, setFact] = useState("")

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    const refreshFact = async () => {
        const randomFact = await getRandomFact()
        setFact(randomFact)
    }

    return { fact, refreshFact }
}