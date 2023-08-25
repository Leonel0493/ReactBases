interface Props {
  userName: string
  name: string
  isFollowing?: boolean
}

export function TwitterFollowCard(props: Props) {
  const { userName, name, isFollowing } = props

  console.log(isFollowing)

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-header-avatar"
          src={`https://unavatar.io/twitter/${userName}}`}
          alt="user avatar"
        />
        <div className="tw-followCard-header-div">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button>Seguir</button>
      </aside>
    </article>
  )
}
