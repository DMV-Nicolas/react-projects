import { useCart } from "../hooks/useCart"
import { Product } from "../types"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import "./Products.css"

type ProductsParams = {
    products: Product[]
}

export function Products({ products }: ProductsParams) {
    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductInCart = ({ product }: { product: Product }) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.map((product) => {
                    const isProductInCart = checkProductInCart({ product })
                    return (
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <strong>{product.name} </strong>
                                <span>- ${product.price}</span>
                            </div>
                            <div>
                                <button
                                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                                        isProductInCart
                                            ? removeFromCart({ productID: product.id })
                                            : addToCart({ product })
                                    }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}