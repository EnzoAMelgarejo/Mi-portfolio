import {ProjectDetails} from './projectdetails';

export const Proyectos = () => {
  const projects = [
    {
      id: 1,
      name: 'Carrito de compras',
      description: 'En esta aplicación de carrito de compras hecha con React...',
      technologies: 'React - Javascript - Node.js - Vite - Css - HTML - Git - Bootstrap - OpenWeather',
      link: 'https://github.com/EnzoAMelgarejo/Carrito-de-compras-React',
      image: '/Carrito.png',
    },
    {
      id: 2,
      name: 'Aplicación de clima',
      description: 'En esta aplicación de clima con React...',
      technologies: 'React - Javascript - Node.js - Vite - Css - HTML - Git - Bootstrap - OpenWeather',
      link: 'https://github.com/EnzoAMelgarejo/Aplicacion-de-clima',
      image: '/Clima.png',
    }
  ];

  return (
    <>
      <h1>PROYECTOS</h1>
      <div className="proyectos" id="Proyectos">
        <div className="project-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="image">
                  <img src={project.image} alt={`Proyecto ${project.name}`} className="image-project" />
                </a>
                <ProjectDetails project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
