import { useState } from 'react'
import './App.css'

type SquareParams = {
  children: string
  index: number
  isSelected: boolean
  updateBoard: (index: number) => void
}

function Square({ children, index, isSelected, updateBoard }: SquareParams) {
  console.log("Square 🟦")
  const className = `square ${isSelected ? "is-selected" : ""}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const TURNS = {
  X: "x",
  O: "o"
}

const WINNERS = {
  Process: "process",
  Draw: "draw",
  X: "x",
  O: "o",
}

function App() {
  console.log("App 🎱")
  const [board, setBoard] = useState(Array(9).fill(""))
  const [turn, setTurn] = useState(TURNS.O)
  const [winner, setWinner] = useState(WINNERS.Process)

  const checkWinner = (brd: string[]) => {
    const winChances = [
      ["w", "w", "w", "", "", "", "", "", ""],
      ["", "", "", "w", "w", "w", "", "", ""],
      ["", "", "", "", "", "", "w", "w", "w"],
      ["w", "", "", "w", "", "", "w", "", ""],
      ["", "w", "", "", "w", "", "", "w", ""],
      ["", "", "w", "", "", "w", "", "", "w"],
      ["w", "", "", "", "w", "", "", "", "w"],
      ["", "", "w", "", "w", "", "w", "", ""],
    ]

    let isFull = true
    for (const chance of winChances) {
      let x = ["", "", ""]
      let j = 0
      for (const i in brd) {
        if (brd[i] !== "" && chance[i] !== "") {
          x[j] = brd[i]
          j++
        }

        if (brd[i] === "") {
          isFull = false
        }
      }

      console.log(x)

      if (x[0] === TURNS.O && x[1] === TURNS.O && x[2] === TURNS.O) {
        setWinner(WINNERS.O)
        return
      } else if (x[0] === TURNS.X && x[1] === TURNS.X && x[2] === TURNS.X) {
        setWinner(WINNERS.X)
        return
      }
    }

    if (isFull) setWinner(WINNERS.Draw)
  }

  const updateBoard = (index: number) => {
    if (board[index] != "") return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    checkWinner(newBoard)

    setTurn(turn === TURNS.O ? TURNS.X : TURNS.O)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                isSelected={false}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.O} index={-1} updateBoard={() => { }}>O</Square>
        <Square isSelected={turn === TURNS.X} index={-1} updateBoard={() => { }}>X</Square>
      </section>
      {winner}
    </main>
  )
}

export default App
