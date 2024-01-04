import { PIECES } from "./constants"

function getWhitePawnMoves(index: number, board: string[]): number[] {
    if (index < 8) return []

    const options: number[] = []
    const option1 = index - 8
    if (board[option1] == PIECES.Empty) options.push(option1)

    const option2 = index - 16
    if (index >= 48 && index <= 55 && board[option1] == PIECES.Empty && board[option2] == PIECES.Empty) options.push(index - 16)

    const option3 = index - 9
    if (!(index >= 0 && index <= 56 && index % 8 == 0) && getPieceColor(board[option3]) == "black") options.push(option3)

    const option4 = index - 7
    if (!(index >= 7 && index <= 63 && (index + 1) % 8 == 0) && getPieceColor(board[option4]) == "black") options.push(option4)

    return options
}

function getBlackPawnMoves(index: number, board: string[]): number[] {
    if (index >= 56 || index < 0) return []

    const options: number[] = []
    const option1 = index + 8
    if (board[option1] == PIECES.Empty) options.push(option1)

    const option2 = index + 16
    if (index >= 24 && index <= 31 && board[option1] == PIECES.Empty && board[option2] == PIECES.Empty) options.push(option2)

    const option3 = index + 7
    if (!(index >= 0 && index <= 56 && index % 8 == 0) && getPieceColor(board[option3]) == "white") options.push(option3)

    const option4 = index + 9
    if (!(index >= 7 && index <= 63 && (index + 1) % 8 == 0) && getPieceColor(board[option4]) == "white") options.push(option4)

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
    if (piece == PIECES.White.Pawn) {
        return getWhitePawnMoves(index, board)
    } else if (piece == PIECES.Black.Pawn) {
        return getBlackPawnMoves(index, board)
    }
    return [2]
}