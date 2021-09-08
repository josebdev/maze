import React from 'react'

export const useKeyPress = (callBack: any) => {
  React.useEffect(() => {
    window.addEventListener('keyup', callBack)
    return () => {
      window.removeEventListener('keyup', callBack)
    }
  }, [callBack])
}
