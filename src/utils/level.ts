const BLOCK = 'BLOCKED'
const FREE = 'FREE'
const INITIAL = 'INITIAL'
const FINAL = 'FINAL'

export type CellType =
  | typeof BLOCK
  | typeof FREE
  | typeof INITIAL
  | typeof FINAL

export const mazeFinal: CellType[][] = [
  [
    BLOCK,
    INITIAL,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
  ],
  [BLOCK, FREE, BLOCK, FREE, FREE, FREE, BLOCK, FREE, FREE, FREE, FREE, BLOCK],
  [
    BLOCK,
    FREE,
    FREE,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    BLOCK,
  ],
  [
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    FREE,
    FREE,
    FREE,
    BLOCK,
    FREE,
    FREE,
    BLOCK,
  ],
  [
    BLOCK,
    FREE,
    FREE,
    FREE,
    FREE,
    FREE,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    FREE,
    BLOCK,
  ],
  [
    BLOCK,
    FREE,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    FREE,
    FREE,
    FREE,
    FREE,
    BLOCK,
  ],
  [
    BLOCK,
    FREE,
    FREE,
    FREE,
    FREE,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
  ],
  [
    BLOCK,
    BLOCK,
    BLOCK,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    FREE,
    FREE,
    FREE,
    FREE,
    BLOCK,
  ],
  [
    BLOCK,
    FREE,
    FREE,
    FREE,
    BLOCK,
    FREE,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
  ],
  [
    BLOCK,
    BLOCK,
    FREE,
    BLOCK,
    BLOCK,
    FREE,
    BLOCK,
    FREE,
    FREE,
    FREE,
    BLOCK,
    BLOCK,
  ],
  [BLOCK, FREE, FREE, FREE, BLOCK, FREE, FREE, FREE, BLOCK, FREE, FREE, FINAL],
  [
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
    BLOCK,
  ],
]