export enum NAMES {
  TIC_TAC_TOE = "tic-tac-toe",
}

export type Name = NAMES.TIC_TAC_TOE
export type BoardSquares = string[] | undefined[]
export type Winner = string | undefined
export type Move = { board: BoardSquares }
export type MoveCallback = (i: number) => void

export interface GameState {
  history: Move[]
  step: number
  playerCount: number
  playerTurn: number
  winner?: Winner
}
