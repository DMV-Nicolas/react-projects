import { Suspense, lazy } from "react"
import { Router } from "./components/Router"
import { Route } from "./components/Route"

const LazyHomePage = lazy(() => import("./pages/Home"))
const LazyAboutPage = lazy(() => import("./pages/About"))
const LazySearchPage = lazy(() => import("./pages/Search"))
const LazyNotFoundPage = lazy(() => import("./pages/NotFound"))

function App() {
    return (
        <main>
            <Suspense fallback={<p>loading...</p>}>
                <Router defaultComponent={LazyNotFoundPage} >
                    <Route path="/" component={LazyHomePage} />
                    <Route path="/about" component={LazyAboutPage} />
                    <Route path="/search/:query" component={LazySearchPage} />
                </Router>
            </Suspense>
        </main>
    )
}

export default App
