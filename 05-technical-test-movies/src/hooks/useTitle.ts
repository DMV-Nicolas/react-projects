import { useState } from "react"

const sleep = function (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export function useTitle(): [string, (e: React.FormEvent<HTMLFormElement>) => void, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [title, setTitle] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.target instanceof HTMLFormElement && e.target.childNodes[0] instanceof HTMLInputElement) {
            const title = e.target.childNodes[0].value
            setTitle(title)
        }
    }

    let priority = 0
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventPriority = priority
        priority++

        await sleep(500)
        if (e.target instanceof HTMLInputElement && eventPriority === priority - 1) {
            const newTitle = e.target.value
            setTitle(newTitle)
        }
    }

    return [title, handleSubmit, handleChange]
}