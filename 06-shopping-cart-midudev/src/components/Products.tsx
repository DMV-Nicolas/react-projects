import { Product } from "../types"
import { AddToCartIcon } from "./Icons"
import "./Products.css"

type ProductsParams = {
    products: Product[]
}

export function Products({ products }: ProductsParams) {
    return (
        <main className="products">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <strong>{product.name} </strong>
                            <span>- ${product.price}</span>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}