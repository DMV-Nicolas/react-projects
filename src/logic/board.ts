import { WIN_CHANCES, WINNERS } from "../constants"

export const checkWinner = (boardToCheck: string[]): string => {
    for (const chance of WIN_CHANCES) {
        const [a, b, c] = chance
        if (
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[b] == boardToCheck[c]
        ) {
            return boardToCheck[a] // x u o
        }
    }

    if (boardToCheck.includes("")) {
        return WINNERS.Process
    }

    return WINNERS.Draw
}