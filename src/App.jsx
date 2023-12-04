import './App.css'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Battleship } from './pages/battleship/src/Battleship'
import { Minesweeper } from './pages/minesweeper/src/Minesweeper'
import { TicTacToe } from './pages/tic-tac-toe/src/TicTacToe'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/cualquierbasura',
    Component: Battleship
  },
  {
    path: '/demos/minesweeper',
    Component: Minesweeper
  },
  {
    path: '/demos/tic-tac-toe',
    Component: TicTacToe
  },
]

const NAVIGATION_EVENT = 'pushstate'

export function navigate(href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function Router ({ routes = [], defaultComponent: DefaultComponent = () => {<h1>AREPITA</h1>} }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect( () => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const Page = routes.find(({path}) => path === currentPath)?.Component

  return Page ? <Page/> : <DefaultComponent/>
}

export function App () {
  
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/demos/battleship' element={<Battleship/>}></Route>
        <Route path='/demos/minesweeper' element={<Minesweeper/>}></Route>
        <Route path='/demos/tic-tac-toe' element={<TicTacToe/>}></Route>
        {/* <Router routes={routes}/> */}
      </Routes>
    </main>
  )
}
