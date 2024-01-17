import { useState, useEffect, Children } from "react"
import { EVENTS } from "../constants"
import { match } from "path-to-regexp"

type RouteType = {
    path: string
    component: (() => JSX.Element) | (React.LazyExoticComponent<() => JSX.Element>)
}

type RouterParams = {
    routes?: RouteType[]
    defaultComponent: (() => JSX.Element) | (React.LazyExoticComponent<() => JSX.Element>)
    children: JSX.Element[] | JSX.Element
}

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <></>, children }: RouterParams) {
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

    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'
        return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    let routeParams = {}
    const Page = routesToUse.find(({ path }) => {
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