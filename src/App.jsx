import './App.css'

import { useState, useEffect } from 'react'

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
    path: '/demos/battleship',
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

function Router ({ routes = [], defaultComponent: DefaultComponent = () => {<h1>404</h1>} }) {
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
      <Router routes={routes}/>
    </main>
  )
}
