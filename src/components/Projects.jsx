

import { projects } from '../Data'
import Project from '../components/Project';



const Projects = () => {


  return (
    <>
      <section className="project-section clearfix smooth-scroll" id="projects">
        <header className="skills-header">
          <h2>
            web <span>creation</span>
          </h2>
        </header>
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}

          />
        ))}
      </section>
      <div className='content-divider'></div>
    </>
  );
}

export default Projects