import { Project } from "./Project";

export function Projects({ projects }) {
  return (
    <section className="projects">
      {/* <h1>{projec?.title}</h1> */}
        {
          projects?.map((project) => (
            <section key={project.header} className="project">
              <h4>{project.header}</h4>
              <div>
                <a target="blank"  href={project.repositoryLink}>Github</a>
                <a target="blank"  href={project.demoLink}>Demo</a>
              </div>
            </section>
          ))
        }
    </section>
  )
}
