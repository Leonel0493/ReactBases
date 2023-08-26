import { useState } from 'react'
import { GAME_STATUS, TURNS } from './types/GamesTypes'
import Square from './components/Square'

function App() {
  // * Declare all states
  const [board, setBoard] = useState<(TURNS | null)[]>(Array(9).fill(null))
  const [turn, setTurn] = useState<TURNS>(TURNS.X)
  const [game, setGame] = useState<GAME_STATUS>(GAME_STATUS.Start)

  // * functions for update the state
  const updateBoard = (index: number) => {
    // * validate the cell is empty
    if (board[index] || game !== GAME_STATUS.Start) return

    // * Update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // * update game state
    UpdateGameState(newBoard)

    // * Update Turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  const UpdateGameState = (board: (TURNS | null)[]) => {
    // * Validate if the game is tai
    if (board.every((value) => value !== null)) setGame(GAME_STATUS.Tie)

    // * validate if the game is end
    const winner = checkWinner(board)

    if (winner !== null) {
      winner === TURNS.X
        ? setGame(GAME_STATUS.Winner_X)
        : setGame(GAME_STATUS.Winner_O)
    }
  }

  const checkWinner = (board: (TURNS | null)[]): TURNS | null => {
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
        board[i] === board[(i + 2) * size]
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

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
