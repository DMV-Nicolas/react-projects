import { Product } from "../types"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import "./ProductCard.css"

type ProductParams = {
  product: Product
  addToCart: (Product: Product) => void
  removeFromCart: (Product: Product) => void
  isProductOnCart: boolean
}

export function ProductCard({ product, addToCart, removeFromCart, isProductOnCart }: ProductParams) {
  const handleClickAddToCart = () => {
    addToCart(product)
  }

  const handleClickRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <h4 className="product-price">${product.price}</h4>
          {
            isProductOnCart
              ? <button className="remove-to-cart-btn" onClick={handleClickRemoveFromCart}>
                <RemoveFromCartIcon />
              </button>
              : <button className="add-to-cart-btn" onClick={handleClickAddToCart}>
                <AddToCartIcon />
              </button>
          }
        </div>
      </div>
    </div>
  )
}