import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard name="Leonel Rivas" userName="Leon04_" isFollowing />
      <TwitterFollowCard
        name="Miguel Angel Duran"
        userName="midudev"
        isFollowing={false}
      />
      <TwitterFollowCard
        name="Frenkie de Jon"
        userName="DeJongFrenkie21"
        isFollowing
      />
      <TwitterFollowCard
        name="Ilkay Gündogan"
        userName="IlkayGuendogan"
        isFollowing
      />
    </div>
  )
}
