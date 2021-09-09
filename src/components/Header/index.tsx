import { Button, Text, List } from 'components/common'
import { useMaze } from 'context/mazeContext'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #282d32;
  margin-bottom: 1rem;
  padding: 0 1rem;
`
const Header: React.FC = () => {
  const { steps, resetGame } = useMaze()
  return (
    <HeaderContainer>
      <div>Logo </div>
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
