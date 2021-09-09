import styled from 'styled-components'

export const Button = styled.button`
  background: #000;
  border-radius: 50px;
  border: none;
  color: #fff;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
`

export const Text = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #231f20;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
  opacity: 0.9;
  top: 0;
  transition: top 0.2s ease;
  color: #4d4d4f;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
`
