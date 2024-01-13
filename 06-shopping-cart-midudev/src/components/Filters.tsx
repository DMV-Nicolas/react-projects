import { ChangeEvent, useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const { filters, updateFilters } = useFilters()
    const minPriceID = useId()
    const categoryID = useId()

    const handleChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = parseInt(e.target.value)
        updateFilters({ minPrice: newMinPrice })
    }

    const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value
        updateFilters({ category: newCategory })
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceID}>Min Price:</label>
                <input
                    type="range"
                    id={minPriceID}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryID}>Category</label>
                <select id={categoryID} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}