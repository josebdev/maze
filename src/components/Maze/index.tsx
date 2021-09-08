import Avatar from 'components/Avatar'
import React, { FunctionComponent } from 'react'
import { CellType } from 'utils/level'
import { v4 as uuidv4 } from 'uuid'
import { Row, Cell, MazeContainer } from './styles'

type MazeProps = {
  list: CellType[][]
}

export const Maze: FunctionComponent<MazeProps> = ({ list }) => {
  return (
    <MazeContainer>
      {list.map((rows) => {
        const rowKey = uuidv4()
        return (
          <Row key={rowKey}>
            {rows.map((cell) => {
              const key = uuidv4()
              return <Cell key={key} type={cell} />
            })}
          </Row>
        )
      })}
      <Avatar />
    </MazeContainer>
  )
}
