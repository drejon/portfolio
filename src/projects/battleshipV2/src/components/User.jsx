import { useEffect, useState } from "react"
import { Cell } from "./Cell"

export function User({ player }) {
  const [game] = useState(player)
  const [board, setBoard] = useState(game.serialize().board)
  const [orientation, setOrientation] = useState(1)

  const ships = game.ships
  const ship = ships[game.currentShip]
  
  useEffect(() => {
    const subscriberCallback = (board) => {
      setBoard(board)
    }
    
    game.addSubscriber(subscriberCallback)
    
    return () => { game.removeSubscribers() }
  }, [])

  return (
    <main>
      <section 
        className="board user"
        style={{gridTemplateColumns: `repeat(${game.columns}, 1fr)`}}
        >
        { 
        board?.map( (cell) => (
            <Cell
            orientation={orientation}
            setOrientation = {setOrientation}
            ship={ship}
            currentShip={game.currentShip}
            setCurrentShip={() => game.nextShip()}
            updatePlacement={
              (position, visible, orientation) => 
              game.updatePlacement(position, visible, orientation, ship)
            }
            placeShip={(modules) => {game.placeShip(modules)}}
            key={cell.position.x.toString() + cell.position.y.toString()} 
            cell={cell} 
            />
          ))
        }
      </section>
    </main>
  )
}
