import { Link, Route, Routes, useParams, Outlet, NavLink } from "react-router-dom"

const HomePage = () => <h2>Home</h2>

const SearchPage = () => {
  const tacos = [
    "queso", "peperoni", "carne",
    "pollo", "papa", "tomate"
  ]

  return (
    <div>
      <h2>Search</h2>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>Taco of {taco}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TacosPage = () => {
  const { name: tacoName } = useParams()
  return (
    <>
      <h2>Taco of {tacoName}</h2>
      <Link to="details">details</Link>
      <Outlet />
    </>
  )
}

const TacoDetailsPage = () => {
  const { name: tacoName } = useParams()
  return (
    <h2>Taco details of {tacoName}</h2>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tacos/:name" element={<TacosPage />}>
          <Route path="details" element={<TacoDetailsPage />} />
        </Route>
        <Route path="*" element={<h2>Not found (404)</h2>} />
      </Routes>
    </div>
  )
}

export default App
