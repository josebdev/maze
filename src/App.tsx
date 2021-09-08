import React from 'react'
import { Maze } from 'components/Maze'
import { mazeFinal } from 'utils/level'

function App() {
  return (
    <div>
      <Maze list={mazeFinal} />
    </div>
  )
}

export default App
