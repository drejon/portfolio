import { Link } from "./Link";

export function Projects({ projects }) {
  return (
    <section className="projects">
        {
          projects?.map((project) => (
            <section key={project.header} className="project">
              <h4>{project.header}</h4>
              <div>
                <Link to={project.demoLink} target={'_blank'}>Demo</Link>
                {/* <a target="_blank"  href={project.demoLink}>Demo</a> */}
                <a target="_blank"  href={project.repositoryLink}>Github</a>
              </div>
            </section>
          ))
        }
    </section>
  )
}
