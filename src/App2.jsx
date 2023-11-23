import './App2.css'
import { Experiencie } from './components/Experiencie'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Studies } from './components/Studies'
import { studies } from './consts/consts'
import { experience } from './consts/experiencie'
import { projects } from './consts/projects'
import { stack } from './consts/stack'

export function App2 () {
  return (
    <div>
      {/* <h1>Diego Alejandro Rejón Clemente</h1> */}
      <header>
        <h1 className='myName'>Diego Alejandro Rejón Clemente</h1>
        <h2 style={{color: 'var(--yellow)'}}>Web Developer</h2>
      </header>

      <h2>Experiencie</h2>
      <Experiencie experiencies={experience}></Experiencie>

      <h2>Projects</h2>
      <Projects projects={projects}></Projects>

      <h2>Studies</h2>
      <Studies studies={studies}></Studies>

      <h2>Stack</h2>
      <Stack stack={stack}></Stack>
    </div>
  )
}
