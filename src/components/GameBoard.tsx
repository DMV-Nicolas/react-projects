import { Square } from "./Square"

type GameBoardParams = {
    board: string[]
    updateBoard: (index: number) => void
}

export function GameBoard({ board, updateBoard }: GameBoardParams) {
    return (
        <section className="game">
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            isSelected={false}
                            updateBoard={updateBoard}>
                            {square}
                        </Square>
                    )
                })
            }
        </section>
    )
}