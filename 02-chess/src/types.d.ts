export type Option = {
    row: number
    column: number
}

export type Selected = {
    piece: string,
    position: Option
    options: Option[]
}

export type setSelected = React.Dispatch<React.SetStateAction<Selected>>