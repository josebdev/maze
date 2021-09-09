import React, { FC } from 'react'
import { useMaze } from 'context/mazeContext'
import { useKeyPress } from 'hooks/useKeyPress'
import styled from 'styled-components'
import { Coordinates } from 'types'

const OFFSET = 10
const DISTANCE = 50
const AvatarStyled = styled.div<Coordinates>`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #33ff;
  position: absolute;
  z-index: 100;
  position: absolute;
  left: ${(props) => `${OFFSET + DISTANCE * props.y}px`};
  top: ${(props) => `${OFFSET + DISTANCE * props.x}px`};
  right: 0;
  bottom: 0;
`
const Avatar: FC = () => {
  const {
    position: { x, y },
    setPosition,
  } = useMaze()
  useKeyPress(setPosition)
  return <AvatarStyled x={x} y={y}></AvatarStyled>
}

export default Avatar
