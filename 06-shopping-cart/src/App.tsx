import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'
import { useState } from 'react'


function App() {
  const [minPriceFilter, setMinPriceFilter] = useState(250)
  const [categoryFilter, setCategoryFilter] = useState("all")
  const { products, getProducts } = useProducts()

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

  return (
    <div className="page">
      <header>
        <h1>React Shop 🛒</h1>
        <form>
          <label htmlFor="price">Price from:</label>
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
        <Products products={products} />
      </main>
    </div>
  )
}

export default App
