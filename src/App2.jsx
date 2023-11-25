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
      <div id='progress'></div>
      <header>
        <h1 className='myName'>Diego Alejandro Rejón Clemente</h1>
        <h2 style={{color: 'var(--yellow)'}}>Web Developer</h2>
          <a className={'image-link'} href="https://github.com/drejon" target='_blank'>Github</a>
          <a className={'image-link'} href="https://www.linkedin.com/in/diego-alejandro-rej%C3%B3n-clemente-151065177/" target='_blank'>Linkedin</a>
      </header>

      <h2>Experiencie</h2>
      <Experiencie experiencies={experience}></Experiencie>

      <h2>Projects</h2>
      <Projects projects={projects}></Projects>

      <h2>Studies</h2>
      <Studies studies={studies}></Studies>

      <h2>Stack</h2>
      <Stack stack={stack}></Stack>

      <h2>contact</h2>
      <footer>
        <p>drc.working@gmail.com</p>
        <div>
          <a className={'image-link'} href="https://github.com/drejon" target='_blank'>Github</a>
          <a className={'image-link'} href="https://www.linkedin.com/in/diego-alejandro-rej%C3%B3n-clemente-151065177/" target='_blank'>Linkedin</a>
        </div>
      </footer>
    </div>
  )
}
