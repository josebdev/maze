import React, { FC } from 'react'
import { Maze } from 'components/Maze'
import { mazeFinal } from 'utils/level'

const Main: FC = () => {
  return (
    <main>
      <Maze list={mazeFinal}></Maze>
    </main>
  )
}

export default Main
