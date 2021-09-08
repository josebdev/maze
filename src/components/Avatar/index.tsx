import { useKeyPress } from 'hooks/useKeyPress'
import React, { FC } from 'react'
import { Coordinates } from 'types'

interface AvatarPorps {
  position: Coordinates
}

const showKeyPressed = (event: any) => {
  console.log(`event`, event)
}
const Avatar: FC<AvatarPorps> = ({ position }) => {
  useKeyPress(showKeyPressed)
  return <div></div>
}

export default Avatar
