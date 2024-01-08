import { Product } from "../types";

export function isProductOnCart(product: Product, cart: Product[]): boolean {
    for (const p of cart) {
        if (p === null || p === undefined) continue
        if (p.id === product.id) return true
    }
    return false
}

export function cartIndexOf(product: Product, cart: Product[]): number {
    for (const key in cart) {
        if (cart[key] === undefined || cart[key] === null) continue
        const i = parseInt(key)
        if (cart[key].id === product.id) return i
    }
    return -1
}