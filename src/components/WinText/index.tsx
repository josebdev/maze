import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 45px;
  left: 0;
  bottom: 40px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  h1 {
    font-size: 3rem;
    color: #7ad7a7;
    text-align: center;
  }
`

const WinText: React.FC = () => {
  return (
    <Container>
      <h1>You finished the Maze, you are awesone!!!</h1>
    </Container>
  )
}

export default WinText
