import { useState, useEffect } from "react"

export function useCatImage(fact: string): string {
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (!fact) return

        const firstThreeWords = fact.split(" ", 3).join(" ")
        fetch(`https://cataas.com/cat/says/${firstThreeWords}`)
            .then((res) => res.arrayBuffer())
            .then((data) => {
                const arrayBufferView = new Uint8Array(data);
                const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL(blob)
                setUrl(imageUrl)
            })
    }, [fact])

    return url
}