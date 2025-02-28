// Componente que muestra los detalles de un proyecto, como su nombre, descripción, tecnologías utilizadas y un enlace al proyecto en GitHub.
// Recibe un objeto `project` como prop, que contiene toda la información del proyecto.

export const ProjectDetails = ({ project }) => {
    return (
      <div className="projectDetails">
        <h3>Nombre:</h3>
        <p>{project.name}</p>
        <h3>Descripción:</h3>
        <p>{project.description}</p>
        <h3>Tecnologías:</h3>
        <p>{project.technologies}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </div>
    );
  };