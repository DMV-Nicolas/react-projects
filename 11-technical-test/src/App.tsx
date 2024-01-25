import { useEffect, useRef, useState } from 'react'
import { type SortedFilter, type FiltersType, type RandomUserAPIResponse, type UserType } from './types'
import { RANDOM_USER_API_URL } from './constants'
import { ListOfUsers } from './components/ListOfUsers'
import { Filters } from './components/Filters'

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([...users])
  const [filters, setFilters] = useState<FiltersType>({
    rowsColored: false,
    sortedByCountry: false,
    sortedByName: false,
    sortedByLastName: false,
    country: ''
  })
  const initialUsers = useRef<UserType[]>([])
  const lastCountryFilter = useRef(filters.country)
  const lastSortedByCountryFilter = useRef(filters.sortedByCountry)
  const lastSortedByLastNameFilter = useRef(filters.sortedByLastName)
  const lastSortedByNameFilter = useRef(filters.sortedByName)

  const resetUsersState = () => {
    setUsers(initialUsers.current)
  }

  const deleteUserByEmail = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const toggleRowsColoredFilter = () => {
    setFilters({
      ...filters,
      rowsColored: !filters.rowsColored
    })
  }

  const toggleSortedBy = (sortedFilter: SortedFilter) => {
    if (sortedFilter === 'country') {
      setFilters({
        ...filters,
        sortedByLastName: false,
        sortedByName: false,
        sortedByCountry: !filters.sortedByCountry
      })
    }

    if (sortedFilter === 'lastName') {
      setFilters({
        ...filters,
        sortedByLastName: !filters.sortedByLastName,
        sortedByName: false,
        sortedByCountry: false
      })
    }

    if (sortedFilter === 'name') {
      setFilters({
        ...filters,
        sortedByLastName: false,
        sortedByName: !filters.sortedByName,
        sortedByCountry: false
      })
    }
  }

  const setCountryFilter = (country: string) => {
    setFilters({
      ...filters,
      country
    })
  }

  const sortUsersBy = (users: UserType[], sortedFilter: SortedFilter): UserType[] => {
    const sortedUsers = users.toSorted((a, b) => {
      let ax: string = ''
      let bx: string = ''
      if (sortedFilter === 'country') {
        ax = a.location.country
        bx = b.location.country
      }

      if (sortedFilter === 'lastName') {
        ax = a.name.last
        bx = b.name.last
      }

      if (sortedFilter === 'name') {
        ax = a.name.first
        bx = b.name.first
      }
      return ax < bx ? -1 : 1
    })
    return sortedUsers
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(RANDOM_USER_API_URL + '?results=100')
      const data: RandomUserAPIResponse = await res.json()
      initialUsers.current = data.results
      setUsers(initialUsers.current)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    if (users.length === 0) return

    let newFilteredUsers: UserType[] = []
    if (lastCountryFilter.current !== filters.country) {
      newFilteredUsers = users.filter((user) => {
        const country = user.location.country
        return country.toLowerCase().includes(filters.country.toLowerCase())
      })
      lastCountryFilter.current = filters.country
    } else {
      newFilteredUsers = [...users]
    }

    if (lastSortedByCountryFilter.current !== filters.sortedByCountry) {
      if (filters.sortedByCountry) {
        newFilteredUsers = sortUsersBy(newFilteredUsers, 'country')
      }
      lastSortedByCountryFilter.current = filters.sortedByCountry
    }

    if (lastSortedByLastNameFilter.current !== filters.sortedByLastName) {
      if (filters.sortedByLastName) {
        newFilteredUsers = sortUsersBy(newFilteredUsers, 'lastName')
      }
      lastSortedByLastNameFilter.current = filters.sortedByLastName
    }

    if (lastSortedByNameFilter.current !== filters.sortedByName) {
      if (filters.sortedByName) {
        newFilteredUsers = sortUsersBy(newFilteredUsers, 'name')
      }
      lastSortedByNameFilter.current = filters.sortedByName
    }

    setFilteredUsers(newFilteredUsers)
  }, [users, filters.sortedByCountry, filters.sortedByName, filters.sortedByLastName, filters.country])

  console.log(filters)

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Technical test</h1>
      <Filters
        filters={filters}
        toggleRowsColoredFilter={toggleRowsColoredFilter}
        toggleSortedBy={toggleSortedBy}
        resetUsersState={resetUsersState}
        setCountryFilter={setCountryFilter}
      />
      <ListOfUsers
        users={filteredUsers}
        filters={filters}
        deleteUserByEmail={deleteUserByEmail}
        toggleSortedBy={toggleSortedBy}
      />
    </main>
  )
}

export default App
