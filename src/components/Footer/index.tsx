import React from 'react'
import styled from 'styled-components'

const FooterConter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282d32;
  color: white;
`
const year = new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <FooterConter>
      <p>
        Made By <strong>Jose Banega</strong> | COPYRIGHT {year}
      </p>
    </FooterConter>
  )
}

export default Footer
