import React, { useState } from 'react'

interface Props {
  userName: string
  children: React.ReactNode
  initialIsFollowing: boolean
}

export function TwitterFollowCard(props: Props) {
  const { userName, children, initialIsFollowing } = props
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-aside-btn is-following'
    : 'tw-followCard-aside-btn'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  console.log('[TwitterFollowCard] render with: ', children)

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-header-avatar"
          src={`https://unavatar.io/twitter/${userName}}`}
          alt="user avatar"
        />
        <div className="tw-followCard-header-div">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-defaultButtonText">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
