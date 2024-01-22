import { useContext } from 'react'
import { todosContext } from '../context/todos'
import { type TodosContext } from '../types'

export const useTodos = (): TodosContext => {
  const context = useContext(todosContext)
  if (context == null) {
    throw new Error('Error to use context')
  }

  const { todos, filter, filteredTodos, createTodo, removeTodo, toggleTodo, changeFilter } = context
  return { todos, filter, filteredTodos, createTodo, removeTodo, toggleTodo, changeFilter }
}
