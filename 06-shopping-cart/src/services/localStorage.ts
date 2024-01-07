import { Product } from "../types";

export function saveCart(cart: Product[]) {
    const cartJSON = JSON.stringify(cart)
    localStorage.setItem("cart", cartJSON)
}

export function loadCart(): Product[] {
    const cartJSON = localStorage.getItem("cart")
    if (cartJSON === null) return []
    const cart: Product[] = JSON.parse(cartJSON)
    return cart
}