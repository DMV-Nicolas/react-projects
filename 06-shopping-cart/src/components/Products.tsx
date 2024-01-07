import { ProductCard } from "./ProductCard"
import { isProductOnCart } from "../services/cart"
import { Product } from "../types"
import "./Products.css"

type ProductsParams = {
    products: Product[]
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
}

export function Products({ products, cart, addToCart, removeFromCart }: ProductsParams) {

    return (
        <ul className="products">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        isProductOnCart={isProductOnCart(product, cart)}
                    />
                </li>
            ))}
        </ul>
    )
}