import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import SearchPage from "./pages/Search"
import { Router } from "./components/Router"
import NotFound from "./pages/NotFound"

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/search/:query",
        component: SearchPage
    }

]

function App() {
    return (
        <main>
            <Router routes={routes} defaultComponent={NotFound} />
        </main>
    )
}

export default App
