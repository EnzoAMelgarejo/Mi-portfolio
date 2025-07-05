// Componente que muestra las habilidades técnicas que tengo como desarrollador.
// El componente itera sobre un array de habilidades y renderiza un botón para cada habilidad, 
// mostrando su ícono correspondiente usando clases de iconos de Devicon.
// Cada botón tiene un ícono con la clase correspondiente y un aria-label para mejorar la accesibilidad.

import styles from "../styles/skills.module.css"
import { habilidades } from "../data/skillsData";
import { useTranslation } from "react-i18next";

export const Habilidades = () => {

  const {t} = useTranslation();

  return (
    <>
      <div id="Habilidades">
          <h1 style={{textTransform: 'uppercase'}}>{t('sections.habilidades')}</h1>
          <div className={styles.skills}>
              <div className={styles.btns}>
                  {habilidades.map((habilidad) => (
                      <button key={habilidad.name} className={styles["btn-icon"]} aria-label={habilidad.name}>
                          <i className={habilidad.icon + " colored"}></i>
                      </button>
                  ))}
              </div>
          </div>
      </div>
    </>
  );
};