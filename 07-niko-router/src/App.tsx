import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import { Router } from "./components/Router"
import NotFound from "./pages/NotFound"

const routes = [
    {
        path: "/",
        component: <HomePage />
    },
    {
        path: "/about",
        component: <AboutPage />
    }

]

function App() {
    return (
        <main>
            <Router routes={routes} defaultComponent={<NotFound />} />
        </main>
    )
}

export default App
