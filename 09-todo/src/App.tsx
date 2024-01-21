import { TodoList } from './components/TodoList'
import { TodoProvider } from './context/todos'

const App = (): JSX.Element => {
  return (
    <TodoProvider>
      <div className='todoapp'>
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
