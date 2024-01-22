import { useContext } from 'react'
import { todosContext } from '../context/todos'
import { type TodosContext } from '../types'

export const useTodos = (): TodosContext => {
  const context = useContext(todosContext)
  if (context == null) {
    throw new Error('Error to use context')
  }

  return {
    todos: context.todos,
    filter: context.filter,
    filteredTodos: context.filteredTodos,
    createTodo: context.createTodo,
    removeTodo: context.removeTodo,
    toggleTodo: context.toggleTodo,
    removeCompletedTodos: context.removeCompletedTodos,
    changeFilter: context.changeFilter
  }
}
