import { useEffect, useRef, useState, useMemo } from 'react'
import { type User, type ApiData, SortBy } from './types.d'
import { UsersList } from './components/UsersList'
import './App.css'

const fetchUsers = async (page: number) => {
  const res = await fetch(`https://randomuser.me/api/?results=10&seed=devoracolas&page=${page}`)
  if (!res.ok) throw new Error('error in the request')
  const data: ApiData = await res.json()
  return data.results
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterByCountry, setFilterByCountry] = useState('')
  const originalUsers = useRef<User[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleChangeSorting = (sortBy: SortBy) => {
    sorting === sortBy ? setSorting(SortBy.NONE) : setSorting(sortBy)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const results = await fetchUsers(currentPage)
        setUsers((prevUsers) => {
          const newUsers = prevUsers.concat(results)
          originalUsers.current = newUsers
          return newUsers
        })
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [currentPage])

  const filteredUsers = useMemo(() => {
    return filterByCountry.length > 0
      ? users.filter((user) => (
        user.location.country.toLowerCase().includes(filterByCountry.toLowerCase())
      ))
      : users
  }, [users, filterByCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }

    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }

    if (sorting === SortBy.LASTNAME) {
      return filteredUsers.toSorted((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }

    return filteredUsers
  }, [filteredUsers, sorting])

  return (
    <div className="app">
      <h1>Technical test</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={() => { handleChangeSorting(SortBy.COUNTRY) }}>
          {sorting === SortBy.COUNTRY ? 'No ordenar por pais' : 'Ordenar por pais'}
        </button>
        <button onClick={handleReset}>
          Resetear estado
        </button>
        <input type="text" placeholder='Filtrar por pais' onChange={(e) => {
          setFilterByCountry(e.target.value)
        }} />
      </header>
      <main>
        {users.length > 0 &&
          <UsersList
            users={sortedUsers}
            showColors={showColors}
            deleteUser={handleDelete}
            changeSorting={handleChangeSorting}
          />
        }
        {loading && <p>Cargando...</p>}
        {!loading && error && <p>Ha ocurrido un error</p>}
        {!loading && !error && users.length === 0 && <p>No hay usuarios</p>}
        {!loading && !error &&
          <button onClick={() => { setCurrentPage(currentPage + 1) }}>
            Cargar mas resultados
          </button>
        }
      </main>
    </div>
  )
}

export default App
