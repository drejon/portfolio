import './App.css'

import { Route, Routes } from 'react-router-dom'

import { Home } from './demos/Home'
import { Battleship } from './demos/battleship/src/Battleship'
import { Minesweeper } from './demos/minesweeper/src/Minesweeper'
import { TicTacToe } from './demos/tic-tac-toe/src/TicTacToe'

export function App () {
  
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/demos/battleship' element={<Battleship/>}></Route>
        <Route path='/demos/minesweeper' element={<Minesweeper/>}></Route>
        <Route path='/demos/tic-tac-toe' element={<TicTacToe/>}></Route>
      </Routes>
    </main>
  )
}
