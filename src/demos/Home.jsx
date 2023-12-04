import { Experience } from "../components/Experience";
// import { Link } from "../components/Link";
import { Projects } from "../components/Projects";
import { Stack } from "../components/Stack";
import { Studies } from "../components/Studies";
import { studies } from "../consts/consts";
import { experience } from "../consts/experience";
import { projects } from "../consts/projects";
import { stack } from "../consts/stack";

export function Home() {
  return (
    <>
      <div id='progress'></div>
        <header>
          <h1 className='myName'>Diego Alejandro Rejón Clemente</h1>
          <h2 style={{color: 'var(--yellow)'}}>Web Developer</h2>
            <a className={'image-link'} href="https://www.linkedin.com/in/diego-alejandro-rej%C3%B3n-clemente-151065177/" target='_blank'>Linkedin</a>
            <a className={'image-link'} href="https://github.com/drejon" target='_blank'>Github</a>
        </header>

        <h2>Experience</h2>
        <Experience experiences={experience}></Experience>

        <h2>Projects</h2>
        <Projects projects={projects}></Projects>

        <h2>Studies</h2>
        <Studies studies={studies}></Studies>

        <h2>Stack</h2>
        <Stack stack={stack}></Stack>

        <h2>Contact</h2>
        <footer>
          <p>drc.working@gmail.com</p>
          <div>
            <a className={'image-link'} href="https://www.linkedin.com/in/diego-alejandro-rej%C3%B3n-clemente-151065177/" target='_blank'>Linkedin</a>
            <a className={'image-link'} href="https://github.com/drejon" target='_blank'>Github</a>
          </div>
        </footer>
    </>
  )
}
