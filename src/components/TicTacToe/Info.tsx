import React from "react"
import { Divider, Typography } from "@mui/material"
import { GameState } from "../types"

export interface InfoProps extends GameState {
  children?: React.ReactNode
}

const Info: React.FC<InfoProps> = ({
  winner,
  player,
  playerCount,
  step,
  children,
}: InfoProps) => {
  return (
    <>
      <Typography variant="h4" color="secondary">
        {!winner
          ? `Player: ${player} | Move: ${Math.floor(step / playerCount) + 1}`
          : `Winner: Player ${(step % playerCount) + 1}`}
      </Typography>
      <Divider color="white" sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      {children}
    </>
  )
}

export default Info
