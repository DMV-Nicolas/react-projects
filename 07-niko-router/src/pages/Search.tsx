import { Link } from "../components/Link"

type SearchPageParams = {
    routeParams: {
        query: string
    }
}

export default function SearchPage({ routeParams }: SearchPageParams) {
    const pokemonIdx = parseInt(routeParams.query)
    const prevPokemonIdx = (pokemonIdx - 1).toString()
    const nextPokemonIdx = (pokemonIdx + 1).toString()
    return (
        <>
            <h1>{routeParams.query}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdx}.png`} />
            <br />
            <Link to={prevPokemonIdx}>Prev pokemon</Link>
            <br />
            <Link to={nextPokemonIdx}>Next pokemon</Link>
        </>
    )
}