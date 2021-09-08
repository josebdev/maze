import styled from 'styled-components'
import { CellType } from 'utils/level'

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: fit-content;
  margin: 0 auto;
`
export const Cell = styled.div<{ type: CellType }>`
  min-width: 50px;
  min-height: 50px;
  background: ${(props) => {
    switch (props.type) {
      case 'BLOCKED':
        return '#000000'
      case 'INITIAL':
      case 'FINAL':
      case 'FREE':
        return '#FFFFFF'
      default:
        throw new Error(`you are passing a wrong type ${props.type}`)
    }
  }};
`
export const MazeContainer = styled.div`
  position: relative;
  max-width: fit-content;
  margin: 0 auto;
`
