import { Link } from "../components/Link";

export default function NotFoundPage() {
    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f44f4b4d-2a75-4bf5-baf7-a8993a929a3d-profile_image-300x300.png" alt="ReneZZ with stupid hair" />
            <br />
            <Link to="/">Come back to home</Link>
        </>
    )
}