import React, { useContext, useEffect, useState } from "react"
import { Box, Container, Grid } from "@mui/material"
import { SocketContext } from "../Game"
import Board from "./Board"
import { BoardSquares, GameState, Winner } from "../types"
import Info from "./Info"
import Move from "./Move"
import { HEIGHT_100 } from "../constants"

function calculateWinner(board: BoardSquares): Winner {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return undefined
}

const TicTacToe: React.FC = () => {
  const socket = useContext(SocketContext)

  const [state, setState] = useState<GameState>({
    history: [{ board: Array(9).fill(null) }],
    step: 0,
    playerCount: 2,
    playerTurn: 1,
  })

  const winner = calculateWinner(state.history[state.step].board)

  const handleMoveClick = (step: number) => {
    setState((s) => ({
      ...s,
      step,
      playerTurn: (step % s.playerCount) + 1,
    }))
  }

  const handleClick = (square: number) => {
    const { history, step, playerCount, playerTurn } = state
    const moves = history.slice(0, step + 1)
    const current = moves[moves.length - 1]
    const board = current.board.slice()

    if (calculateWinner(board) || board[square]) return

    board[square] = playerTurn === 1 ? "X" : "O"

    setState((s) => ({
      ...s,
      history: moves.concat([{ board }]),
      step: step + 1,
      playerTurn: (step % playerCount) + 1,
    }))
  }

  useEffect(() => {
    socket.on("move", (board: BoardSquares) => {
      setState((s) => ({ ...s, history: s.history.concat({ board }) }))
    })
  }, [socket])

  return (
    <Container
      sx={{ bgcolor: "primary.main", height: "100vh", padding: "1rem" }}
      maxWidth={false}
    >
      <Grid container sx={HEIGHT_100}>
        <Grid item xs={9} sx={HEIGHT_100}>
          <Board
            board={state.history[state.step].board}
            onClick={handleClick}
          />
        </Grid>
        <Grid item xs={3} sx={{ overflowY: "auto", ...HEIGHT_100 }}>
          <Info winner={winner} {...state}>
            {state.history.map((_, i) => (
              <Box key={i}>
                <Move step={i} onClick={handleMoveClick} />
              </Box>
            ))}
          </Info>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TicTacToe
