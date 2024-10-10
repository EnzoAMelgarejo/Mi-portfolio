import {ProjectDetails} from './projectdetails';

export const Proyectos = () => {
  const projects = [
    {
      id: 1,
      name: 'Carrito de compras',
      description: 'Esta aplicación de clima, construida con React, utiliza la API de OpenWeather para mostrar la temperatura en tiempo real y las condiciones meteorológicas. Los usuarios pueden buscar ciudades y ver la información actualizada con un diseño responsivo',
      technologies: 'React - Javascript - Node.js - Vite - Css - HTML - Git - Bootstrap - OpenWeather',
      link: 'https://github.com/EnzoAMelgarejo/Carrito-de-compras-React',
      image: '/Carrito.png',
    },
    {
      id: 2,
      name: 'Aplicación de clima',
      description: 'Esta aplicación de carrito de compras utiliza React y Context para gestionar el estado de manera eficiente. Permite a los usuarios agregar y eliminar productos de forma sencilla, ofreciendo una experiencia responsiva en todos los dispositivos.',
      technologies: 'React - Javascript - Node.js - Vite - Css - HTML - Git - Bootstrap - OpenWeather',
      link: 'https://github.com/EnzoAMelgarejo/Aplicacion-de-clima',
      image: '/Clima.png',
    },
    {
      id: 3,
      name: 'Servidor de peliculas',
      description: 'Esta base de datos de películas es una colección organizada que incluye títulos, géneros y fechas permitiendo a los usuarios buscar y explorar una variedad de películas',
      technologies: 'NodeJs - MongoDBCompass - Docker - Express - Postman - Railway',
      link: 'https://github.com/EnzoAMelgarejo/Node-API-Rest-Mongo',
      image: '/servidormongo.png',
    },
    {
      id: 4,
      name: 'Servidor con autenticacion de usuarios',
      description: 'Este proyecto proporciona una solución segura para la autenticación de usuarios, permitiendo el registro, inicio de sesión y la actualizacion de datos. Con una interfaz amigable y prácticas de seguridad avanzadas, garantiza la protección de los datos del usuario mientras facilita una experiencia intuitiva y accesible.',
      technologies: 'NodeJs - PostgreSQL - Docker - Prisma - Express - JWT - Postman - TypeScript',
      link: 'https://github.com/EnzoAMelgarejo/node-jwt-api-rest-ts-PgreSQL',
      image: '/autenticacion.png',
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
