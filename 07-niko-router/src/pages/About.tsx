import { Link } from "../components/Link"

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img src="https://pbs.twimg.com/profile_images/1737681710492397568/TV4P0Vg9_400x400.jpg" alt="Image of devoranico" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem laudantium eveniet voluptates, repellendus cumque tempore itaque numquam consequuntur hic quia quidem, dicta minus quisquam vero rerum vel asperiores nobis!</p>
            <Link to="/">Go to Home</Link>
            <br />
            <Link
                to="https://www.linkedin.com/in/nicolas-moreno-4042a3220/"
                target="_blank">
                Go to LinkedIn
            </Link>
        </>
    )
}