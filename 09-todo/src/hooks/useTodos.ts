import { useContext } from 'react'
import { todosContext } from '../context/todos'
import { type TodosContext } from '../types'

export const useTodos = (): TodosContext => {
  const context = useContext(todosContext)
  if (context == null) {
    throw new Error('Error to use context')
  }

  const { todos, createTodo, removeTodo, toggleTodo } = context
  return { todos, createTodo, removeTodo, toggleTodo }
}
