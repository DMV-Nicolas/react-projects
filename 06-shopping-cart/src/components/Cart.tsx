import { Product } from "../types"
import { ProductCard } from "./ProductCard"
import "./Cart.css"

type CartParams = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    closeCart: () => void
}

export function Cart({ cart, addToCart, removeFromCart, closeCart }: CartParams) {
    return (
        < aside className="shopping-cart" >
            <header>
                <h4>Shopping Cart</h4>
                <input type="button" onClick={closeCart} value="❌" />
            </header>
            {
                cart &&
                cart.map((product) => {
                    if (product === undefined || product === null) return
                    return (
                        <li key={product.id + "-cart"}>
                            <ProductCard
                                product={product}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                isProductOnCart={true}
                            />
                        </li>
                    )
                })
            }
        </aside >
    )

}