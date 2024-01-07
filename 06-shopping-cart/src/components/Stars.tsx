type StarsParams = {
    stars: number
}

export function Stars({ stars }: StarsParams) {
    return (
        <p>{stars}</p>
    )
}