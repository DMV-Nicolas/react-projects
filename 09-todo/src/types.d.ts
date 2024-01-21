export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export interface TodosContext {
  todos: TodoType[]
  createTodo: (title: string) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string) => void
}
