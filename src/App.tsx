import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

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

const WIN_CHANCES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  console.log("App 🎱")
  const [board, setBoard] = useState(Array(9).fill(""))
  const [turn, setTurn] = useState(TURNS.O)
  const [winner, setWinner] = useState(WINNERS.Process)

  const checkWinner = (boardToCheck: string[]): string => {
    for (const chance of WIN_CHANCES) {
      const [a, b, c] = chance
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[b] == boardToCheck[c]
      ) {
        return boardToCheck[a] // x u o
      }
    }

    if (boardToCheck.includes("")) {
      return WINNERS.Process
    }

    return WINNERS.Draw
  }

  const resetGame = () => {
    setBoard(Array(9).fill(""))
    setTurn(TURNS.O)
    setWinner(WINNERS.Process)
  }

  const updateBoard = (index: number) => {
    // do not update if the square has something or if there is a winner
    if (board[index] != "" || winner != WINNERS.Process) return

    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // check winner
    const newWinner = checkWinner(newBoard)
    setWinner(newWinner)
    if (newWinner === WINNERS.O || newWinner === WINNERS.X) {
      (async () => {
        for (let i = 0; i < 50; i++) {
          await sleep(50)
          confetti()
        }
      })()
    }

    // change turn
    setTurn(turn === TURNS.O ? TURNS.X : TURNS.O)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                isSelected={false}
                updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.O} index={-1} updateBoard={() => { }}>O</Square>
        <Square isSelected={turn === TURNS.X} index={-1} updateBoard={() => { }}>X</Square>
      </section>
      {
        winner !== WINNERS.Process && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner !== WINNERS.Draw
                    ? "Winner:"
                    : "Draw"
                }
              </h2>
              {
                winner !== WINNERS.Draw &&
                <header className="win">
                  <Square
                    index={-1}
                    isSelected={false}
                    updateBoard={() => { }}>
                    {winner}
                  </Square>
                </header>
              }
              <footer>
                <button onClick={resetGame}>Start again</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
