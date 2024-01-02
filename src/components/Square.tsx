type SquareParams = {
    children: string
    index: number
    isSelected: boolean
    updateBoard: (index: number) => void
}

export function Square({ children, index, isSelected, updateBoard }: SquareParams) {
    const className = `square ${isSelected ? "is-selected" : ""}`
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}