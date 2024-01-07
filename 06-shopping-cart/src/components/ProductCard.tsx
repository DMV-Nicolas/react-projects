import { Product } from "../types"
import { AddToCartIcon } from "./Icons"
import "./ProductCard.css"

type ProductParams = {
  product: Product
}

export function ProductCard({ product }: ProductParams) {
  return (
    <div className="container">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <h4 className="product-price">${product.price}</h4>
          <button className="add-to-cart-btn"><AddToCartIcon /></button>
        </div>
      </div>
    </div>
  )
}