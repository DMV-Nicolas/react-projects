import { EVENTS } from "../constants"

function navigate(href: string) {
    window.history.pushState({}, "", href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

type LinkParams = {
    target?: string
    to: string
    props: any
}

export function Link({ target, to, ...props }: LinkParams) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const isMainEvent = e.button === 0
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const isManageableEvent = target === undefined || target === "_self"

        if (isMainEvent && !isModifiedEvent && isManageableEvent) {
            e.preventDefault()
            navigate(to)
        }
    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props}></a>
    )
}