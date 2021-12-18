import React from "react"
import { Divider, Typography } from "@mui/material"
import { GameState } from "../types"

export interface InfoProps extends GameState {
  children?: React.ReactNode
}

const Info: React.FC<InfoProps> = ({
  winner,
  playerTurn,
  playerCount,
  step,
  children,
  ...props
}: InfoProps) => {
  return (
    <>
      <Typography variant="h4" color="secondary">
        {!winner
          ? `Player ${playerTurn} Turn`
          : `Winner: Player ${(step % playerCount) + 1}`}{" "}
        | {`Move: ${step}`}
      </Typography>
      <Divider color="white" sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      {children}
    </>
  )
}

export default Info
