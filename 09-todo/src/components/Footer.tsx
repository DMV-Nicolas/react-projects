import { Filters } from './Filters'
import { useTodos } from '../hooks/useTodos'

export const Footer = (): JSX.Element => {
  const { todos } = useTodos()
  const activeTodosCount = todos.filter((todo) => !todo.completed).length

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong> tareas pendientes
      </span>
      <Filters />
    </footer>
  )
}
