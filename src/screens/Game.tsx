import React from "react"
import { io } from "socket.io-client"
import TicTacToe from "../components/TicTacToe/TicTacToe"

export enum NAMES {
  TIC_TAC_TOE = "tic-tac-toe",
}

type Name = NAMES.TIC_TAC_TOE

export interface GameProps {
  name: Name
}

const GAMES = { [NAMES.TIC_TAC_TOE]: <TicTacToe /> }
const socket = io("localhost:5000")
export const SocketContext = React.createContext(socket)

const Game: React.FC<GameProps> = ({ name }: GameProps) => (
  <SocketContext.Provider value={socket}>{GAMES[name]}</SocketContext.Provider>
)

export default Game
