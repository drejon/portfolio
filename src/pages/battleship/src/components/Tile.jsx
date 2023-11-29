import { useEffect, useState } from "react"

export function Tile({ tile, updatePosition, fireToPlayer, placingShips, setWinner, checkWinner }) {
  const [color, setColor] = useState('')
  
  useEffect(() => {
    
    if(!tile.isRevealed) {setColor('')}
    if(tile.isRevealed && !tile.isWater) {setColor('red')}
    if(tile.isRevealed && tile.isWater) {setColor('blue')}

  }, [tile.isRevealed]) 

  return (
    <div
    className={color}
    onClick={() => {
      const winner = checkWinner()
      const isplacingShips = placingShips()
      
      if(!isplacingShips) {
        if(tile.isRevealed || winner !== null) return
        updatePosition(tile.position)
        fireToPlayer()
        if(winner !== null) {
          // setWinner('hola')
        }
      } else return
    }}
    >
      {/* {tile.name !== 'W' && tile.name} */}
    </div>
  )
}
