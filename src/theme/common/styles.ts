import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 40px;
  gap: 0px 0px;
  grid-template-areas:
    'Header  '
    'Main  '
    'Footer  ';
`
