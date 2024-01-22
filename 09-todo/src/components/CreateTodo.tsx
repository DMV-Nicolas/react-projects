import { useTodos } from '../hooks/useTodos'

export const CreateTodo = (): JSX.Element => {
  const { createTodo } = useTodos()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return
      createTodo(e.target.value)
    }
  }

  return (
    <input
      className='new-todo'
      onKeyDown={handleKeyDown}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
  )
}
