import { useCatImage } from "./hooks/useCatImage"
import { useCatfact } from "./hooks/useCatFact"
import "./App.css"

export function App() {
  const { fact, refreshFact } = useCatfact()
  const imageUrl = useCatImage(fact)

  return (
    <main>
      <h1>Cat facts</h1>
      <button onClick={refreshFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Image extracted from cataas" />}
    </main>
  )
}