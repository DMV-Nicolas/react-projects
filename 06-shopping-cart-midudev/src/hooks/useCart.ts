import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
    const cartContext = useContext(CartContext)

    if (cartContext === undefined || cartContext === null) {
        throw new Error("cartContext is undefined")
    }

    return cartContext
}