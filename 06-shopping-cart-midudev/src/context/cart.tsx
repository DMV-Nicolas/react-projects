import { createContext, useState } from "react";
import { CartContextType, CartItem, Product } from "../types";

const INITIAL_CART: CartItem[] = []

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children?: React.ReactNode }) {
    const [cart, setCart] = useState(INITIAL_CART)

    const addToCart = ({ product }: { product: Product }) => {
        const itemIndex = cart.findIndex((item) => item.id === product.id)

        if (itemIndex >= 0) {
            const newCart = [
                ...cart.slice(0, itemIndex),
                { ...cart[itemIndex], quantity: cart[itemIndex].quantity + 1 },
                ...cart.slice(itemIndex + 1)
            ]
            setCart(newCart)
        } else {
            const newCart = [
                ...cart,
                {
                    ...product,
                    quantity: 1
                }]
            setCart(newCart)
        }
    }

    const removeFromCart = ({ productID }: { productID: number }) => {
        const newCart = cart.filter(item => item.id !== productID)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}