import { type User } from '../types'

interface Props {
  users: User[]
  showColors: boolean
  deleteUser: (email: string) => void
}

export function UsersList({ users, showColors, deleteUser }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <td>Foto</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>País</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          const trClassName = showColors ? 'alternativeColors' : ''
          return (
            <tr className={trClassName} key={user.email}>
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
