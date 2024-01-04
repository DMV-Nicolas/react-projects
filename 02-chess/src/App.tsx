import { useState } from "react"

import { getPieceMoves } from "./getPieceMoves"
import { DEFAULT_BOARD, PIECES } from "./constants"

import "./App.css"
DEFAULT_BOARD[5][4] = PIECES.Black.Bishop
DEFAULT_BOARD[0][0] = PIECES.Empty
DEFAULT_BOARD[1][0] = PIECES.Empty
DEFAULT_BOARD[6][0] = PIECES.Empty
DEFAULT_BOARD[7][0] = PIECES.Empty

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLDivElement || e.target instanceof HTMLImageElement) {
      const newBoard = [...board]
      let row: number = 0
      let column: number = 0

      const rowStr = e.target.dataset.row
      if (typeof rowStr === "string") {
        row = parseInt(rowStr)
      }

      const columnStr = e.target.dataset.column
      if (typeof columnStr === "string") {
        column = parseInt(columnStr)
      }

      const options = getPieceMoves(PIECES.White.Rook, { row, column }, newBoard)

      for (const opt of options) {
        if (opt === null || opt === undefined) continue
        newBoard[opt.row][opt.column] = 'https://pa1.aminoapps.com/6258/0c371827325476dfb16ce2bb506673137024beae_00.gif'
      }

      setBoard(newBoard)
    }
  }

  return (
    <>
      <main className="game">
        <div className="board">
          {
            board.map((row, i) => {
              return (
                <div className="row">
                  {
                    row.map((cell, j) => {
                      return (
                        <div
                          className={`square ${(i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1) ? "white" : "green"}`}
                          data-row={i}
                          data-column={j}
                          onClick={(e) => { handleClick(e) }}
                        >
                          <img data-row={i} data-column={j} src={cell} />
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default App