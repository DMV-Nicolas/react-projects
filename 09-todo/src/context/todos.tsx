import { createContext, useEffect, useState } from 'react'
import { getRandomID } from '../services/random'
import { TODO_FILTERS } from '../constants'
import { todos as mockTodos } from '../mocks/data.json'
import { type FilterValue, type TodoType, type TodosContext } from '../types'
import { getFilterURLParam } from '../services/filter'

export const todosContext = createContext<TodosContext | null>(null)

export const TodoProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>(mockTodos)
  const [filter, setFilter] = useState<FilterValue>(getFilterURLParam())
  const [filteredTodos, setFilteredTodos] = useState([...todos])

  const createTodo = (title: string): void => {
    const newTodos = [...todos]
    newTodos.push({
      id: getRandomID(16),
      title,
      completed: false
    })
    setTodos(newTodos)
  }

  const removeTodo = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const toggleTodo = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      return todo
    })
    setTodos(newTodos)
  }

  const changeFilter = (newFilter: FilterValue): void => {
    setFilter(newFilter)
  }

  useEffect(() => {
    if (filter === TODO_FILTERS.ALL) setFilteredTodos([...todos])

    if (filter === TODO_FILTERS.ACTIVE) {
      const newFilteredTodos = todos.filter((todo) => !todo.completed)
      setFilteredTodos(newFilteredTodos)
    }

    if (filter === TODO_FILTERS.COMPLETED) {
      const newFilteredTodos = todos.filter((todo) => todo.completed)
      setFilteredTodos(newFilteredTodos)
    }
  }, [filter, todos])

  return (
    <todosContext.Provider value={{
      todos,
      filter,
      filteredTodos,
      createTodo,
      removeTodo,
      toggleTodo,
      changeFilter
    }}>
      {children}
    </todosContext.Provider>
  )
}
