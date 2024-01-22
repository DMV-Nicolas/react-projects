import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { TodoProvider } from './context/todos'

const App = (): JSX.Element => {
  return (
    <TodoProvider>
      <div className='todoapp'>
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  )
}

export default App
