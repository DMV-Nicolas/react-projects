import { ProductCard } from "./ProductCard"
import { Product } from "../types"
import "./Products.css"

type ProductsParams = {
    products: Product[]
}

export function Products({ products }: ProductsParams) {
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