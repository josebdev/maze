import React, { FC } from 'react'
import { Maze } from 'components/Maze'
import { mazeFinal } from 'utils/level'
import WinText from 'components/WinText'
import { useMaze } from 'context/mazeContext'

const Main: FC = () => {
  const { finished } = useMaze()
  return (
    <main>
      <Maze list={mazeFinal}></Maze>
      {finished && <WinText />}
    </main>
  )
}

export default Main
