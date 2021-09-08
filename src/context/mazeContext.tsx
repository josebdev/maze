import React, { useState } from 'react'
import { getIndexOfKey } from 'utils/array'
import { mazeFinal, INITIAL } from 'utils/level'
import { Coordinates, MazeState } from 'types'
import { usePosition } from 'hooks/usePosition'

const initialPosition = getIndexOfKey(mazeFinal, INITIAL)

interface MazeContextInterface extends MazeState {
  setPosition: React.Dispatch<any>
}

export const MazeContext =
  React.createContext<MazeContextInterface | null>(null)

export const MazeProvider: React.FC = (props) => {
  const { position, setNewPosition, steps } = usePosition(
    initialPosition as Coordinates
  )

  return (
    <MazeContext.Provider
      value={{ position, steps, setPosition: setNewPosition }}
      {...props}
    />
  )
}

export const useMaze = () => {
  const context = React.useContext(MazeContext)
  if (!context) {
    throw new Error('useMaze must be used within a MazeProvifer')
  }
  return context
}
