import { Button, Text, List } from 'components/common'
import { useMaze } from 'context/mazeContext'
import React from 'react'
import styled from 'styled-components'
import Logo from 'assets/logo.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #282d32;
  margin-bottom: 1rem;
  padding: 0 1rem;
`
export const LogoContainer = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`
const Header: React.FC = () => {
  const { steps, resetGame } = useMaze()
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt="Maze Logo" />
      </LogoContainer>
      <List>
        <li>
          <Text>STEPS: {steps}</Text>
        </li>
        <li>
          <Button onClick={resetGame}>Reset Game</Button>
        </li>
      </List>
    </HeaderContainer>
  )
}

export default Header
