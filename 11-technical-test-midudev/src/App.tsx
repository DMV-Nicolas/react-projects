import { useEffect, useState } from 'react'
import { type User, type ApiData } from './types'
import { UsersList } from './components/UsersList'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?results=50')
        const data: ApiData = await res.json()
        const results = data.results
        setUsers(results)
      } catch (err) {
        console.log('Error to fetch the API: ', err)
      }
    }

    fetchData()
  }, [])

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users

  return (
    <div className="app">
      <h1>Technical test</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'No ordenar por pais' : 'Ordenar por pais'}
        </button>
      </header>
      <main>
        <UsersList users={sortedUsers} showColors={showColors} deleteUser={handleDelete} />
      </main>
    </div>
  )
}

export default App
