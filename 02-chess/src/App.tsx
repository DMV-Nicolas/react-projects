import { useState } from "react"
import { Board } from "./components/Board"
import { WinnerModal } from "./components/WinnerModal"
import { Turn } from "./components/Turn"
import { getPieceMoves, getPieceColor, getOppositePieceColor, isKing } from "./logic/getPiece"
import { PIECES, WINNERS, DEFAULT_BOARD, DEFAULT_SELECTED, DEFAULT_PREV_MOVES } from "./constants"
import { PrevMoves, Selected, SetPrevMoves, SetSelected } from "./types"
import { boardFromStorage, saveGame, turnFromStorage } from "./logic/localStorage"


const cloneBoard = (board: string[][]): string[][] => {
  const boardStr = JSON.stringify(board)
  const copyBoard: string[][] = JSON.parse(boardStr)
  return copyBoard
}

function App() {
  const [board, setBoard] = useState(() => {
    const board = boardFromStorage()
    return board.length > 0 ? board : cloneBoard(DEFAULT_BOARD)
  })
  const [turn, setTurn] = useState(() => {
    const turn = turnFromStorage()
    return turn !== "" ? turn : PIECES.White.Color
  })
  const [prevMoves, setPrevMoves]: [PrevMoves, SetPrevMoves] = useState(DEFAULT_PREV_MOVES)
  const [selected, setSelected]: [Selected, SetSelected] = useState(DEFAULT_SELECTED)
  const [winner, setWinner] = useState(WINNERS.Process)

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

    const pieceColor = getPieceColor(selected.piece)
    if (pieceColor !== turn) {
      setSelected(DEFAULT_SELECTED)
      return
    }

    for (const o of selected.options) {
      if (o === undefined || o === null) continue
      if (o.row === row && o.column === column) {
        const newBoard = [...board]
        if (isKing(newBoard[row][column])) setWinner(turn)

        newBoard[row][column] = selected.piece
        newBoard[selected.position.row][selected.position.column] = PIECES.Empty
        setBoard(newBoard)

        const newTurn = getOppositePieceColor(selected.piece)
        setTurn(newTurn)

        const newPrevMoves: PrevMoves = [
          { row: selected.position.row, column: selected.position.column },
          { row, column },
        ]
        setPrevMoves(newPrevMoves)

        saveGame(newBoard, newTurn)
      }
    }
    setSelected(DEFAULT_SELECTED)
  }

  const resetGame = () => {
    saveGame(DEFAULT_BOARD, PIECES.White.Color)
    setBoard(cloneBoard(DEFAULT_BOARD))
    setTurn(PIECES.White.Color)
    setWinner(WINNERS.Process)
    setSelected(DEFAULT_SELECTED)
  }

  return (
    <>
      <main className="game">
        <Board board={board} selected={selected} prevMoves={prevMoves} updateBoard={updateBoard} />
        <Turn turn={turn} setWinner={setWinner} />
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  )
}

export default App