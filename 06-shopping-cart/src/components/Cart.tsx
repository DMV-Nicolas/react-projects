import { Product } from "../types"
import { ProductCard } from "./ProductCard"
import "./Cart.css"

type CartParams = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
}

export function Cart({ cart, addToCart, removeFromCart }: CartParams) {
    return (
        < aside className="shopping-cart" >
            <h4>Shopping Cart</h4>
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