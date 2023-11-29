import './App2.css'
import { useState } from 'react'
// import { Experience } from './components/Experience'
// import { Projects } from './components/Projects'
// import { Stack } from './components/Stack'
// import { Studies } from './components/Studies'
// import { studies } from './consts/consts'
// import { experience } from './consts/experience'
// import { projects } from './consts/projects'
// import { stack } from './consts/stack'
import { Home } from './pages/Home'
import { useEffect } from 'react'
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

export function App2 () {
  
  return (
    <main>
      <Router routes={routes}/>
      {/* <Battleship></Battleship> */}
    </main>
  )
}
