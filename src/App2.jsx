import './App2.css'
import { Experiencie } from './components/Experiencie'
import { Projects } from './components/Projects'
import { experience } from './consts/experiencie'
import { projects } from './consts/projects'

export function App2 () {
  return (
    <div>
      {/* <h1>Diego Alejandro Rejón Clemente</h1> */}
      <h1>Diego Rejón Clemente</h1>
      <h2>Web Developer</h2>
      <h2>Experiencie</h2>
      <Experiencie experiencie={experience}></Experiencie>
      <h2>Projects</h2>
      <Projects projects={projects}></Projects>
      {/* <Projects></Projects> */}
    </div>
  )
}
