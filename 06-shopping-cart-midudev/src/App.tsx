import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useProducts } from "./hooks/useProducts"
import { useFilters } from "./hooks/useFilters"
import { IS_DEVELOPMENT } from "./components/config"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"


function App() {
  const { products } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts({ products })

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
