// Componente que muestra las habilidades técnicas que tengo como desarrollador.
// El componente itera sobre un array de habilidades y renderiza un botón para cada habilidad, 
// mostrando su ícono correspondiente usando clases de iconos de Devicon.
// Cada botón tiene un ícono con la clase correspondiente y un aria-label para mejorar la accesibilidad.


export const Habilidades = () => {
  const habilidades = [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
  ];

  return (
    <>
      <div id="Habilidades">
          <h1>Mis Habilidades</h1>
          <div className="habilidades">
              <div className="botones">
                  {habilidades.map((habilidad) => (
                      <button key={habilidad.name} className="btn-icon" aria-label={habilidad.name}>
                          <i className={habilidad.icon + " colored"}></i>
                      </button>
                  ))}
              </div>
          </div>
      </div>
    </>
  );
};