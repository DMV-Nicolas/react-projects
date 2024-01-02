import { useState } from 'react'
import './App.css'

type SquareParams = {
  children: string
  index: number
  updateBoard: Function
  isSelected: boolean
}

function Square({ children, index, updateBoard, isSelected }: SquareParams) {
  const className = `square ${isSelected ? "is-selected" : ""}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

const TURNS = {
  X: "x",
  O: "o"
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [turn, setTurn] = useState(TURNS.O)

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
                updateBoard={setBoard}
                isSelected={false}>
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
    </main>
  )
}

export default App
