export function saveGame(board: string[][], turn: string) {
    localStorage.setItem("board", JSON.stringify(board))
    localStorage.setItem("turn", turn)
}

export function boardFromStorage(): string[][] {
    const boardStr = localStorage.getItem("board")
    if (boardStr !== null) {
        const board: string[][] = JSON.parse(boardStr)
        return board
    }

    return []
}

export function turnFromStorage(): string {
    const turn = localStorage.getItem("turn")
    if (turn !== null) {
        return turn
    }

    return ""
}