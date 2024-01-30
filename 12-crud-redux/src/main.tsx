import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './stores/index.ts'
import './index.css'

const root = document.getElementById('root')
if (root instanceof HTMLElement) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
