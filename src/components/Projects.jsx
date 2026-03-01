import React from 'react';
import { projectsData } from '../data/portofolioData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Work Experience & Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <span className="period">{project.period}</span>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;