import { PIECES } from "./constants"

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