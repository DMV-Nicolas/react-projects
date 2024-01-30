import { SortBy, type User } from '../types.d'

interface Props {
  users: User[]
  showColors: boolean
  deleteUser: (email: string) => void
  changeSorting: (sortBy: SortBy) => void
}

export function UsersList({ users, showColors, deleteUser, changeSorting }: Props) {
  const tbodyClassName = showColors ? 'alternativeColors' : ''

  return (
    <table width="100%">
      <thead className='pointer'>
        <tr>
          <td>Foto</td>
          <td onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</td>
          <td onClick={() => { changeSorting(SortBy.LASTNAME) }}>Apellido</td>
          <td onClick={() => { changeSorting(SortBy.COUNTRY) }}>País</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody className={tbodyClassName}>
        {users.map((user) => {
          return (
            <tr key={user.email}>
              <td>
                <img src={user.picture.thumbnail} alt={`${user.name.first} Image extracted of randomuser API`} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => { deleteUser(user.email) }}>Eliminar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
