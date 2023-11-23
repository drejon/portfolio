import './App.css'
import { Cards } from './components/Cards'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { experience, projects, studies, svgs } from './consts/consts'

export function App() {

  return (
    <>
    <main className='container'>
      <header>
        <h1 className='name'>Diego Alejandro Rejón Clemente</h1>
        <h2 className='description'>Web Developer</h2>
        <Contact></Contact>
      </header>

      <Cards content={experience}></Cards>
      <Projects content={projects}></Projects>
      <Projects content={svgs}></Projects>
      <Cards content={studies}></Cards>
    </main>
    </>
  )
}
