import { useState, useEffect, useCallback } from "react"
import { searchProducts, sortProductsByPrice } from "../services/products"
import { Product } from "../types"

const DEFAULT_PRODUCTS: Product[] = []

export function useProducts(): { products: Product[], getProducts: (priceFilter: number) => void } {
    const [priceFilter, setPriceFilter] = useState(250)
    const [products, setProducts] = useState(DEFAULT_PRODUCTS)
    const [, setError] = useState("")

    const getProducts = useCallback(async (priceFilter: number) => {
        try {
            const newProducts = await searchProducts()
            const filterProducts = sortProductsByPrice(newProducts, priceFilter)
            setProducts(filterProducts)
        } catch (err) {
            setError("Error: cannot get products")
        }
    }, [])

    useEffect(() => {
        searchProducts().
            then(data => setProducts(data))
    }, [])

    useEffect(() => {
        getProducts(priceFilter)
    }, [priceFilter, getProducts])

    return { products, getProducts }
}