/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = 'https://www.mocky.io/v2/5df38f523100006d00b58560'

export const finishMaze = async (
  body: any
): Promise<{ status: string; message: string }> => {
  let data
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  }
  try {
    const response = await fetch(API_URL, requestOptions)
    data = await response.json()
  } catch (e) {
    console.error(e)
  }
  return data
}
