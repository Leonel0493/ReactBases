import { TURNS } from '../types/GamesTypes'

export const checkWinner = (board: (TURNS | null)[]): TURNS | null => {
  const size = 3

  // * Check horizontal and vertical lines
  for (let i = 0; i < size; i++) {
    if (
      board[i * size] !== null &&
      board[i * size] === board[i * size + 1] &&
      board[i * size] === board[i * size + 2]
    ) {
      return board[i * size] as TURNS
    }

    if (
      board[i] &&
      board[i] === board[i + size] &&
      board[i] === board[i + 2 * size]
    ) {
      return board[i] as TURNS
    }
  }

  // * check diagonals
  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return board[0] as TURNS
  }

  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return board[2] as TURNS
  }

  return null
}

export const checkTai = (board: (TURNS | null)[]): boolean => {
  return board.every((value) => value !== null)
}
