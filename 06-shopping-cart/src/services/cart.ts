import { Product } from "../types";

export function isProductOnCart(product: Product, cart: Product[]): boolean {
    return cart.includes(product)
}

export function isCartEmpty(cart: Product[]): boolean {
    for (const product of cart) {
        if (product !== undefined) return false
    }
    return true
}