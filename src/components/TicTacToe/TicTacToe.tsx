import React, { useContext, useEffect, useState } from "react"
import { Container, Grid, Paper, Typography } from "@mui/material"
import { SocketContext } from "../../screens/Game"
import Board, { BoardSquares } from "./Board"

function calculateWinner(board: BoardSquares): string | undefined {
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

  const [board, setBoard] = useState<BoardSquares>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    if (winner) return
    board[i] = xIsNext ? "X" : "O"
    setBoard(board)
    setXIsNext(!xIsNext)
    socket.emit("move", board)
  }

  const winner = calculateWinner(board)

  let status = "Next player: " + (xIsNext ? "X" : "O")
  if (winner) {
    status = "Winner: " + winner
  }

  useEffect(() => {
    socket.on("move", (board: BoardSquares) => {
      setBoard(board)
    })
  }, [socket])

  return (
    <Container
      sx={{ bgcolor: "primary.main", height: "100vh", padding: "1rem" }}
      maxWidth={false}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={9} sx={{ height: "100%" }}>
          <Board board={board} onClick={(i) => handleClick(i)} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: "100%" }}>
            <Typography variant="h4" color="secondary">
              {status}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TicTacToe
