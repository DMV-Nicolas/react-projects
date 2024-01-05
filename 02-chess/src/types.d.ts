export type Option = {
    row: number
    column: number
}

export type Selected = {
    piece: string,
    position: Option
    options: Option[]
}

export type SetSelected = React.Dispatch<React.SetStateAction<Selected>>

export type PrevMoves = [Option, Option]

export type SetPrevMoves = React.Dispatch<React.SetStateAction<PrevMoves>>