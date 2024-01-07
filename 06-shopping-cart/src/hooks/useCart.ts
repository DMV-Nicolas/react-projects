import { useCallback, useState } from "react";
import { Product } from "../types";
import { loadCart, saveCart } from "../services/localStorage";

export function useCart() {
    const [cart, setCart] = useState(() => {
        const cart = loadCart()
        return cart
    })

    const addToCart = useCallback((product: Product) => {
        const newCart = [...cart]
        newCart.push(product)
        saveCart(newCart)
        setCart(newCart)
    }, [cart])

    const removeFromCart = useCallback((product: Product) => {
        const newCart = [...cart]
        delete (newCart[newCart.indexOf(product)])
        saveCart(newCart)
        setCart(newCart)
    }, [cart])

    return { cart, addToCart, removeFromCart }
}