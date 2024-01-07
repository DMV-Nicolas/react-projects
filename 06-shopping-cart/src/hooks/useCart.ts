import { useCallback, useState } from "react";
import { Product } from "../types";

const DEFAULT_CART: Product[] = []

export function useCart() {
    const [cart, setCart] = useState(DEFAULT_CART)

    const addToCart = useCallback((product: Product) => {
        const newCart = [...cart]
        newCart.push(product)
        setCart(newCart)
    }, [cart])

    const removeFromCart = useCallback((product: Product) => {
        const newCart = [...cart]
        delete (newCart[newCart.indexOf(product)])
        setCart(newCart)
    }, [cart])

    return { cart, addToCart, removeFromCart }
}