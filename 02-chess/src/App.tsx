import { useState } from "react"

import { DEFAULT_BOARD } from "./constants"

import "./App.css"

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e)
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
                          data-index={(8 * i) + j}
                          onClick={(e) => { handleClick(e) }}
                        >
                          <img src={cell} />
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