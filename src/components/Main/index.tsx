import React, { FC, useState } from 'react'
import { Maze } from 'components/Maze'
import { mazeFinal, INITIAL } from 'utils/level'
import { getIndexOfKey } from 'utils/array'
import { Coordinates } from 'types'
import Avatar from 'components/Avatar'

const initialPosition = getIndexOfKey(mazeFinal, INITIAL)

const Main: FC<any> = () => {
  const [position, setPosition] = useState<Coordinates>(
    initialPosition as Coordinates
  )
  return (
    <main>
      <Maze list={mazeFinal}></Maze>
      <Avatar position={position} />
    </main>
  )
}

export default Main
