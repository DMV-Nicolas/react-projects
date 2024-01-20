import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    const priority = useRef(0)
    priority.current++
    const valuePriority = priority.current

    useEffect(() => {
        setTimeout(() => {
            if (valuePriority === priority.current) {
                setDebouncedValue(value)
            }

        }, delay)

    }, [value, delay])


    return debouncedValue
}