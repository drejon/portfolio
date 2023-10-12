import './App.css'
import { Cards } from './components/Cards'
import { experiencie, projects, studies } from './consts/consts'

function App() {

  return (
    <>
    <main className='container'>
      <header>
        <h1 className='name'>Diego Rejón Clemente</h1>
        <h2 className='description'>Full Stack Developer</h2>
      </header>

      <Cards content={experiencie}></Cards>
      <Cards content={studies}></Cards>
      <Cards content={projects}></Cards>
    </main>
    </>
  )
}

export default App
