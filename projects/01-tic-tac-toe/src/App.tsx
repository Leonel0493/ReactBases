import { useState } from 'react'
import confetti from 'canvas-confetti'

// * import own functions and const
import { checkTai, checkWinner } from './utils/board.utils'
import { GAME_STATUS, TURNS } from './types/GamesTypes'

// * import components
import Square from './components/Square'
import WinnerModal from './components/WinnerModal'

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
    if (checkTai(board)) setGame(GAME_STATUS.Tie)

    // * validate if the game is end
    const winner = checkWinner(board)

    // * save current game

    // * check if we have a winner
    if (winner !== null) {
      confetti()
      winner === TURNS.X
        ? setGame(GAME_STATUS.Winner_X)
        : setGame(GAME_STATUS.Winner_O)
    }
  }

  const handleRestarGame = () => {
    setBoard(Array(9).fill(null))
    setGame(GAME_STATUS.Start)
    setTurn(TURNS.X)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={handleRestarGame}>Empezar de nuevo</button>
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

      <WinnerModal game={game} handleRestarGame={handleRestarGame} />
    </main>
  )
}

export default App
