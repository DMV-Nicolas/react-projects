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

function getBlackPawnMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    const opt1: Option = { row: opt.row + 1, column: opt.column }
    if (opt1.row < board.length && board[opt1.row][opt1.column] === PIECES.Empty) opts.push(opt1)

    const opt2: Option = { row: opt.row + 2, column: opt.column }
    if (opt.row === 1 && board[opt1.row][opt1.column] === PIECES.Empty && board[opt2.row][opt2.column] === PIECES.Empty) opts.push(opt2)

    const opt3: Option = { row: opt.row + 1, column: opt.column - 1 }
    if (opt3.row < board.length && getPieceColor(board[opt3.row][opt3.column]) === "white") opts.push(opt3)

    const opt4: Option = { row: opt.row + 1, column: opt.column + 1 }
    if (opt4.row < board.length && getPieceColor(board[opt4.row][opt4.column]) === "white") opts.push(opt4)

    return opts
}

function getWhiteRookMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    // left
    let cell = opt.column
    while (cell > 0) {
        cell--
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // right
    cell = opt.column
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // up
    cell = opt.row
    while (cell > 0) {
        cell--
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // down
    cell = opt.row
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }
    return opts
}

function getBlackRookMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    // left
    let cell = opt.column
    while (cell > 0) {
        cell--
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // right
    cell = opt.column
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // up
    cell = opt.row
    while (cell > 0) {
        cell--
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // down
    cell = opt.row
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }
    return opts
}

function getWhiteBishopMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    // up left
    let row = opt.row
    let column = opt.column
    while (row > 0 && column > 0) {
        row--
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // up right
    row = opt.row
    column = opt.column
    while (row > 0 && column < board.length - 1) {
        row--
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // down left
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column > 0) {
        row++
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    // down right
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column < board.length - 1) {
        row++
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") break
        opts.push(opt1)
    }

    return opts
}

function getBlackBishopMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    // up left
    let row = opt.row
    let column = opt.column
    while (row > 0 && column > 0) {
        row--
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // up right
    row = opt.row
    column = opt.column
    while (row > 0 && column < board.length - 1) {
        row--
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // down left
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column > 0) {
        row++
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    // down right
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column < board.length - 1) {
        row++
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === "white") { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === "black") break
        opts.push(opt1)
    }

    return opts
}

function getWhiteHorseMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = [
        { row: opt.row - 2, column: opt.column + 1 },
        { row: opt.row - 1, column: opt.column + 2 },
        { row: opt.row + 1, column: opt.column + 2 },
        { row: opt.row + 2, column: opt.column + 1 },
        { row: opt.row - 2, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column - 2 },
        { row: opt.row + 1, column: opt.column - 2 },
        { row: opt.row + 2, column: opt.column - 1 }
    ]

    for (const opIndex in opts) {
        const op = opts[opIndex]
        if (
            op.row < 0 || op.row >= board.length ||
            op.column < 0 || op.column >= board.length
        ) { delete (opts[opIndex]); continue }
        if (getPieceColor(board[op.row][op.column]) === "white") delete (opts[opIndex])
    }

    return opts
}

function getBlackHorseMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = [
        { row: opt.row - 2, column: opt.column + 1 },
        { row: opt.row - 1, column: opt.column + 2 },
        { row: opt.row + 1, column: opt.column + 2 },
        { row: opt.row + 2, column: opt.column + 1 },
        { row: opt.row - 2, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column - 2 },
        { row: opt.row + 1, column: opt.column - 2 },
        { row: opt.row + 2, column: opt.column - 1 }
    ]

    for (const opIndex in opts) {
        const op = opts[opIndex]
        if (
            op.row < 0 || op.row >= board.length ||
            op.column < 0 || op.column >= board.length
        ) { delete (opts[opIndex]); continue }
        if (getPieceColor(board[op.row][op.column]) === "black") delete (opts[opIndex])
    }

    return opts
}

function getWhiteQueenMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = getWhiteRookMoves(opt, board)
    opts.push(...getWhiteBishopMoves(opt, board))

    return opts
}

function getBlackQueenMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = getBlackRookMoves(opt, board)
    opts.push(...getBlackBishopMoves(opt, board))

    return opts
}

function getWhiteKingMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = [
        { row: opt.row - 1, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column + 1 },
        { row: opt.row + 1, column: opt.column + 1 },
        { row: opt.row + 1, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column },
        { row: opt.row + 1, column: opt.column },
        { row: opt.row, column: opt.column - 1 },
        { row: opt.row, column: opt.column + 1 }
    ]

    for (const opIndex in opts) {
        const op = opts[opIndex]
        if (
            op.row < 0 || op.row >= board.length ||
            op.column < 0 || op.column >= board.length
        ) { delete (opts[opIndex]); continue }
        if (getPieceColor(board[op.row][op.column]) === "white") delete (opts[opIndex])
    }

    return opts
}

function getBlackKingMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = [
        { row: opt.row - 1, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column + 1 },
        { row: opt.row + 1, column: opt.column + 1 },
        { row: opt.row + 1, column: opt.column - 1 },
        { row: opt.row - 1, column: opt.column },
        { row: opt.row + 1, column: opt.column },
        { row: opt.row, column: opt.column - 1 },
        { row: opt.row, column: opt.column + 1 }
    ]

    for (const opIndex in opts) {
        const op = opts[opIndex]
        if (
            op.row < 0 || op.row >= board.length ||
            op.column < 0 || op.column >= board.length
        ) { delete (opts[opIndex]); continue }
        if (getPieceColor(board[op.row][op.column]) === "black") delete (opts[opIndex])
    }

    return opts
}

export function getPieceMoves(piece: string, option: Option, board: string[][]): Option[] {
    if (piece === PIECES.White.Pawn) {
        return getWhitePawnMoves(option, board)
    } else if (piece === PIECES.Black.Pawn) {
        return getBlackPawnMoves(option, board)
    } else if (piece === PIECES.White.Rook) {
        return getWhiteRookMoves(option, board)
    } else if (piece === PIECES.Black.Rook) {
        return getBlackRookMoves(option, board)
    } else if (piece === PIECES.White.Bishop) {
        return getWhiteBishopMoves(option, board)
    } else if (piece === PIECES.Black.Bishop) {
        return getBlackBishopMoves(option, board)
    } else if (piece === PIECES.White.Horse) {
        return getWhiteHorseMoves(option, board)
    } else if (piece === PIECES.Black.Horse) {
        return getBlackHorseMoves(option, board)
    } else if (piece === PIECES.White.Queen) {
        return getWhiteQueenMoves(option, board)
    } else if (piece === PIECES.Black.Queen) {
        return getBlackQueenMoves(option, board)
    } else if (piece === PIECES.White.King) {
        return getWhiteKingMoves(option, board)
    } else if (piece === PIECES.Black.King) {
        return getBlackKingMoves(option, board)
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
24 🟩 ⬜ 🟩 ⬜ XX ⬜ XX ⬜ 31
32 ⬜ 🟩 ⬜ XX ⬜ 🟩 ⬜ XX 39
40 🟩 ⬜ 🟩 ⬜ 🟩 XX 🟩 ⬜ 47
48 ⬜ 🟩 ⬜ XX ⬜ 🟩 ⬜ XX 55
56 🟩 ⬜ 🟩 ⬜ XX ⬜ XX ⬜ 63

*/