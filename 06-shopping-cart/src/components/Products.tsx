import { ProductCard } from "./ProductCard"
import { getProducts } from "../services/products"
import "./Products.css"

export function Products() {
    const products = getProducts()

    return (
        <ul className="products">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    )
}