import { Link } from "react-router-dom";

export function Projects({ projects }) {
  return (
    <section className="projects">
        {
          projects?.map((project) => (
            <section key={project.header} className="project">
              <h3>{project.header}</h3>
              <div>
                <Link target={"_blank"} to={project.demoLink}>Demo</Link>
                <Link target={"_blank"} to={project.repositoryLink}>GitHub</Link>
              </div>
            </section>
          ))
        }
    </section>
  )
}
