import { Filters } from './Filters'
import { useTodos } from '../hooks/useTodos'
import { TODO_FILTERS } from '../constants'

export const Footer = (): JSX.Element => {
  const { todos, filter, removeCompletedTodos } = useTodos()
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters />
      {
        completedCount > 0 && filter !== TODO_FILTERS.ACTIVE && (
          <button
            className="clear-completed"
            onClick={removeCompletedTodos}>
            Borrar completados
          </button>
        )
      }

    </footer>
  )
}
