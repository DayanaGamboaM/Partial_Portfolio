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
    <section  id="projects">
      <div className="container py-5">
        <h2 className="text-center mb-5">Proyectos Realizados</h2>
        <Carousel>
          
          {projects.map((project) => (
            
            <Carousel.Item key={project.name}>
              
              
              <img className="d-block w-100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--7BmSYvfi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oc7vb24hg8m1b37ul1ex.png" alt={project.name} />
              
              <Carousel.Caption>
                <h3 className='nameProjects'>{project.name} </h3>
                <a className='buttonPro' href={project.html_url} target="_blank">
                Ver Proyecto</a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
