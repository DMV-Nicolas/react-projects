import { useEffect, useRef, useState, useMemo } from 'react'
import { type User, type ApiData, SortBy } from './types.d'
import { UsersList } from './components/UsersList'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterByCountry, setFilterByCountry] = useState('')
  const originalUsers = useRef<User[]>([])

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
        const res = await fetch('https://randomuser.me/api/?results=100')
        const data: ApiData = await res.json()
        const results = data.results
        setUsers(results)
        originalUsers.current = results
      } catch (err) {
        console.log('Error to fetch the API: ', err)
      }
    }

    fetchData()
  }, [])

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
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          deleteUser={handleDelete}
          changeSorting={handleChangeSorting}
        />
      </main>
    </div>
  )
}

export default App
