import { useState } from "react"

import "./App.css"

function App() {
  const [board, setBoard] = useState(Array(64).fill(""))

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
                //onClick={(e) => { handleClick(e) }}
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