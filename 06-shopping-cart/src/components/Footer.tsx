import { Filters } from "../types"
import "./Footer.css"

type FooterParams = {
    filters: Filters
}

export function Footer({ filters }: FooterParams) {
    return (
        <footer className="footer">
            {JSON.stringify(filters, null, 2)}
        </footer>
    )
}