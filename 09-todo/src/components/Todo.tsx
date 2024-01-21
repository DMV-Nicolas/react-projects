import { useTodos } from '../hooks/useTodos'
import { type TodoType } from '../types'

export const Todo = ({ id, title, completed }: TodoType): JSX.Element => {
  const { removeTodo, toggleTodo } = useTodos()

  return (
    <div className='view'>
      <input
        className='toggle'
        type="checkbox"
        checked={completed}
        onChange={() => { toggleTodo(id) }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => { removeTodo(id) }}
      ></button>
    </div>
  )
}
