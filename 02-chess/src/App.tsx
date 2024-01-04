import { useState } from "react"
import { Board } from "./components/Board"
import { WinnerModal } from "./components/WinnerModal"
import { Turn } from "./components/Turn"
import { getPieceMoves, getPieceColor, getOppositePieceColor, isKing } from "./logic/getPiece"
import { PIECES, WINNERS, DEFAULT_BOARD, DEFAULT_SELECTED } from "./constants"
import { Selected, setSelected } from "./types"


const cloneBoard = (board: string[][]): string[][] => {
  const boardStr = JSON.stringify(board)
  const copyBoard: string[][] = JSON.parse(boardStr)
  return copyBoard
}

function App() {
  const [board, setBoard] = useState(cloneBoard(DEFAULT_BOARD))
  const [selected, setSelected]: [Selected, setSelected] = useState(DEFAULT_SELECTED)
  const [winner, setWinner] = useState(WINNERS.Process)
  const [turn, setTurn] = useState(PIECES.White.Color)

  const updateBoard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      return
    }

    const newBoard = [...board]
    const pieceColor = getPieceColor(selected.piece)
    if (pieceColor !== turn) {
      setSelected(DEFAULT_SELECTED)
      return
    }

    for (const o of selected.options) {
      if (o === undefined || o === null) continue
      if (o.row === row && o.column === column) {
        if (isKing(newBoard[row][column])) setWinner(turn)
        newBoard[row][column] = selected.piece
        newBoard[selected.position.row][selected.position.column] = PIECES.Empty
        setBoard(newBoard)
        setTurn(getOppositePieceColor(selected.piece))
      }
    }
    setSelected(DEFAULT_SELECTED)
  }

  const resetGame = () => {
    setBoard(cloneBoard(DEFAULT_BOARD))
    setTurn(PIECES.White.Color)
    setWinner(WINNERS.Process)
    setSelected(DEFAULT_SELECTED)
  }

  return (
    <>
      <main className="game">
        <Board board={board} selected={selected} updateBoard={updateBoard} />
        <Turn turn={turn} />
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  )
}

export default App