import { Selected } from "../types"

type BoardParams = {
  board: string[][],
  selected: Selected,
  updateBoard: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function Board({ board, selected, updateBoard }: BoardParams) {
  return (
    <div className="board">
      {board.map((row, i) =>
        <div className="row">
          {row.map((cell, j) =>
            <div
              className={`square ${(i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1) ? "white" : "green"} ${selected.position.row === i && selected.position.column === j ? "selected" : ""}`}
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