import { type TODO_FILTERS } from './constants'

export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export interface TodosContext {
  todos: TodoType[]
  filter: FilterValue
  filteredTodos: TodoType[]
  createTodo: (title: string) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string) => void
  changeFilter: (newFilter: FilterValue) => void
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
