import { useEffect, useRef, useState } from 'react'
import { type User, type ApiData } from './types'
import { UsersList } from './components/UsersList'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState('')
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry((prevState) => !prevState)
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
        const res = await fetch('https://randomuser.me/api/?results=200')
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

  const filteredUsers = users.filter((user) => (
    user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  ))

  const sortedUsers = sortByCountry
    ? filteredUsers.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : filteredUsers

  return (
    <div className="app">
      <h1>Technical test</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'No ordenar por pais' : 'Ordenar por pais'}
        </button>
        <button onClick={handleReset}>
          Resetear estado
        </button>
        <input type="text" placeholder='Filtrar por pais' onChange={(e) => {
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        <UsersList users={sortedUsers} showColors={showColors} deleteUser={handleDelete} />
      </main>
    </div>
  )
}

export default App
