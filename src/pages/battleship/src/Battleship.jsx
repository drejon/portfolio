import { useState } from 'react'

import { GameRenderer } from './components/GameRenderer.jsx'
import { User } from './components/User.jsx'

import { Arbitrator } from './logic/Arbitrator.js'
import { Game } from './logic/Game.js'
import { UserGame } from './logic/userGame.js'

import './battleship.css'

const computer = new Game()
const player = new UserGame()
const arbitrator = new Arbitrator(player, computer)

export function Battleship() {
  const [winner, setWinner] = useState(arbitrator.winner)
  
  return (
    <main className='battleship'>
      <div>
        <h1>Battleship</h1>
        <h1>
          {winner}
        </h1>
      </div>
      <GameRenderer
        checkWinner={() => arbitrator.checkWinState()}
        setWinner={setWinner} 
        computer={computer} 
        arbitrator={arbitrator}></GameRenderer>
      <button onClick={() => {
        arbitrator.reset()
        setWinner(arbitrator.winner)
      }}>Reset</button>
      <User setWinner={setWinner} player={player} arbitrator={arbitrator}></User>
    </main>
  )
}
