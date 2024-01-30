import { type Middleware, Tuple, configureStore, type PayloadAction, type Action } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from 'sonner'
import { type UserID } from '../types'

export const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('usersData', JSON.stringify(store.getState()))
}

export const syncDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
  const { type } = action as Action
  const previousState: RootState = store.getState()

  next(action)

  if (type === 'users/deleteUserByID') {
    const { payload: userIDToRemove } = action as PayloadAction<UserID>
    const userToRemove = previousState.users.find(user => user.id === userIDToRemove)

    fetch(`https://jsonplaceholder.typicode.com/users/${userIDToRemove}`,
      { method: 'DELETE' }
    ).then(res => {
      if (res.ok) {
        toast.success(`User with ID=${userIDToRemove} deleted successfully`)
      } else {
        throw new Error('Error to delete the user')
      }
    }).catch((err: Error) => {
      toast.error(err.message)
      if (userToRemove !== undefined) store.dispatch(rollbackUser(userToRemove))
    })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: () => new Tuple(persistanceMiddleware, syncDatabaseMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
