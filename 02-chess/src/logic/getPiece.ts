import { PIECES } from "../constants"
import { Option } from "../types"

export function isKing(piece: string): boolean {
    if (piece === undefined || piece === null || piece.length == 0) return false
    if (piece[1] === "K") return true
    return false
}

export function getPieceColor(piece: string): string {
    if (piece === undefined || piece === null || piece.length == 0) return ""

    if (piece[0] == "W") return PIECES.White.Color
    else if (piece[0] == "B") return PIECES.Black.Color
    return ""
}

export function getOppositePieceColor(piece: string) {
    if (piece === undefined || piece === null || piece.length == 0) return ""
    if (piece[0] == "W") return PIECES.Black.Color
    else if (piece[0] == "B") return PIECES.White.Color
    return ""
}

function getWhitePawnMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    const opt1: Option = { row: opt.row - 1, column: opt.column }
    if (opt1.row >= 0 && board[opt1.row][opt1.column] === PIECES.Empty) opts.push(opt1)

    const opt2: Option = { row: opt.row - 2, column: opt.column }
    if (opt.row === 6 && board[opt1.row][opt1.column] === PIECES.Empty && board[opt2.row][opt2.column] === PIECES.Empty) opts.push(opt2)

    const opt3: Option = { row: opt.row - 1, column: opt.column - 1 }
    if (opt3.row >= 0 && getPieceColor(board[opt3.row][opt3.column]) === PIECES.Black.Color) opts.push(opt3)

    const opt4: Option = { row: opt.row - 1, column: opt.column + 1 }
    if (opt4.row >= 0 && getPieceColor(board[opt4.row][opt4.column]) === PIECES.Black.Color) opts.push(opt4)

    return opts
}

function getBlackPawnMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    const opt1: Option = { row: opt.row + 1, column: opt.column }
    if (opt1.row < board.length && board[opt1.row][opt1.column] === PIECES.Empty) opts.push(opt1)

    const opt2: Option = { row: opt.row + 2, column: opt.column }
    if (opt.row === 1 && board[opt1.row][opt1.column] === PIECES.Empty && board[opt2.row][opt2.column] === PIECES.Empty) opts.push(opt2)

    const opt3: Option = { row: opt.row + 1, column: opt.column - 1 }
    if (opt3.row < board.length && getPieceColor(board[opt3.row][opt3.column]) === PIECES.White.Color) opts.push(opt3)

    const opt4: Option = { row: opt.row + 1, column: opt.column + 1 }
    if (opt4.row < board.length && getPieceColor(board[opt4.row][opt4.column]) === PIECES.White.Color) opts.push(opt4)

    return opts
}

function getWhiteRookMoves(opt: Option, board: string[][]): Option[] {
    const opts: Option[] = []

    // left
    let cell = opt.column
    while (cell > 0) {
        cell--
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // right
    cell = opt.column
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // up
    cell = opt.row
    while (cell > 0) {
        cell--
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // down
    cell = opt.row
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
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
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // right
    cell = opt.column
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: opt.row, column: cell }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // up
    cell = opt.row
    while (cell > 0) {
        cell--
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // down
    cell = opt.row
    while (cell < board.length - 1) {
        cell++
        const opt1: Option = { row: cell, column: opt.column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
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
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // up right
    row = opt.row
    column = opt.column
    while (row > 0 && column < board.length - 1) {
        row--
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // down left
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column > 0) {
        row++
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
        opts.push(opt1)
    }

    // down right
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column < board.length - 1) {
        row++
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) break
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
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // up right
    row = opt.row
    column = opt.column
    while (row > 0 && column < board.length - 1) {
        row--
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // down left
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column > 0) {
        row++
        column--
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
        opts.push(opt1)
    }

    // down right
    row = opt.row
    column = opt.column
    while (row < board.length - 1 && column < board.length - 1) {
        row++
        column++
        const opt1: Option = { row: row, column: column }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.White.Color) { opts.push(opt1); break }
        if (getPieceColor(board[opt1.row][opt1.column]) === PIECES.Black.Color) break
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
        if (getPieceColor(board[op.row][op.column]) === PIECES.White.Color) delete (opts[opIndex])
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
        if (getPieceColor(board[op.row][op.column]) === PIECES.Black.Color) delete (opts[opIndex])
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
        if (getPieceColor(board[op.row][op.column]) === PIECES.White.Color) delete (opts[opIndex])
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
        if (getPieceColor(board[op.row][op.column]) === PIECES.Black.Color) delete (opts[opIndex])
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

    return []
}