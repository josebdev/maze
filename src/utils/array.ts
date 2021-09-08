import { Coordinates } from 'types'

export const getIndexOfKey = <T>(
  arr: T[][],
  key: T
): Coordinates | undefined => {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].indexOf(key)
    if (index > -1) {
      return { x: i, y: index }
    }
  }
}
