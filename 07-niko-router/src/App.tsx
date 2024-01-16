import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import SearchPage from "./pages/Search"
import { Router } from "./components/Router"
import NotFound from "./pages/NotFound"
import { Route } from "./components/Route"

const routes = [
    {
        path: "/search/:query",
        component: SearchPage
    }

]

function App() {
    return (
        <main>
            <Router routes={routes} defaultComponent={NotFound} >
                <Route path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Router>
        </main>
    )
}

export default App
