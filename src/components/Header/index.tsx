import { useMaze } from 'context/mazeContext'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
`
const Header: React.FC = () => {
  const {
    position: { x, y },
    steps,
  } = useMaze()
  return (
    <HeaderContainer>
      Logo - position: x:{x} | y : {y} | steps {steps}
    </HeaderContainer>
  )
}

export default Header
