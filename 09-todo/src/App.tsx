import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { TodoProvider } from './context/todos'
import { Header } from './components/Header'

const App = (): JSX.Element => {
  return (
    <TodoProvider>
      <div className='todoapp'>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  )
}

export default App
