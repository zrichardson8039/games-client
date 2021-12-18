import React from "react"
import { io } from "socket.io-client"
import TicTacToe from "./TicTacToe/TicTacToe"
import { Name, NAMES } from "./types"

const GAMES = { [NAMES.TIC_TAC_TOE]: <TicTacToe /> }

const socket = io("https://zachs-ai-games.herokuapp.com/")
export const SocketContext = React.createContext(socket)

export interface GameProps {
  name: Name
}

const Game: React.FC<GameProps> = ({ name }: GameProps) => (
  <SocketContext.Provider value={socket}>{GAMES[name]}</SocketContext.Provider>
)

export default Game
