import { useState } from "react"

import { getPieceMoves } from "./getPieceMoves"
import { DEFAULT_BOARD, PIECES } from "./constants"

import "./App.css"

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("A")
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

      const options = getPieceMoves(PIECES.White.Pawn, { row, column }, newBoard)

      for (const opt of options) {
        if (opt === null || opt === undefined) continue
        newBoard[opt.row][opt.column] = 'https://pbs.twimg.com/profile_images/601916716571058176/LEHlLQ_o_400x400.jpg'
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