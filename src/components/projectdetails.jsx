// Componente que muestra los detalles de un proyecto, como su nombre, descripción, tecnologías utilizadas y un enlace al proyecto en GitHub.
// Recibe un objeto `project` como prop, que contiene toda la información del proyecto.

import styles from "../styles/projects.module.css";
import { useTranslation } from "react-i18next";

export const ProjectDetails = ({ project }) => {
  const {t} = useTranslation();
  
    return (
      <div className={styles.projectDetails}>
        <h3>{t('projectCard.name')}:</h3>
        <p>{project.name}</p>
        <h3>{t('projectCard.description')}:</h3>
        <p>{project.description}</p>
        <h3>{t('projectCard.technologies')}:</h3>
        <p>{project.technologies}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">{t('Ver Proyecto')}</a>
      </div>
    );
  };