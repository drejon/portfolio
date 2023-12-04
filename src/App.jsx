import './App.css'

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Battleship } from './pages/battleship/src/Battleship'
import { Minesweeper } from './pages/minesweeper/src/Minesweeper'
import { TicTacToe } from './pages/tic-tac-toe/src/TicTacToe'

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
