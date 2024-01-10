import { useEffect, useState } from "react"
import { searchProducts } from "../services/products"
import { Product } from "../types"

const INITIAL_PRODUCTS: Product[] = []

export function useProducts() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS)

    useEffect(() => {
        const getProducts = async () => {
            const newProducts = await searchProducts()
            setProducts(newProducts)
        }

        getProducts()
    }, [])

    const updateProducts = ({ newProducts }: { newProducts: Product[] }) => {
        setProducts(newProducts)
    }

    return { products, updateProducts }
}