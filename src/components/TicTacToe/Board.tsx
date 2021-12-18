import React from "react"
import { ButtonGroup, Box } from "@mui/material"
import Square from "./Square"

export type BoardSquares = string[] | undefined[]

interface BoardProps {
  board: BoardSquares
  onClick: (i: number) => void
}

const Board: React.FC<BoardProps> = ({ board, onClick }: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={board[i]}
      onClick={() => onClick(i)}
      sx={{ height: "100%", width: "33%", fontSize: "9rem" }}
    />
  )

  const renderRow = (N: number[]) => (
    <ButtonGroup
      sx={{ display: "block", height: "33.33%" }}
      className="d"
      variant="text"
      color="secondary"
      aria-label=""
    >
      {N.map((i) => renderSquare(i))}
    </ButtonGroup>
  )

  return (
    <Box sx={{ height: "100%" }}>
      {renderRow([0, 1, 2])}
      {renderRow([3, 4, 5])}
      {renderRow([6, 7, 8])}
    </Box>
  )
}
export default Board
