import { useState } from 'react'
import './minesweeper.css'
import { Game } from './logic/Game'
import { GameRenderer } from './components/GameRenderer'

export function Minesweeper() {

  return (
    <>
      <GameRenderer></GameRenderer>
    </>
  )
}
