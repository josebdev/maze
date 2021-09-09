import React from 'react'
import { getIndexOfKey } from 'utils/array'
import { mazeFinal, INITIAL } from 'utils/level'
import { Coordinates, MazeContextInterface } from 'types'
import { usePosition } from 'hooks/usePosition'

const initialPosition = getIndexOfKey(mazeFinal, INITIAL)

export const MazeContext =
  React.createContext<MazeContextInterface | null>(null)

export const MazeProvider: React.FC = (props) => {
  const { position, setPosition, steps, resetGame, finished } = usePosition(
    initialPosition as Coordinates
  )

  return (
    <MazeContext.Provider
      value={{ position, steps, setPosition, resetGame, finished }}
      {...props}
    />
  )
}

export const useMaze = (): MazeContextInterface => {
  const context = React.useContext(MazeContext)
  if (!context) {
    throw new Error('useMaze must be used within a MazeProvifer')
  }
  return context
}
