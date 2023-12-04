import { useEffect, useState } from "react"
import { Tile } from "./Tile"

export function GameRenderer({ computer, arbitrator, setWinner, checkWinner }) {
  const [game] = useState(computer)
  const [board, setBoard] = useState(game.serialize().board)
  
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
      className="board"
      style={{gridTemplateColumns: `repeat(${game.columns}, 1fr)`}}
      >
        { 
        board?.map( (tile) => (
            <Tile
            setWinner={setWinner}
            checkWinner={checkWinner}
            placingShips={() => arbitrator.isPlayerPlacing()}
            fireToPlayer={() => arbitrator.fireToPlayer()}
            updatePosition={(position) => game.updatePosition(position)}
            key={tile.position.x.toString() + tile.position.y.toString()} 
            tile={tile} 
            />
          ))
        }
      </section>
    </main>
  )
}
