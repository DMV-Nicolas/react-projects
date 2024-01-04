import { useState } from "react"
import { DEFAULT_BOARD, PIECES } from "./constants"
import { getPieceMoves } from "./getPieceMoves"
import { Option } from "./types"
import { getPieceColor, getOppositePieceColor } from "./getPieceColors"

type Selected = {
  piece: string,
  position: Option
  options: Option[]
}

type setSelected = React.Dispatch<React.SetStateAction<Selected>>

const INITIAL_SELECTED: Selected = {
  piece: PIECES.Empty,
  position: { row: -1, column: -1 },
  options: []
}

export function Board() {
  const [board, setBoard] = useState(DEFAULT_BOARD)
  const [turn, setTurn] = useState(PIECES.White.Color)
  const [selected, setSelected]: [Selected, setSelected] = useState(INITIAL_SELECTED)


  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataset: DOMStringMap
    if (e.target instanceof HTMLImageElement && e.target.parentElement?.dataset instanceof DOMStringMap) dataset = e.target.parentElement.dataset
    else if (e.target instanceof HTMLDivElement) dataset = e.target.dataset
    else return

    let row: number = 0
    if (typeof dataset.row !== "string") return
    row = parseInt(dataset.row)

    let column: number = 0
    if (typeof dataset.column !== "string") return
    column = parseInt(dataset.column)

    if (selected.piece === PIECES.Empty) {
      const piece = dataset.piece
      if (typeof piece !== "string") return

      setSelected({
        piece,
        position: { row, column },
        options: getPieceMoves(piece, { row, column }, board)
      })
    } else {
      const newBoard = [...board]
      const pieceColor = getPieceColor(selected.piece)
      if (pieceColor !== turn) {
        setSelected(INITIAL_SELECTED)
        return
      }

      for (const o of selected.options) {
        if (o === undefined || o === null) continue
        if (o.row === row && o.column === column) {
          newBoard[row][column] = selected.piece
          newBoard[selected.position.row][selected.position.column] = PIECES.Empty
          setBoard(newBoard)
          setSelected(INITIAL_SELECTED)
          setTurn(getOppositePieceColor(selected.piece))
        }
      }
    }
  }

  return (
    <div className="board">
      {board.map((row, i) =>
        <div className="row">
          {row.map((cell, j) =>
            <div
              className={`square ${(i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1) ? "white" : "green"} ${selected.position.row === i && selected.position.column === j ? "selected" : ""}`}
              data-row={i} data-column={j} data-piece={cell}
              onClick={(e) => { handleClick(e) }}
            >
              <img src={cell} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}