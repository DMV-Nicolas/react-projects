import { PIECES } from "../constants"

type TurnParams = {
    turn: string
    setWinner: React.Dispatch<React.SetStateAction<string>>
}

export function Turn({ turn }: TurnParams) {
    const blackTurnClassName = `square ${turn === PIECES.Black.Color ? "is-selected" : ""}`
    const whiteTurnClassName = `square ${turn === PIECES.White.Color ? "is-selected" : ""}`

    return (
        <section className="turn">
            <div className={blackTurnClassName} >
                <img src={PIECES.Black.Horse} />
            </div>
            <div className={whiteTurnClassName}>
                <img src={PIECES.White.Horse} />
            </div>
        </section>
    )
}