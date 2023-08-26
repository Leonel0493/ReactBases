import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

interface ITwiterUser {
  userName: string
  names: string
  initialIsFollowing: boolean
}

const TwitterUsers: ITwiterUser[] = [
  {
    userName: 'leon04_',
    names: 'Leonel Rivas',
    initialIsFollowing: false,
  },
  {
    userName: 'midudev',
    names: 'Miguel Ángel Durán',
    initialIsFollowing: false,
  },
  {
    userName: 'DeJongFrenkie21',
    names: 'Frenkie de Jon',
    initialIsFollowing: false,
  },
  {
    userName: 'IlkayGuendogan',
    names: 'Ilkay Gündogan',
    initialIsFollowing: true,
  },
]

export function App() {
  return (
    <div className="App">
      {TwitterUsers.map((user: ITwiterUser) => {
        const { userName, names, initialIsFollowing } = user

        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {names}
          </TwitterFollowCard>
        )
      })}
    </div>
  )
}
