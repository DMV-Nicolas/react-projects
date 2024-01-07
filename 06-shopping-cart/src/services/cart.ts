import { Product } from "../types";

export function isProductOnCart(product: Product, cart: Product[]): boolean {
    return cart.includes(product)
}