import { useEffect, useState } from "react"
import { EVENTS } from "./constants"

function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto ullam numquam dolores. Repellendus sed architecto eius aliquam quo pariatur, voluptatem itaque neque perspiciatis magni eos cumque illum eligendi placeat aut, dolorem facere totam adipisci aliquid quibusdam ipsa exercitationem ad maiores ex! Voluptatum architecto excepturi eveniet ducimus quo similique consectetur harum! Quae pariatur quas porro tempora dicta excepturi accusamus! Dolorem maxime quisquam debitis mollitia velit omnis modi! Temporibus amet id aut omnis? Quam voluptatum illo vero error, et laboriosam commodi. Laboriosam reprehenderit quo amet. Velit quae eligendi cupiditate commodi fuga beatae, delectus aliquid illum ut eius esse architecto debitis. Nulla!</p>
            <button onClick={() => navigate({ href: "/about" })}>Go to about</button>
        </>
    )
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img src="https://pbs.twimg.com/profile_images/1737681710492397568/TV4P0Vg9_400x400.jpg" alt="Image of devoranico" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem laudantium eveniet voluptates, repellendus cumque tempore itaque numquam consequuntur hic quia quidem, dicta minus quisquam vero rerum vel asperiores nobis!</p>
            <button onClick={() => navigate({ href: "/" })}>Go to home</button>
        </>
    )
}

function navigate({ href }: { href: string }) {
    window.history.pushState({}, "", href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

function App() {
    const [page, setPage] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setPage(window.location.pathname)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    return (
        <main>
            {page === "/" && <HomePage />}
            {page === "/about" && <AboutPage />}
        </main>
    )
}

export default App
