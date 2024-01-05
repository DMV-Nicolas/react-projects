import { WINNERS } from "../constants"
type WinnerModalParams = {
    winner: string,
    resetGame: () => void
}

export function WinnerModal({ winner, resetGame }: WinnerModalParams) {
    if (winner === WINNERS.Process) return null

    const winnerText = winner !== WINNERS.Draw ? "Winner:" : "Draw"

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                {
                    winner !== WINNERS.Draw &&
                    <header className="win">
                        <div className="square">
                            <img src={winner} />
                        </div>
                    </header>
                }
                <footer>
                    <button onClick={resetGame}>Start again</button>
                </footer>
            </div>
        </section>
    )
}