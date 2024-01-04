import { useState } from "react"

import { getPieceMoves } from "./getPieceMoves"
import { DEFAULT_BOARD, PIECES } from "./constants"

import "./App.css"

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("HOLA")
    if (e.target instanceof HTMLDivElement) {
      const newBoard = [...board]
      const moves = getPieceMoves(PIECES.White.Pawn, Number(e.target.dataset.index), newBoard)

      for (const move of moves) {
        newBoard[move] = "https://images.vexels.com/media/users/3/139158/isolated/preview/c862a3c9ef219140fb365301f9ebbd50-punto-negro.png"
      }

      setBoard(newBoard)
    } else if (e.target instanceof HTMLImageElement) {
      const parentElement = e.target.parentElement
      if (parentElement instanceof HTMLDivElement) {
        const newBoard = [...board]
        const moves = getPieceMoves(PIECES.White.Pawn, Number(parentElement.dataset.index), newBoard)

        for (const move of moves) {
          newBoard[move] = "https://images.vexels.com/media/users/3/139158/isolated/preview/c862a3c9ef219140fb365301f9ebbd50-punto-negro.png"
        }

        setBoard(newBoard)
      }
    }
  }

  let squareClassNameIsWhite = false
  return (
    <>
      <main className="game">
        <div className="board">
          {
            board.map((cell, i) => {
              if (i % 8 != 0) {
                squareClassNameIsWhite = !squareClassNameIsWhite
              }

              return (
                <div
                  className={`square ${squareClassNameIsWhite ? "white" : "green"}`}
                  data-index={i}
                  onClick={(e) => { handleClick(e) }}
                >
                  <img src={cell} />
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

/*

0  ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 7
8  🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 15
16 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 23
24 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 31
32 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 39
40 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 47
48 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 55
56 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 63

*/