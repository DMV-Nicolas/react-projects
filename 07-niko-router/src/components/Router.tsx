import { useState, useEffect } from "react"
import { EVENTS } from "../constants"

type RouteType = {
    path: string
    component: JSX.Element
}

type RouterParams = {
    routes: RouteType[]
    defaultComponent: JSX.Element
}

export function Router({ routes = [], defaultComponent = <></> }: RouterParams) {
    const [page, setPage] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setPage(window.location.pathname)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    const Page = routes.find(({ path }) => path === page)?.component
    return Page ? Page : defaultComponent
}