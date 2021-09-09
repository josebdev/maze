import { Coordinates, MazeState } from 'types'
import { BLOCK, CellType, FINAL } from './level'

export const getIndexOfKey = <T>(
  arr: T[][],
  key: T
): Coordinates | undefined => {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].indexOf(key)
    if (index > -1) {
      return { x: i, y: index }
    }
  }
}

export const verifyNextMove =
  (maze: CellType[][]) =>
  (oldCordinate: MazeState, newCordinates: Coordinates): MazeState => {
    const { x, y } = newCordinates
    let finished = false
    if (x < 0 || y < 0) {
      return {
        ...oldCordinate,
      }
    }
    const nextMove = maze[x][y]
    if (nextMove === BLOCK) {
      return {
        ...oldCordinate,
      }
    }
    if (nextMove === FINAL) {
      finished = true
    }
    return { position: { x, y }, steps: oldCordinate.steps++, finished }
  }
