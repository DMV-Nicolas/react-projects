import { PIECES } from "./constants"
import { Option } from "./types"

function getPieceColor(piece: string): string {
    if (piece === undefined || piece === null || piece.length == 0) return ""

    if (piece[0] == "W") return "white"
    else if (piece[0] == "B") return "black"
    return ""
}

function getWhitePawnMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    const opt1: Option = { row: opt.row - 1, column: opt.column }
    if (opt1.row >= 0 && board[opt1.row][opt1.column] === PIECES.Empty) opts.push(opt1)

    const opt2: Option = { row: opt.row - 2, column: opt.column }
    if (opt.row === 6 && board[opt1.row][opt1.column] === PIECES.Empty && board[opt2.row][opt2.column] === PIECES.Empty) opts.push(opt2)

    const opt3: Option = { row: opt.row - 1, column: opt.column - 1 }
    if (opt3.row >= 0 && getPieceColor(board[opt3.row][opt3.column]) === "black") opts.push(opt3)

    const opt4: Option = { row: opt.row - 1, column: opt.column + 1 }
    if (opt4.row >= 0 && getPieceColor(board[opt4.row][opt4.column]) === "black") opts.push(opt4)

    return opts
}

export function getPieceMoves(piece: string, option: Option, board: string[][]): Option[] {
    if (piece === PIECES.White.Pawn) {
        return getWhitePawnMoves(option, board)
    }

    return [
        { row: 4, column: 5 }
    ]
}

/*

   00 01 02 03 04 05 06 07
   08 09 10 11 12 13 14 15
   16 17 18 19 20 21 22 23
   24 25 26 27 28 29 30 31
   32 33 34 35 36 37 38 39
   40 41 42 43 44 45 46 47 
   48 49 50 51 52 53 54 55
   56 57 58 59 60 61 62 63

0  ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 7
8  🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 15
16 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 23
24 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 31
32 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 39
40 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 47
48 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 55
56 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 🟩 ⬜ 63

*/