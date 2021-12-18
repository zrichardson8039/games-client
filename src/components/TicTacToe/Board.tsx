import React from "react"
import { ButtonGroup, Box } from "@mui/material"
import Square from "./Square"
import { BoardSquares, MoveCallback } from "../types"
import { HEIGHT_100 } from "../constants"

interface BoardProps {
  board: BoardSquares
  onClick: MoveCallback
}

interface RowProps extends BoardProps {
  squares: number[]
}

const Row: React.FC<RowProps> = ({ board, squares, onClick }: RowProps) => (
  <ButtonGroup
    sx={{ display: "block", height: "33.33%" }}
    className="d"
    variant="text"
    color="secondary"
    aria-label=""
  >
    {squares?.map((i) => (
      <Square
        key={i}
        value={board[i]}
        onClick={() => onClick(i)}
        sx={{ width: "33%", fontSize: "9rem", ...HEIGHT_100 }}
      />
    ))}
  </ButtonGroup>
)

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  return (
    <Box sx={HEIGHT_100}>
      <Row squares={[0, 1, 2]} {...props} />
      <Row squares={[3, 4, 5]} {...props} />
      <Row squares={[6, 7, 8]} {...props} />
    </Box>
  )
}
export default Board
