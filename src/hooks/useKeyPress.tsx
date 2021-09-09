/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

export const useKeyPress = (callBack: any) => {
  React.useEffect(() => {
    window.addEventListener('keyup', callBack)
    return () => {
      window.removeEventListener('keyup', callBack)
    }
  }, [callBack])
}
