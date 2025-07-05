// Componente que muestra una lista de proyectos en forma de tarjetas (cards).
// Cada tarjeta contiene una imagen del proyecto y un detalle con más información sobre el mismo.
// Los proyectos se almacenan en un arreglo y se renderizan dinámicamente utilizando el método `map`.

import {ProjectDetails} from './projectdetails';
import styles from "../styles/projects.module.css"
import { projects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';

export const Proyectos = () => {

  const {t} = useTranslation();

  return (
    <>
      <h1 style={{textTransform: 'uppercase'}}>{t('sections.proyectos')}</h1>
      <div className={styles.projects} id="Proyectos">
        <div className={styles["project-container"]}>
          {projects.map((project) => (
            <div key={project.id} className={styles["project-card"]}>
              <div className={styles["project-content"]}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.image}>
                  <img src={project.image} alt={`Proyecto ${project.name}`} className={styles["image-project"]} />
                </a>
                <ProjectDetails project={{
                    ...project,
                    name: t(project.nameKey),
                    description: t(project.descriptionKey)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
