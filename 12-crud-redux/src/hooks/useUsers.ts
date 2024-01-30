import { useDispatch } from 'react-redux'
import { useAppSelector } from './store'
import { type UserID } from '../types'
import { deleteUserByID } from '../stores/users/slice'
export function useUsers() {
  const users = useAppSelector(state => state.users)
  const dispatch = useDispatch()

  const handleDeleteUser = (id: UserID) => {
    dispatch(deleteUserByID(id))
  }

  return { users, handleDeleteUser }
}
