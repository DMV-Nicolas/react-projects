import { useState, useEffect } from "react"
import { EVENTS } from "../constants"
import { match } from "path-to-regexp"

type RouteType = {
    path: string
    component: () => JSX.Element
}

type RouterParams = {
    routes: RouteType[]
    defaultComponent: () => JSX.Element
}

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <></> }: RouterParams) {
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

    let routeParams = {}

    const Page = routes.find(({ path }) => {
        if (path === page) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(page)
        if (!matched) return false

        routeParams = matched.params
        return true
    })?.component

    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent routeParams={routeParams} />
}