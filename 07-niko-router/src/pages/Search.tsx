type SearchPageParams = {
    routeParams: {
        query: string
    }
}

export default function SearchPage({ routeParams }: SearchPageParams) {
    return (
        <>
            <h1>{routeParams.query}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${routeParams.query}.png`} />
        </>
    )
}