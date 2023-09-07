import React from 'react'

// * import own functions and const
import { GAME_STATUS, TURNS } from '../types/GamesTypes'

// * import components
import Square from './Square'

interface Props {
  game: GAME_STATUS
  handleRestarGame: () => void
}

const WinnerModal: React.FC<Props> = ({ game, handleRestarGame }) => {
  if (game === GAME_STATUS.Start || game === GAME_STATUS.Loser) return null

  return (
    <section className="winner">
      <div className="text">
        <h2>{game === GAME_STATUS.Tie ? 'Empate' : 'Gano: '}</h2>
        {game !== GAME_STATUS.Tie && (
          <header className="win">
            <Square>{game === GAME_STATUS.Winner_X ? TURNS.X : TURNS.O}</Square>
          </header>
        )}
        <footer>
          <button onClick={handleRestarGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
