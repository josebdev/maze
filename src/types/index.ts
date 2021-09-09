export interface Coordinates {
  x: number
  y: number
}

export interface MazeState {
  position: Coordinates
  steps: number
  finished?: boolean
  finishMessage?: string
}

export interface MazeContextInterface extends MazeState {
  setPosition: React.Dispatch<any>
  resetGame: () => void
}
