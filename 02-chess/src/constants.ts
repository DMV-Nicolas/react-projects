import { Selected } from "./types"

export const PIECES = {
    White: {
        Color: "WHorse.svg",
        Pawn: "WPawn.svg",
        Rook: "WRook.svg",
        Horse: "WHorse.svg",
        Bishop: "WBishop.svg",
        Queen: "WQueen.svg",
        King: "WKing.svg",
    },
    Black: {
        Color: "BHorse.svg",
        Pawn: "BPawn.svg",
        Rook: "BRook.svg",
        Horse: "BHorse.svg",
        Bishop: "BBishop.svg",
        Queen: "BQueen.svg",
        King: "BKing.svg",
    },
    Empty: "",
}

export const DEFAULT_BOARD = [
    [PIECES.Black.Rook, PIECES.Black.Horse, PIECES.Black.Bishop, PIECES.Black.Queen, PIECES.Black.King, PIECES.Black.Bishop, PIECES.Black.Horse, PIECES.Black.Rook],
    [PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn, PIECES.Black.Pawn],
    [PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty],
    [PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty],
    [PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty],
    [PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty, PIECES.Empty],
    [PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn, PIECES.White.Pawn],
    [PIECES.White.Rook, PIECES.White.Horse, PIECES.White.Bishop, PIECES.White.Queen, PIECES.White.King, PIECES.White.Bishop, PIECES.White.Horse, PIECES.White.Rook]
]

export const DEFAULT_SELECTED: Selected = {
    piece: PIECES.Empty,
    position: { row: -1, column: -1 },
    options: []
}

export const WINNERS = {
    White: "white",
    Black: "black",
    Draw: "draw",
    Process: "process"
}