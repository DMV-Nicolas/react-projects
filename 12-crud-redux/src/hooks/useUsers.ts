import { useDispatch } from 'react-redux'
import { useAppSelector } from './store'
import { type User, type UserID } from '../types'
import { createUser, deleteUserByID } from '../stores/users/slice'
export function useUsers() {
  const users = useAppSelector(state => state.users)
  const dispatch = useDispatch()

  const handleDeleteUser = (id: UserID) => {
    dispatch(deleteUserByID(id))
  }

  const handleCreateUser = (user: User) => {
    dispatch(createUser(user))
  }

  return { users, handleDeleteUser, handleCreateUser }
}
