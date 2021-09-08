import React, { useState } from 'react'
import { Coordinates, MazeState } from 'types'

const KEYBOARD = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
}

export function usePosition(initialPosition: Coordinates) {
  const [position, setPosition] = useState<Coordinates>(initialPosition)
  const [steps, setSteps] = useState(0)

  function setNewPosition(event: React.KeyboardEvent) {
    switch (event.key) {
      case KEYBOARD.ARROW_LEFT:
        setPosition((old) => ({ ...old, x: old.x - 1 }))
        break
      case KEYBOARD.ARROW_UP:
        setPosition((old) => ({ ...old, y: old.y - 1 }))
        break
      case KEYBOARD.ARROW_RIGHT:
        setPosition((old) => ({ ...old, x: old.x + 1 }))
        break
      case KEYBOARD.ARROW_DOWN:
        setPosition((old) => ({ ...old, y: old.y + 1 }))
        break
      default:
        console.error('Wrong key', event.key)
    }
  }

  return { position, steps, setNewPosition }
}
