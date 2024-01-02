import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { checkWinner } from './logic/board'
import { TURNS, WINNERS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { GameBoard } from "./components/GameBoard"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill("")
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.O
  })
  const [winner, setWinner] = useState(WINNERS.Process)

  const resetGame = () => {
    setBoard(Array(9).fill(""))
    setTurn(TURNS.O)
    setWinner(WINNERS.Process)
    localStorage.removeItem("board")
    localStorage.removeItem("turn")
  }

  const updateBoard = (index: number) => {
    // do not update if the square has something or if there is a winner
    if (board[index] != "" || winner != WINNERS.Process) return

    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change turn
    const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
    setTurn(newTurn)

    // save game
    localStorage.setItem("board", JSON.stringify(newBoard))
    localStorage.setItem("turn", newTurn)

    // check winner
    const newWinner = checkWinner(newBoard)
    setWinner(newWinner)
    if (newWinner === WINNERS.O || newWinner === WINNERS.X) {
      localStorage.removeItem("board")
      localStorage.removeItem("turn")
      confetti()
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <GameBoard board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected={turn === TURNS.O} index={-1} updateBoard={() => { }}>{TURNS.O}</Square>
        <Square isSelected={turn === TURNS.X} index={-1} updateBoard={() => { }}>{TURNS.X}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
