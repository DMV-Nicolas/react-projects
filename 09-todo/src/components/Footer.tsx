import { Filters } from './Filters'
import { useTodos } from '../hooks/useTodos'

export const Footer = (): JSX.Element => {
  const { todos } = useTodos()
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong> tareas pendientes
      </span>
      <Filters />
    </footer>
  )
}
