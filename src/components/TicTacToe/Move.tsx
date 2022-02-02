import React from "react"
import { Button } from "@mui/material"
import Replay from "@mui/icons-material/Replay"
import { MoveCallback } from "../../utils/types"

export interface MoveProps {
  step: number
  onClick: MoveCallback
}

const Move: React.FC<MoveProps> = ({ step, onClick }: MoveProps) => {
  const desc = step ? "Go to move #" + step : "Go to game start"
  return (
    <Button
      sx={{ margin: "0.5rem" }}
      color="secondary"
      variant="outlined"
      onClick={() => onClick(step)}
      startIcon={<Replay />}
    >
      {desc}
    </Button>
  )
}

export default Move
