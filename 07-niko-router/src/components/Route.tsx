type RouteParams = {
    path: string
    component: (() => JSX.Element) | (React.LazyExoticComponent<() => JSX.Element>)
}

export function Route({ path, Component }: RouteParams) {
    return null
}