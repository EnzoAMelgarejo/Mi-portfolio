// Componente que muestra las habilidades técnicas que tengo como desarrollador.
// El componente itera sobre un array de habilidades y renderiza un botón para cada habilidad, 
// mostrando su ícono correspondiente usando clases de iconos de Devicon.
// Cada botón tiene un ícono con la clase correspondiente y un aria-label para mejorar la accesibilidad.

import styles from "../styles/skills.module.css"

export const Habilidades = () => {
  const habilidades = [
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "VuejsOriginal", icon: "devicon-vuejs-plain" },
    { name: "ExpressOriginal", icon: "devicon-express-original" },
    { name: "Nestjs", icon: "devicon-nestjs-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  return (
    <>
      <div id="Habilidades">
          <h1>Mis Habilidades</h1>
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