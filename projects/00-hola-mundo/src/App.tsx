import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

export function App() {
  const [name, setName] = useState('Leonel Rivas')

  const handleClick = () => {
    setName('Marvin Rivas')
  }

  console.log('Start app with: ', name)
  return (
    <div className="App">
      <TwitterFollowCard userName="Leon04_" initialIsFollowing={false}>
        {name}
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" initialIsFollowing={false}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="DeJongFrenkie21" initialIsFollowing={false}>
        Frenkie de Jon
      </TwitterFollowCard>
      <TwitterFollowCard userName="IlkayGuendogan" initialIsFollowing>
        Ilkay Gündogan
      </TwitterFollowCard>
      <button onClick={handleClick}>Cambiar nombre</button>
    </div>
  )
}
