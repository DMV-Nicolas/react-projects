import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"
import { CartItem, Product } from "../types"
import "./Cart.css"

type CartItemParams = {
    item: CartItem
    addToCart: () => void
}

function CartItem({ item, addToCart }: CartItemParams) {
    return (
        <li>
            <img
                src={item.image}
                alt={item.name}
            />
            <div>
                <strong>{item.name}</strong> - ${item.price}
            </div>

            <footer>
                <small>
                    Qty: {item.quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const { cart, addToCart, removeFromCart } = useCart()
    const cartCheckBoxID = useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxID}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxID} hidden />
            <aside className="cart">
                <ul>
                    {
                        cart.map((item) => {
                            const product: Product = { ...item }
                            return (
                                <CartItem
                                    item={item}
                                    addToCart={() => addToCart({ product })}
                                />
                            )
                        })
                    }
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}