import { useState } from "react"
import "./TwitterFollowCard.css"

type TwitterFollowCardParams = {
    username: string
    name: string
    initialIsFollowing: boolean
}

export function TwitterFollowCard({ username, name, initialIsFollowing }: TwitterFollowCardParams) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"

    return (
        <article className="tw-followCard" >
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${username}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}