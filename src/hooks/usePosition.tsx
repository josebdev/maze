import React, { useState } from 'react'
import { Coordinates, MazeState, MazeContextInterface } from 'types'
import { verifyNextMove } from 'utils/array'
import { mazeFinal } from 'utils/level'

const KEYBOARD = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
}

const verifyNextMoveOnFinalMaze = verifyNextMove(mazeFinal)

export function usePosition(
  initialPosition: Coordinates
): MazeContextInterface {
  const [{ position, steps, finished }, setPosition] = useState<MazeState>({
    position: initialPosition as Coordinates,
    steps: 0,
  })

  function setNewPosition(event: React.KeyboardEvent) {
    if (finished) return
    switch (event.key) {
      case KEYBOARD.ARROW_LEFT:
        setPosition((old) =>
          verifyNextMoveOnFinalMaze(old, {
            x: old.position.x,
            y: old.position.y - 1,
          })
        )
        break
      case KEYBOARD.ARROW_UP:
        setPosition((old) =>
          verifyNextMoveOnFinalMaze(old, {
            y: old.position.y,
            x: old.position.x - 1,
          })
        )
        break
      case KEYBOARD.ARROW_RIGHT:
        setPosition((old) =>
          verifyNextMoveOnFinalMaze(old, {
            x: old.position.x,
            y: old.position.y + 1,
          })
        )
        break
      case KEYBOARD.ARROW_DOWN:
        setPosition((old) =>
          verifyNextMoveOnFinalMaze(old, {
            y: old.position.y,
            x: old.position.x + 1,
          })
        )
        break
      default:
    }
  }

  return { position, steps, setPosition: setNewPosition }
}
