import React, { FC } from 'react'
import { useMaze } from 'context/mazeContext'
import { useKeyPress } from 'hooks/useKeyPress'
import styled from 'styled-components'

const AvatarStyled = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #33ff;
  position: absolute;
  z-index: 100;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const Avatar: FC = () => {
  const { setPosition } = useMaze()
  useKeyPress(setPosition)
  return <AvatarStyled></AvatarStyled>
}

export default Avatar
