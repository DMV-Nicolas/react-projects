import { type Middleware, Tuple, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

export const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('usersData', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: () => new Tuple(persistanceMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
