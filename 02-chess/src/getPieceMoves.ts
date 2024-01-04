import { PIECES } from "./constants"

function getWhitePawnMoves(index: number, board: string[]): number[] {
    if (index < 8) return []

    const options: number[] = []
    const option1 = index - 8
    if (board[option1] === PIECES.Empty) options.push(option1)

    const option2 = index - 16
    if (index >= 48 && index <= 55 && board[option1] === PIECES.Empty && board[option2] === PIECES.Empty) options.push(index - 16)

    const option3 = index - 9
    if (!(index >= 0 && index <= 56 && index % 8 === 0) && getPieceColor(board[option3]) === "black") options.push(option3)

    const option4 = index - 7
    if (!(index >= 7 && index <= 63 && (index + 1) % 8 === 0) && getPieceColor(board[option4]) === "black") options.push(option4)

    return options
}

function getBlackPawnMoves(index: number, board: string[]): number[] {
    if (index >= 56 || index < 0) return []

    const options: number[] = []
    const option1 = index + 8
    if (board[option1] === PIECES.Empty) options.push(option1)

    const option2 = index + 16
    if (index >= 8 && index <= 15 && board[option1] === PIECES.Empty && board[option2] === PIECES.Empty) options.push(option2)

    const option3 = index + 7
    if (!(index >= 0 && index <= 56 && index % 8 === 0) && getPieceColor(board[option3]) === "white") options.push(option3)

    const option4 = index + 9
    if (!(index >= 7 && index <= 63 && (index + 1) % 8 === 0) && getPieceColor(board[option4]) === "white") options.push(option4)

    return options
}

function getWhiteRookMoves(index: number, board: string[]): number[] {
    if (index >= 64 || index < 0) return []

    const options: number[] = []
    for (let i = 0; i <= 63; i += 8) {
        const rowInit = i
        const rowEnd = i + 7
        if (index >= rowInit && index <= rowEnd) {
            // left
            for (let j = index - 1; j >= rowInit; j--) {
                if (getPieceColor(board[j]) === "black") {
                    options.push(j)
                    break
                } else if (getPieceColor(board[j]) === "white") break
                else options.push(j)
            }

            // right
            for (let j = index + 1; j <= rowEnd; j++) {
                if (getPieceColor(board[j]) === "black") {
                    options.push(j)
                    break
                } else if (getPieceColor(board[j]) === "white") break
                else options.push(j)
            }
        }
    }

    // up
    let cell = index
    while (cell > 7) {
        cell -= 8
        if (getPieceColor(board[cell]) === "black") {
            options.push(cell)
            break
        } else if (getPieceColor(board[cell]) === "white") break
        else options.push(cell)
    }

    // down
    cell = index
    while (cell < 56) {
        cell += 8
        if (getPieceColor(board[cell]) === "black") {
            options.push(cell)
            break
        } else if (getPieceColor(board[cell]) === "white") break
        else options.push(cell)
    }

    return options
}

function getBlackRookMoves(index: number, board: string[]): number[] {
    if (index >= 64 || index < 0) return []

    const options: number[] = []
    for (let i = 0; i <= 63; i += 8) {
        const rowInit = i
        const rowEnd = i + 7
        if (index >= rowInit && index <= rowEnd) {
            // left
            for (let j = index - 1; j >= rowInit; j--) {
                if (getPieceColor(board[j]) === "white") {
                    options.push(j)
                    break
                } else if (getPieceColor(board[j]) === "black") break
                else options.push(j)
            }

            // right
            for (let j = index + 1; j <= rowEnd; j++) {
                if (getPieceColor(board[j]) === "white") {
                    options.push(j)
                    break
                } else if (getPieceColor(board[j]) === "black") break
                else options.push(j)
            }
        }
    }

    // up
    let cell = index
    while (cell > 7) {
        cell -= 8
        if (getPieceColor(board[cell]) === "white") {
            options.push(cell)
            break
        } else if (getPieceColor(board[cell]) === "black") break
        else options.push(cell)
    }

    // down
    cell = index
    while (cell < 56) {
        cell += 8
        if (getPieceColor(board[cell]) === "white") {
            options.push(cell)
            break
        } else if (getPieceColor(board[cell]) === "black") break
        else options.push(cell)
    }

    return options
}

function getPieceColor(piece: string): string {
    if (piece.length == 0) {
        return ""
    }

    if (piece[0] == "W") return "white"
    else if (piece[0] == "B") return "black"
    return ""
}

export function getPieceMoves(piece: string, index: number, board: string[]): number[] {
    if (piece === PIECES.White.Pawn) {
        return getWhitePawnMoves(index, board)
    } else if (piece === PIECES.Black.Pawn) {
        return getBlackPawnMoves(index, board)
    } else if (piece === PIECES.White.Rook) {
        return getWhiteRookMoves(index, board)
    } else if (piece == PIECES.Black.Rook) {
        return getBlackRookMoves(index, board)
    }
    return [2]
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