import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { Product, Filters } from "../types"


export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = ({ products }: { products: Product[] }) => {
        return products.filter((product) => (
            product.price >= filters.minPrice &&
            (
                filters.category === "all" ||
                filters.category === product.category
            )
        ))
    }

    const updateFilters = ({ minPrice, category }: { minPrice?: number, category?: string }) => {
        const newFilters: Filters = {
            minPrice: minPrice === undefined ? filters.minPrice : minPrice,
            category: category === undefined ? filters.category : category,
        }

        setFilters(newFilters)
    }

    return { filters, filterProducts, updateFilters }
}