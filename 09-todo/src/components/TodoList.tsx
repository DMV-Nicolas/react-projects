import { useTodos } from '../hooks/useTodos'
import { Todo } from './Todo'

export const TodoList = (): JSX.Element => {
  const { filteredTodos } = useTodos()

  return (
    <ul className='todo-list'>
      {filteredTodos.map((todo) => (
        <li className={todo.completed ? 'completed' : ''} key={todo.id}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}
