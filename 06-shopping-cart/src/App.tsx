import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'
import { useState } from 'react'


function App() {
  const [priceFilter, setPriceFilter] = useState(250)
  const { products, getProducts } = useProducts()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceFilter = parseInt(e.target.value)
    setPriceFilter(newPriceFilter)
    getProducts(newPriceFilter)
  }

  return (
    <>
      <header>
        <h1>React Shop 🛒</h1>
        <form>
          <label htmlFor="price">Price from:</label>
          <input id="price" type="range" min={0} max={1000} value={priceFilter} onChange={handleChange} />
          <span>${priceFilter}</span>
        </form>
      </header>
      <main>
        <Products products={products} />
      </main>
    </>
  )
}

export default App
