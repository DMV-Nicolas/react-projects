import { CartItem, Product } from "../types"

const localStorageCart = localStorage.getItem("cart") || "[]"
export const cartInitialState: CartItem[] = JSON.parse(localStorageCart) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
}

function updateLocalStorage({ cart }: { cart: CartItem[] }) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

export function cartReducer(state: CartItem[], action: { type: string, payload: Product | number | null }) {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            if (actionPayload === null || typeof actionPayload === "number") return state
            const itemIndex = state.findIndex((item) => item.id === actionPayload.id)

            if (itemIndex >= 0) {
                const newState = [
                    ...state.slice(0, itemIndex),
                    { ...state[itemIndex], quantity: state[itemIndex].quantity + 1 },
                    ...state.slice(itemIndex + 1)
                ]
                updateLocalStorage({ cart: newState })
                return newState
            } else {
                const newState = [
                    ...state,
                    {
                        ...actionPayload,
                        quantity: 1
                    }]
                updateLocalStorage({ cart: newState })
                return newState
            }
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            if (typeof actionPayload !== "number") return state
            const newState = state.filter(item => item.id !== actionPayload)
            updateLocalStorage({ cart: newState })
            return newState
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage({ cart: [] })
            return []
        }
    }
    return state
}