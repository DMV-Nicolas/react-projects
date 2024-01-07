import { useState } from 'react'
import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { useCart } from './hooks/useCart'
import { useProducts } from './hooks/useProducts'


function App() {
  const [minPriceFilter, setMinPriceFilter] = useState(250)
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [showCart, setShowCart] = useState(false)
  const { products, getProducts } = useProducts()
  const { cart, addToCart, removeFromCart } = useCart()

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceFilter = parseInt(e.target.value)
    setMinPriceFilter(newPriceFilter)
    getProducts(newPriceFilter, categoryFilter)
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategoryFilter = e.target.value
    setCategoryFilter(newCategoryFilter)
    getProducts(minPriceFilter, newCategoryFilter)
  }

  const handleClickShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="page">
      <header>
        <h1>React Shop 🛒</h1>
        <form>
          <input type="button" onClick={handleClickShowCart} value="🛒" />
          <label htmlFor="minPrice">Price from:</label>
          <input id="minPrice" type="range" min={0} max={1000} value={minPriceFilter} onChange={handleChangeMinPrice} />
          <span>${minPriceFilter}</span>
          <label htmlFor="category">Category:</label>
          <select id="category" value={categoryFilter} onChange={handleChangeCategory}>
            <option value='all'>Todas</option>
            <option value='laptops'>Portátiles</option>
            <option value='smartphones'>Celulares</option>
          </select>
        </form>
      </header>
      <main>
        <Products
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
      {showCart &&
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          closeCart={handleClickShowCart}
        />
      }

    </div>
  )
}

export default App
