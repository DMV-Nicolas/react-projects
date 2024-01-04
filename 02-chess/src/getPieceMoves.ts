import { Option } from "./types"

function getPieceColor(piece: string): string {
    if (piece.length == 0) {
        return ""
    }

    if (piece[0] == "W") return "white"
    else if (piece[0] == "B") return "black"
    return ""
}

export function getPieceMoves(piece: string, option: Option, board: string[][]): Option[] {
    return []
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