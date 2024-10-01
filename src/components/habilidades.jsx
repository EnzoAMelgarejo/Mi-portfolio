export const Habilidades = () => {
  const habilidades = [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
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