import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from "../reducers/cart";
import { CartContextType, Product } from "../types";


export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children?: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = ({ product }: { product: Product }) => dispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product,
    })

    const removeFromCart = ({ productID }: { productID: number }) => dispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: productID,
    })

    const clearCart = () => dispatch({
        type: CART_ACTION_TYPES.CLEAR_CART,
        payload: null,
    })

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}