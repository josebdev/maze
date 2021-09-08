import React from 'react'
import styled from 'styled-components'

const FooterConter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`
const year = new Date().getFullYear

const Footer = () => {
  return (
    <FooterConter>
      <p>Made By Jose Banega - copyright {year}</p>
    </FooterConter>
  )
}

export default Footer
