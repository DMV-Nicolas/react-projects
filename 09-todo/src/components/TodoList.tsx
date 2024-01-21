import { useTodos } from '../hooks/useTodos'
import { Todo } from './Todo'

export const TodoList = (): JSX.Element => {
  const { todos } = useTodos()

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id}>
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
