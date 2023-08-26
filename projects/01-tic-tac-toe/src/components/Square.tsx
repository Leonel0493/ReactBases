interface Props {
  children: React.ReactNode
  isSelected?: boolean
  updateBoard?: (index: number) => void
  index?: number
}

const Square: React.FC<Props> = ({
  children,
  isSelected,
  updateBoard,
  index,
}) => {
  const handleClick = () => {
    if (updateBoard && index !== undefined) updateBoard(index)
  }
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

export default Square
