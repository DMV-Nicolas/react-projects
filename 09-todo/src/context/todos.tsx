import { createContext, useState } from 'react'
import { type TodoType, type TodosContext } from '../types'
import { getRandomID } from '../services/random'

const mockTodos: TodoType[] = [
  {
    id: '1',
    title: 'Complete react router course',
    completed: false
  },
  {
    id: '2',
    title: 'Drink water',
    completed: true
  },
  {
    id: '3',
    title: 'write a calendar',
    completed: false
  }
]

export const todosContext = createContext<TodosContext | null>(null)

export const TodoProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

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

  return (
    <todosContext.Provider value={{ todos, createTodo, removeTodo, toggleTodo }}>
      {children}
    </todosContext.Provider>
  )
}
