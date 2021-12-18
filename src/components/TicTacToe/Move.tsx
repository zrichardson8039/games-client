import React from "react"
import { Button } from "@mui/material"
import Replay from "@mui/icons-material/Replay"

export interface MoveProps {
  step: number
  onClick: (step: number) => void
}

const Move: React.FC<MoveProps> = ({ step, onClick }: MoveProps) => {
  const desc = step ? "Go to move #" + step : "Go to game start"
  return (
    <Button
      color="secondary"
      onClick={() => onClick(step)}
      startIcon={<Replay />}
    >
      {desc}
    </Button>
  )
}

export default Move
