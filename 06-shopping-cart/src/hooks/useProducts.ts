import { useState, useEffect, useCallback } from "react"
import { searchProducts, sortProductsByPrice, sortProductsByCategory } from "../services/products"
import { Product } from "../types"

const DEFAULT_PRODUCTS: Product[] = []

export function useProducts(): { products: Product[], getProducts: (priceFilter: number, categoryFilter: string) => void } {
    const [products, setProducts] = useState(DEFAULT_PRODUCTS)
    const [, setError] = useState("")

    const getProducts = useCallback(async (priceFilter: number, categoryFilter: string) => {
        try {
            const newProducts = await searchProducts()
            let filterProducts = sortProductsByCategory(newProducts, categoryFilter)
            filterProducts = sortProductsByPrice(filterProducts, priceFilter)

            setProducts(filterProducts)
        } catch (err) {
            setError("Error: cannot get products")
        }
    }, [])

    useEffect(() => {
        searchProducts().
            then(data => setProducts(data))
    }, [])

    return { products, getProducts }
}