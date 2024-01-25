import { type SortedFilter, type FiltersType, type UserType } from '../types'
import './ListOfUsers.css'

interface Props {
  users: UserType[]
  filters: FiltersType
  deleteUserByEmail: (email: string) => void
  toggleSortedBy: (sortedFilter: SortedFilter) => void
}

export function ListOfUsers({ users, filters, deleteUserByEmail, toggleSortedBy }: Props) {
  const isUserRowColored = filters.rowsColored

  return (
    <table className='listOfUsers'>
      <thead>
        <tr>
          <td>Picture</td>
          <td onClick={() => { toggleSortedBy('name') }}>Name</td>
          <td onClick={() => { toggleSortedBy('lastName') }}>LastName</td>
          <td onClick={() => { toggleSortedBy('country') }}>Country</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.email}
            className={`${isUserRowColored ? 'colored' : ''}`}
          >
            <td>
              <img src={user.picture.thumbnail} alt={`Image of ${user.name.first} extracted from the random user API`} />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button onClick={() => { deleteUserByEmail(user.email) }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
