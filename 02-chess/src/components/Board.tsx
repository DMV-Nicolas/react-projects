import { PrevMoves, Selected } from "../types"

type BoardParams = {
  board: string[][],
  selected: Selected,
  prevMoves: PrevMoves,
  updateBoard: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function Board({ board, selected, prevMoves, updateBoard }: BoardParams) {

  const getClassName = (i: number, j: number): string => {
    const isWhite = (i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)
    const isGreen = !isWhite
    let isWhiteSelected = selected.position.row === i && selected.position.column === j && isWhite ? true : false
    let isGreenSelected = selected.position.row === i && selected.position.column === j && isGreen ? true : false

    if (prevMoves[0].row === i && prevMoves[0].column === j && isWhite) isWhiteSelected = true
    if (prevMoves[0].row === i && prevMoves[0].column === j && isGreen) isGreenSelected = true

    if (prevMoves[1].row === i && prevMoves[1].column === j && isWhite) isWhiteSelected = true
    if (prevMoves[1].row === i && prevMoves[1].column === j && isGreen) isGreenSelected = true

    if (isWhiteSelected) return "square whiteSelected"
    if (isGreenSelected) return "square greenSelected"

    if (isWhite) return "square white"
    if (isGreen) return "square green"
    return "square"
  }

  return (
    <div className="board">
      {board.map((row, i) =>
        <div className="row">
          {row.map((cell, j) =>
            <div
              className={getClassName(i, j)}
              data-row={i} data-column={j} data-piece={cell}
              onClick={(e) => { updateBoard(e) }}
            >
              <img src={cell} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}