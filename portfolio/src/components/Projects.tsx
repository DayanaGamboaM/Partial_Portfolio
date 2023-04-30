import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';

interface Project {
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/DayanaGamboa/repos');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="container py-5">
        <h2 className="text-center mb-5">Proyectos Realizados</h2>
        <Carousel>
          {projects.map((project) => (
            <Carousel.Item key={project.name}>
              <img className="d-block w-100" src="https://joshuaavalon.io/static/287ae3c9e93bc81220444e187d4ddba4/bb8ee/cover.png" alt={project.name} />
              <Carousel.Caption>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Button variant="primary" size="lg" href={project.html_url} target="_blank">
                Ver Proyecto</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
